import { copyFile, mkdir } from 'node:fs/promises'
import { join } from 'node:path'

const distDir = 'dist'
const routes = ['what-i-do', 'contact', 'owner', 'gallery', 'painter-of-dreams', 'wasteland-companion-guide']

await Promise.all(
  routes.map(async (route) => {
    const routeDir = join(distDir, route)
    await mkdir(routeDir, { recursive: true })
    await copyFile(join(distDir, 'index.html'), join(routeDir, 'index.html'))
  }),
)
