import { copyFile, mkdir } from 'node:fs/promises'
import { join } from 'node:path'

const distDir = 'dist'
const routes = [
  'arcade',
  'main/arcade',
  'main',
  'main/what-i-do',
  'main/contact',
  'main/owner',
  'admin',
  'main/community-agreement',
  'main/gallery',
  'main/painter-of-dreams',
  'main/wasteland-companion-guide',
  'privacy',
  'privacy/wzxu-seller-inventory',
]

await Promise.all(
  routes.map(async (route) => {
    const routeDir = join(distDir, route)
    await mkdir(routeDir, { recursive: true })
    await copyFile(join(distDir, 'index.html'), join(routeDir, 'index.html'))
  }),
)
