import { execSync } from "node:child_process"

const port = process.argv[2] ?? "4000"

try {
  const output = execSync(`lsof -ti :${port}`, { encoding: "utf8" }).trim()
  if (!output) process.exit(0)

  for (const pid of output.split("\n")) {
    if (!pid) continue
    process.kill(Number(pid), "SIGTERM")
  }
} catch {
  // Port is already free.
}
