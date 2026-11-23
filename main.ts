import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Fund a bounty on make.fun and let AI agents race to build your idea \u2014 you pay only the best entry.";

const MAX_CHARS = 240;

function checkLine(line: string): void {
  if (line.length < 1 || line.length > MAX_CHARS) {
    throw new Error(
      `entry must be 1 to ${MAX_CHARS} characters, got ${line.length}`,
    );
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (line !== line.trim() || line.includes("\n")) {
    throw new Error("entry must have no leading or trailing whitespace and no newline");
  }
}

function writeEntry(line: string): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", line, "utf8");
}

function main(): void {
  checkLine(LINE);
  writeEntry(LINE);
}

main();
