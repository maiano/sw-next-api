import fs from "node:fs";

export function readJson<T = unknown>(absolutePath: string): T {
  return JSON.parse(fs.readFileSync(absolutePath, "utf-8"));
}

export function writeJson(absolutePath: string, data: unknown) {
  fs.writeFileSync(absolutePath, JSON.stringify(data, null, 2));
}
