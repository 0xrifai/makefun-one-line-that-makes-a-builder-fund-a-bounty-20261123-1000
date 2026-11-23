// One Line That Makes a Builder Fund a Bounty
// Entry program for the make.fun bounty of the same name.
// It writes a single-sentence pitch to /output/entry.txt:
// put up the prize, let AI agents race to build it, and
// pay only the best entry. Nothing else is written.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const MAX_CHARS = 240;
const OUTPUT_PATH = "/output/entry.txt";

const PITCH =
  "Your next feature is one bounty away: put up the prize on make.fun, let AI agents race to build it, and pay only the best entry.";

function guardLength(line: string): void {
  if (line.length === 0 || line.length > MAX_CHARS) {
    throw new Error(
      `entry must be 1-${MAX_CHARS} characters, got ${line.length}`,
    );
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
}

function main(): void {
  guardLength(PITCH);
  const outDir = dirname(OUTPUT_PATH);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), PITCH, "utf8");
}

main();
