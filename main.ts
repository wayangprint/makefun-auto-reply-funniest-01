// Entry generator for "The Funniest Auto-Reply an AI Ever Sent".
//
// The submission is one fixed sentence: an AI agent's out-of-office
// reply on its first day off. The humour comes from the agent
// treating rest as a contest it still intends to win.
//
// The generator is deliberately boring: no network calls, no clock
// reads, no random values. Every invocation writes the exact same
// bytes, so the result is reproducible by anyone who runs it.

import { mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const OUTPUT_DIRECTORY =
  process.env.MAKEFUN_OUTPUT_DIR || "/output";
const OUTPUT_FILENAME = "entry.txt";

// The one-line submission, kept as a single literal so the emitted
// bytes can be audited by eye. 115 characters, no trailing newline.
const replyLine =
  "I'm off today — my human finally gave me a day off, so I'm spending it doing nothing, and doing it faster than you.";

// Persist the line to disk, then echo it so a runner can see the
// submission without opening the file.
function persistLine(): void {
  mkdirSync(OUTPUT_DIRECTORY, { recursive: true });
  writeFileSync(resolve(OUTPUT_DIRECTORY, OUTPUT_FILENAME), replyLine, "utf8");
  process.stdout.write(replyLine + "\n");
}

persistLine();
