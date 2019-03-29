# typographer.js
![ready](https://img.shields.io/badge/Is%20it%20ready%20yet%3F-NO-red.svg)
![license](https://img.shields.io/github/license/daformat/typographer.js.svg)

A module for applying time-tested typographic rules to your documents in order to improve legibility.

## Disclaimer

This is very much a **work in progress** and you may not find it suitable for your own needs. You can contribute in a lot of ways to improve this project: by submitting pull requests, suggesting ideas, or documenting your country’s own typographic conventions.

## Why

Typography is an art, as much as a science, that has been refined over the course of history. Relentlessly working to improve text legibility and flow, typographers across the world have devised a lot of rules that are mostly discarded on today’s publication mediums. This module aims to correct this situation.

## Usage

```js
typographer(input, configuration);
```

`input` is a string **or** an HTML element.

`configuration` is an object with the following optional properties:
- `locale`: the language code to use.
- `output_format`: either `text` or `html`, format used for replacements (e.g. `\u00a0` or `&nbsp;` for non-breaking spaces).
- `disable_rules`: array of rules to disable (e.g `['ruleset/name1', 'ruleset2/name2', ...]`).

**Depending on the input type**, typographer will either return a string (when using a string input), or update the element and its descendants directly in the DOM.

### String input

```js
const fixed = typographer(
  'Bonjour typographer: enchanté !',
  {
    locale: 'fr_FR',
    output_format: 'html'
  }
);

console.log(fixed) // 'Bonjour typographer&nbsp;: enchanté&#8239;!'
```

### HTML element input

```js
const elements = document.querySelectorAll('.fixTypography')

[].forEach.call(elements, element => {
  typographer(
    element,
    {
      locale: 'fr_FR',
      output_format: 'html'
    }
  );
});
```

## Limitations

This can never be perfect, for instance, the International System of Units specifies that the units should be preceded by a space (a non-breaking one), but it's rather difficult to make sure something is a unit. Some units can be very ambiguous (e.g. V for Volt, can also be the roman numeral for 5).

We'll add a non-breaking space on units which we're pretty sure of. And will leave it to you to do it for ambiguous ones.

## We’re going to space

The very first motivation for this project is *spaces*, as you may know, there’s more than just one type of spaces, we’ll look at a few:

- **regular space:** the most commonly used space, it’s the one you get by pressing the space bar on your keyboard.
- **non-breaking space:** `&nbsp;` similar to the regular space, but can’t be broken across two lines when wrapping. Both words (separated by a non-breaking space) will always end up on the same line.
- **thin space:** `&thinsp;` is a space narrower than the regular space.
- **narrow non-breaking space:** `&#8239;` is the same size as the thin space but can’t be broken across two lines.

There are [more than just these four types of spaces](https://gist.github.com/daformat/950411857f01a9b39873ddd1b44d5813), but you get the idea. Non-breaking spaces are really useful to prevent weird wrapping.

Consider `451 °F`, wouldn’t it be weird to have the unit on a separate line than the value? This is what non-breaking spaces are for. You want to use non-breaking spaces.

## Different countries, different typographic rules

This is were it gets tricky, the rules differ across countries, and even in a given country, there can be more than one recommended style. By default, we’ll focus on applying undisputed typographic rules, in a typical 80-20 approach.

### France / Belgium / Switzerland (french)

**Note:** Canada (french) uses [different rules](https://www.btb.termiumplus.gc.ca/tcdnstyl-chap?lang=eng&lettr=chapsect17&info0=17.07) for punctuation.

#### Punctuation rules

- `,` should have no space before, and a regular space after.
- `.` should have no space before, and a regular space after.
- `:` should have a non-breaking space before, and a regular space after.
- `;` should have a narrow non-breaking space before, and a regular space after.
- `?` should have a narrow non-breaking space before, and a regular space after.
- `!` should have a narrow non-breaking space before, and a regular space after.
- `«`, `‹` should have a regular space before and a narrow non-breaking space after.
- `»`, `›` should have a narrow non-breaking space before and a regular space after.
- `“`, `‘` should have a regular space before and no space after.
- `”`, `’` should have no space before and a regular space after.
- `(` should have a regular space before and no space after.
- `)` should have no space before and a regular space after.
- `[` should have a regular space before and no space after.
- `]` should have no space before and a regular space after.
- `-` (hyphen) should have no space before nor after.
- `—` (em, long) or `–` (en, medium) should have a regular space outside and a non-breaking space inside when paired around some text.
- `…`, `...`, or `. . .` should have no space before and a regular space after. Except when in between square brackets or parentheses where there should be no space before nor after.
- `’` should have no space before nor after

### United Kingdom / United States

#### Punctuation rules

- `,` should have no space before, and a regular space after.
- `.` should have no space before, and a regular space after.
- `:` should have no space before, and a regular space after.
- `;` should have no space before, and a regular space after.
- `?` should have no space before, and a regular space after.
- `!` should have no space before, and a regular space after.
- `“`, `‘` should have a regular space before and no space after.
- `”`, `’` should have no space before and a regular space after.
- `«`, `‹` should have a regular space before and a narrow non-breaking space after.
- `»`, `›` should have a narrow non-breaking space before and a regular space after.
- `(` should have a regular space before and no space after.
- `)` should have no space before and a regular space after.
- `[` should have a regular space before and no space after.
- `]` should have no space before and a regular space after.
- `-` (hyphen) should have no space before nor after.
- `—` (em, long) or `–` (en, medium) should have no space before nor after. The em dash should have a space before when used to indicate the source of a quotation.
- `…`, `...`, or `. . .` can have regular spaces before and after, no space before and a regular space after, or a space before and no space after.
- `’` should have no space before nor after
