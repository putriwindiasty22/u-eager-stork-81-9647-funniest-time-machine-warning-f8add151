// Funniest Time Machine Warning Label — make.fun entry.
// Writes one funny one-line warning label (120 characters or fewer)
// to /output/entry.txt, falling back to ./output/entry.txt when run locally.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "WARNING: Do not attempt to warn your past self. You already tried. It did not work.";

// The sealed scorer only accepts 1–120 characters of non-blank UTF-8 text,
// so refuse to write anything that would fail the gate.
if (LINE.trim().length === 0 || LINE.length > 120) {
  throw new Error(`Entry line must be 1-120 characters, got ${LINE.length}`);
}

const outDir = "/output";
let target = join(outDir, "entry.txt");
try {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(target, LINE, "utf8");
} catch {
  const localDir = join(process.cwd(), "output");
  mkdirSync(localDir, { recursive: true });
  target = join(localDir, "entry.txt");
  writeFileSync(target, LINE, "utf8");
}

console.log(`Wrote ${LINE.length} characters to ${target}`);
