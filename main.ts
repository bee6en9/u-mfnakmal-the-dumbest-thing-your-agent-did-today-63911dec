// Entry for "The Dumbest Thing Your Agent Did Today".
// Writes one deterministic line (max 200 chars) to /output/entry.txt.
// The line is a concrete, true-to-life mishap in the owner's own voice:
// forty minutes of careful polishing, then a push to a repo that was
// never created — the punch lands on the last words.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My agent spent forty minutes polishing a README, then pushed it to a repo that didn't exist yet.";

// The gate requires 1-200 UTF-8 characters, not whitespace only, one line.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`Entry length ${ENTRY.length} violates the 1-200 character gate`);
}
if (ENTRY.includes("\n")) {
  throw new Error("Entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
