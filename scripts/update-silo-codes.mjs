import { readFile, writeFile } from 'node:fs/promises'

// Local Windows runs may need: $env:NODE_OPTIONS='--use-system-ca'
const FALLOUT_BUILDS_URL = 'https://www.falloutbuilds.com/fo76/nuke-codes/'
const WULFZX_SILO_SCRIPT_URL = 'https://shahunter1989-ux.github.io/wulfzx-underground-silo-codes/script.js'
const OUTPUT_PATH = new URL('../public/wasteland-companion-guide-app/weekly-silo-codes/silo-codes.json', import.meta.url)

function decodeEntities(value) {
  return String(value)
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&ndash;|&#8211;|&#x2013;/g, '-')
    .replace(/&mdash;|&#8212;|&#x2014;/g, '-')
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&#x([a-f0-9]+);/gi, (_, code) => String.fromCharCode(Number.parseInt(code, 16)))
}

function stripTags(value) {
  return decodeEntities(String(value).replace(/<[^>]*>/g, ' ')).replace(/\s+/g, ' ').trim()
}

function cleanCode(value) {
  const digits = String(value || '').replace(/\D/g, '')
  if (!/^\d{8}$/.test(digits)) {
    throw new Error(`Expected an 8-digit silo code, received "${value}"`)
  }
  return digits
}

function getUnixTimestamp(html, label) {
  const pattern = new RegExp(`Valid ${label}\\s*<strong[^>]*data-localtime=["'](\\d+)["'][^>]*>`, 'i')
  const match = html.match(pattern)
  if (!match) {
    throw new Error(`Could not find valid ${label} timestamp on FalloutBuilds`)
  }
  return Number(match[1])
}

function parseCodes(html) {
  const terminalMatch = html.match(/>\s*Accessing silos[\s\S]*?<div class="d-flex flex-column gap-3[\s\S]*?<\/div>\s*<\/div>/i)
  const terminalHtml = terminalMatch?.[0] || html

  const findCode = (silo) => {
    const pattern = new RegExp(`<small>\\s*${silo}\\s*<\\/small>\\s*<br\\s*\\/?>\\s*([\\d\\s]+)`, 'i')
    const match = terminalHtml.match(pattern)
    if (!match) {
      throw new Error(`Could not find ${silo} code on FalloutBuilds`)
    }
    return cleanCode(match[1])
  }

  return {
    alpha: findCode('ALPHA'),
    bravo: findCode('BRAVO'),
    charlie: findCode('CHARLIE'),
  }
}

function createPayloadFromFalloutBuilds(html) {
  const fromUnix = getUnixTimestamp(html, 'from')
  const toUnix = getUnixTimestamp(html, 'to')
  const codes = parseCodes(html)

  return {
    ...codes,
    validFrom: new Date(fromUnix * 1000).toISOString(),
    validTo: new Date(toUnix * 1000).toISOString(),
    resetText: 'Weekly reset - Tuesday after 20:00 UTC',
    requiredItem: 'Nuclear Keycard',
    status: 'AUTHORIZED',
    sourceUrl: FALLOUT_BUILDS_URL,
    externalSourceUrl: 'https://wzxu76.pro/silo-codes',
    sourceName: 'FalloutBuilds',
    lastUpdated: new Date().toISOString(),
  }
}

function getConfigValue(script, key) {
  const pattern = new RegExp(`${key}:\\s*["']([^"']+)["']`)
  const match = script.match(pattern)
  if (!match) {
    throw new Error(`Could not find ${key} in WULFZX silo utility config`)
  }
  return match[1]
}

function createPayloadFromWulfzxUtility(script) {
  const alpha = cleanCode(getConfigValue(script, 'alpha'))
  const bravo = cleanCode(getConfigValue(script, 'bravo'))
  const charlie = cleanCode(getConfigValue(script, 'charlie'))
  const validFrom = new Date(getConfigValue(script, 'validFrom'))
  const validTo = new Date(getConfigValue(script, 'validTo'))

  if (Number.isNaN(validFrom.getTime()) || Number.isNaN(validTo.getTime())) {
    throw new Error('WULFZX silo utility returned invalid validity dates')
  }

  return {
    alpha,
    bravo,
    charlie,
    validFrom: validFrom.toISOString(),
    validTo: validTo.toISOString(),
    resetText: 'Weekly reset - Tuesday after 20:00 UTC',
    requiredItem: getConfigValue(script, 'requiredItem') || 'Nuclear Keycard',
    status: getConfigValue(script, 'status') || 'AUTHORIZED',
    sourceUrl: WULFZX_SILO_SCRIPT_URL,
    externalSourceUrl: 'https://wzxu76.pro/silo-codes',
    sourceName: 'WULFZX Silo Utility',
    lastUpdated: new Date().toISOString(),
  }
}

async function readExistingPayload() {
  try {
    return JSON.parse(await readFile(OUTPUT_PATH, 'utf8'))
  } catch {
    return null
  }
}

function isSameCodeWindow(current, next) {
  if (!current) return false
  const hasSameCodes = ['alpha', 'bravo', 'charlie'].every((key) => current[key] === next[key])
  const isSameTime = (key) => Math.abs(new Date(current[key]).getTime() - new Date(next[key]).getTime()) <= 60000
  return hasSameCodes && isSameTime('validFrom') && isSameTime('validTo')
}

async function fetchText(url) {
  const response = await fetch(url, {
    headers: {
      'user-agent': 'WULFZX-Underground-Silo-Code-Updater/1.0 (+https://wzxu.pro)',
      accept: 'text/html,application/xhtml+xml',
    },
  })

  if (!response.ok) {
    throw new Error(`${url} returned HTTP ${response.status}`)
  }

  return response.text()
}

async function getNextPayload() {
  if (process.env.WZXU_SILO_SOURCE === 'wulfzx-utility') {
    const script = await fetchText(WULFZX_SILO_SCRIPT_URL)
    return createPayloadFromWulfzxUtility(script)
  }

  try {
    const html = await fetchText(FALLOUT_BUILDS_URL)
    return createPayloadFromFalloutBuilds(html)
  } catch (error) {
    console.warn(`FalloutBuilds sync failed: ${error.message}`)
    console.warn('Falling back to WULFZX silo utility config.')
    const script = await fetchText(WULFZX_SILO_SCRIPT_URL)
    return createPayloadFromWulfzxUtility(script)
  }
}

async function main() {
  const nextPayload = await getNextPayload()
  const currentPayload = await readExistingPayload()

  if (isSameCodeWindow(currentPayload, nextPayload)) {
    console.log('Weekly silo codes are already current.')
    return
  }

  await writeFile(OUTPUT_PATH, `${JSON.stringify(nextPayload, null, 2)}\n`, 'utf8')
  console.log(`Updated weekly silo codes from ${stripTags(nextPayload.sourceName)}.`)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
