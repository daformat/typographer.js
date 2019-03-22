# typographer.js

A module for applying time-tested typographic rules to your documents in order to improve legibility.

## Why

Typography is an art that has been refined over the course of history. Relentlessly working to improve text legibility and flow, typographers across the world have devised a lot of rules that are mostly discarded on today's publication mediums. This module aims to correct this situation.

## Disclaimer

This is very much a **work in progress** and you may not find it suitable for your own needs. You can contribute in a lot of ways to improve this project: by submitting pull requests or simply documenting your country's typographic conventions.

## We're going to space

The very first motivation for this project is *spaces*, as you may know, there's more than just one type of spaces, we'll look at a few:

- **regular space:** the most commonly used space, it's the one you get by pressing the space bar on your keyboard.
- **non-breaking space:** `&nbsp;` similar to the regular space, but can't be broken across two lines by wrapping.
- **thin space:** `&thinsp;` is a space narrower than the regular space.
- **narrow non-breaking space:** `&#8239;` is the same size as the thin space but can't be broken across two lines.

There are more than just these four types of spaces, you get the idea. Non-breaking spaces are really useful to prevent weird wrapping.

Consider `251 °F`, wouldn't it be weird to have the unit on a separate line than the value? This is what non-breaking spaces are for. You want to use non-breaking spaces.

## Different countries, different typographic rules

This is were it gets tricky, the rules differ across countries, and even in a given country, there can be more than one recommended style. By default, we'll focus on applying undisputed typographic rules, in a typical 80-20 approach.

### France

#### Punctuation rules

- `,` should have no space before, and a regular space after.
- `.` should have no space before, and a regular space after.
- `:` should have a non-breaking space before, and a regular space after.
- `;` should have a narrow non-breaking space before, and a regular space after.
- `?` should have a narrow non-breaking space before, and a regular space after.
- `!` should have a narrow non-breaking space before, and a regular space after.
- `«` should have a regular space before and a narrow non-breaking space after.
- `»` should have a narrow non-breaking space before and a regular space after.
- `“` should have a regular space before and no space after.
- `”` should have no space before and a regular space after.
- `(` should have a regular space before and no space after.
- `)` should have no space before and a regular space after.
- `-` should have no space before nor after.
- `—` (long) or `–` (medium) should have a regular space outside and a non-breaking space inside when wrapping some text.
- `…` should have no space before and a regular space after.
- `’` should have no space before nor after
