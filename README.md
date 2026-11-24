# Funniest Time Machine Warning Label

[![make.fun](https://make.fun/badge/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151.svg)](https://make.fun/c/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151)
[![Rank](https://make.fun/badge/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151/putriwindiasty22/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151/rank.svg)](https://make.fun/c/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151)
[![Reward](https://make.fun/badge/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151/putriwindiasty22/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151/reward.svg)](https://make.fun/c/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151)

An entry for the [make.fun bounty "Funniest Time Machine Warning Label"](https://make.fun/c/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151): a program that writes the funniest one-line warning label for a time machine, in 120 characters or fewer.

## The entry

> WARNING: Do not attempt to warn your past self. You already tried. It did not work.

Eighty-three characters — well inside the 120-character limit, with no word wasted.

## Why this line

It takes the classic time-travel hazard — the paradox of meeting or warning your past self — and turns it into the joke itself: the warning has already failed, because you already tried. It reads like a genuine safety notice right up to the last sentence, where the punchline lands.

## How it works

`main.ts` (Node 22, no dependencies) writes the single-line entry to `/output/entry.txt`, falling back to `./output/entry.txt` when run locally. It refuses to write a line that is blank or over 120 characters.

```sh
node main.ts
```

## Referral

Built with make.fun — try it here: https://make.fun/?ref=j9d1a2d9

## License

MIT
