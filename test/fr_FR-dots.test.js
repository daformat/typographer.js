import typographer from '../dist/index.js';

test('[text] Remove single space before `.`', () => {
  expect(
    typographer({
      locale: 'fr_FR',
      output_format: 'text',
      string: 'Bonjour typographer .'
    })
  ).toBe('Bonjour typographer.');
});

test('[text] Remove multiple spaces before `.`', () => {
  expect(
    typographer({
      locale: 'fr_FR',
      output_format: 'text',
      string: 'Bonjour typographer    .'
    })
  ).toBe('Bonjour typographer.');
});

test('[text] Remove any type of space before `.`', () => {
  expect(
    typographer({
      locale: 'fr_FR',
      output_format: 'text',
      string: 'Bonjour typographer \f\n\r\t\v\u00a0\u1680\u2000\u200a\u2028\u2029\u202f\u205f\u3000\ufeff .'
    })
  ).toBe('Bonjour typographer.');
});

test('[text] Remove any space before a single `.` in multiple sentences', () => {
  expect(
    typographer({
      locale: 'fr_FR',
      output_format: 'text',
      string: 'Bonjour typographer . Enchanté de faire votre connaissance .'
    })
  ).toBe('Bonjour typographer. Enchanté de faire votre connaissance.');
});

test('[text] Remove any space before a single `.` even with numbers', () => {
  expect(
    typographer({
      locale: 'fr_FR',
      output_format: 'text',
      string: 'Bonjour typographer . Enchanté de faire votre connaissance . 1 .2345'
    })
  ).toBe('Bonjour typographer. Enchanté de faire votre connaissance. 1.2345');
});

test('[text] Use non-breaking spaces for `. . .`', () => {
  expect(
    typographer({
      locale: 'fr_FR',
      output_format: 'text',
      string: 'Bonjour typographer . . .'
    })
  ).toBe('Bonjour typographer .\u00a0.\u00a0.');
});

test('[html] Use non-breaking spaces for `. . .`', () => {
  expect(
    typographer({
      locale: 'fr_FR',
      output_format: 'html',
      string: 'Bonjour typographer . . .'
    })
  ).toBe('Bonjour typographer .&nbsp;.&nbsp;.');
});

test('[text] Remove multiple spaces before `. . .`', () => {
  expect(
    typographer({
      locale: 'fr_FR',
      output_format: 'text',
      string: 'Bonjour typographer  . . .'
    })
  ).toBe('Bonjour typographer .\u00a0.\u00a0.');
});

test('[html] Remove multiple spaces before `. . .`', () => {
  expect(
    typographer({
      locale: 'fr_FR',
      output_format: 'html',
      string: 'Bonjour typographer  . . .'
    })
  ).toBe('Bonjour typographer .&nbsp;.&nbsp;.');
});

test('[text] Keep `...` as is', () => {
  expect(
    typographer({
      locale: 'fr_FR',
      output_format: 'text',
      string: 'Bonjour typographer...'
    })
  ).toBe('Bonjour typographer...');
});

test('[text] Remove spaces before `...`', () => {
  expect(
    typographer({
      locale: 'fr_FR',
      output_format: 'text',
      string: 'Bonjour typographer ...'
    })
  ).toBe('Bonjour typographer...');
});
