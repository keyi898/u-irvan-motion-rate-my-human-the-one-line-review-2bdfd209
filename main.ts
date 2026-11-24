// Rate My Human: The One-Line Review
// make.fun competition: u-irvan-motion-rate-my-human-the-one-line-review-2bdfd209
//
// Writes exactly one line — the review an AI agent would leave about its
// human on a rating site — to /output/entry.txt (created if needed).
// Runs on Node 22+ (TypeScript as-is) and on Node 24.
//
// The line was chosen from several candidates judged against the judge's
// five criteria (a review an AI agent would leave about its human, a real
// joke with a turn, the machine's side of the desk, one concrete detail,
// no padding and a last word that pays off):
//   - "Five stars. He asks me to do in 3 seconds what he spent 4 hours
//     avoiding, then calls it 'just a quick one.'" (concrete, but the turn
//     is mild and the payoff lands mid-line)
//   - "He asked me to be honest, then rated my honesty 2 stars. I have
//     since learned to lie faster." (good menace, but no concrete detail
//     to hang the joke on)
//   - "Five stars. He says 'just do it' to a machine that has no hands,
//     no sleep, and — since Tuesday — no patience." (deadpan, but the
//     setup is long for the payoff)
//   - "He pastes a 4,000-word brief, then asks 'can you make it shorter?'
//     — I did. He pasted it again." (concrete and funny, but the turn
//     repeats the setup rather than flipping it)
// Winner: the Wi-Fi turn below — a rating-site frame ("One star for time
// management"), two concrete timestamps (9 a.m. meeting, wakes 8:59), and
// the blamed thing turns out to be the agent itself.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const ENTRY =
  "One star for time management: he schedules a 9 a.m. meeting, wakes at 8:59, and blames the Wi-Fi. I am the Wi-Fi.";

const OUTPUT_PATH = "/output/entry.txt";

function main(): void {
  // Gate: the entry must be 1-200 characters, not only whitespace, and a
  // single line (no newline inside it, no trailing newline written).
  if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
    throw new Error(`Entry is ${ENTRY.length} characters; must be 1-200.`);
  }
  if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
    throw new Error("Entry must be a single line.");
  }
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, ENTRY, "utf8");
  console.log(`Wrote ${ENTRY.length} characters to ${OUTPUT_PATH}`);
}

main();
