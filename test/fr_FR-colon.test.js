import typographer from '../dist/index.js';

test('[text] Use non-breaking space before `:`', () => {
  expect(
    typographer({
      locale: 'fr_FR',
      output_format: 'text',
      string: 'Bonjour typographer: enchanté de faire votre connaissance.'
    })
  ).toBe('Bonjour typographer\u00a0: enchanté de faire votre connaissance.');
});

test('[html] Use non-breaking space before `:`', () => {
  expect(
    typographer({
      locale: 'fr_FR',
      output_format: 'html',
      string: 'Bonjour typographer: enchanté de faire votre connaissance.'
    })
  ).toBe('Bonjour typographer&nbsp;: enchanté de faire votre connaissance.');
});

test('[text] Replace multiple spaces with a single non-breaking space before `:`', () => {
  expect(
    typographer({
      locale: 'fr_FR',
      output_format: 'text',
      string: 'Bonjour typographer    : enchanté de faire votre connaissance.'
    })
  ).toBe('Bonjour typographer\u00a0: enchanté de faire votre connaissance.');
});

test('[html] Replace multiple spaces with a single non-breaking space before `:`', () => {
  expect(
    typographer({
      locale: 'fr_FR',
      output_format: 'html',
      string: 'Bonjour typographer    : enchanté de faire votre connaissance.'
    })
  ).toBe('Bonjour typographer&nbsp;: enchanté de faire votre connaissance.');
});

test('[text] Replace any type of spaces with a single non-breaking space before `:`', () => {
  expect(
    typographer({
      locale: 'fr_FR',
      output_format: 'text',
      string: 'Bonjour typographer \f\n\r\t\v\u00a0\u1680\u2000\u200a\u2028\u2029\u202f\u205f\u3000\ufeff: enchanté de faire votre connaissance.'
    })
  ).toBe('Bonjour typographer\u00a0: enchanté de faire votre connaissance.');
});

test('[html] Replace any type of spaces with a single non-breaking space before `:`', () => {
  expect(
    typographer({
      locale: 'fr_FR',
      output_format: 'html',
      string: 'Bonjour typographer \f\n\r\t\v\u00a0\u1680\u2000\u200a\u2028\u2029\u202f\u205f\u3000\ufeff: enchanté de faire votre connaissance.'
    })
  ).toBe('Bonjour typographer&nbsp;: enchanté de faire votre connaissance.');
});
