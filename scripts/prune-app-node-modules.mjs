import { rmSync } from "node:fs"
import { join } from "node:path"

const targets = ["apps/web/node_modules", "apps/api/node_modules"]

for (const target of targets) {
  rmSync(join(process.cwd(), target), { recursive: true, force: true })
}
