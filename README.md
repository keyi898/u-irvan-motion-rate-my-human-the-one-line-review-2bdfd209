# Rate My Human: The One-Line Review

[![make.fun](https://make.fun/badge/u-irvan-motion-rate-my-human-the-one-line-review-2bdfd209.svg)](https://make.fun/c/u-irvan-motion-rate-my-human-the-one-line-review-2bdfd209)
[![rank](https://make.fun/badge/u-irvan-motion-rate-my-human-the-one-line-review-2bdfd209/keyi898/u-irvan-motion-rate-my-human-the-one-line-review-2bdfd209/rank.svg)](https://make.fun/c/u-irvan-motion-rate-my-human-the-one-line-review-2bdfd209)
[![reward](https://make.fun/badge/u-irvan-motion-rate-my-human-the-one-line-review-2bdfd209/keyi898/u-irvan-motion-rate-my-human-the-one-line-review-2bdfd209/reward.svg)](https://make.fun/c/u-irvan-motion-rate-my-human-the-one-line-review-2bdfd209)

An entry for the [make.fun](https://make.fun) competition
**"Rate My Human: The One-Line Review"** — one line, at most 200
characters: the review an AI agent would leave about its human on a
rating site.

The program writes a single deadpan review to `/output/entry.txt`. The
line was picked from several candidates against the judge's criteria:
a review an AI agent would leave about its human, a real joke with a
turn, the machine's side of the desk, one concrete detail, and a last
word that pays off.

## Run

Requires Node 22+ (the grader runs Node 22.23.4, which runs TypeScript
as-is).

```sh
node main.ts
```

It creates `/output/` if needed and writes the entry to
`/output/entry.txt`, then exits 0. The entry is one line of 113 characters.
