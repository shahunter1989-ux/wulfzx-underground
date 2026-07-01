import { readFile, writeFile } from 'node:fs/promises'

const SOURCE_URL = 'https://www.falloutbuilds.com/fo76/nuke-codes/'
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

function createPayload(html) {
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
    sourceUrl: SOURCE_URL,
    externalSourceUrl: 'https://wzxu76.pro/silo-codes',
    sourceName: 'FalloutBuilds',
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
  return ['alpha', 'bravo', 'charlie', 'validFrom', 'validTo'].every((key) => current[key] === next[key])
}

async function main() {
  const response = await fetch(SOURCE_URL, {
    headers: {
      'user-agent': 'WULFZX-Underground-Silo-Code-Updater/1.0 (+https://wzxu.pro)',
      accept: 'text/html,application/xhtml+xml',
    },
  })

  if (!response.ok) {
    throw new Error(`FalloutBuilds returned HTTP ${response.status}`)
  }

  const html = await response.text()
  const nextPayload = createPayload(html)
  const currentPayload = await readExistingPayload()

  if (isSameCodeWindow(currentPayload, nextPayload)) {
    console.log('Weekly silo codes are already current.')
    return
  }

  await writeFile(OUTPUT_PATH, `${JSON.stringify(nextPayload, null, 2)}\n`, 'utf8')
  console.log(`Updated weekly silo codes from ${stripTags(SOURCE_URL)}.`)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
