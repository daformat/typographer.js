import typographer from '../dist/index.js';

test('Use narrow non-breaking space before `!`', () => {
  expect(
    typographer({
      locale: 'fr_FR',
      output_format: 'text',
      string: 'Bonjour typographer!'
    })
  ).toBe('Bonjour typographer\u202f!');
});

test('Replace multiple spaces before `!` with a single narrow non-breaking space', () => {
  expect(
    typographer({
      locale: 'fr_FR',
      output_format: 'text',
      string: 'Bonjour typographer   !'
    })
  ).toBe('Bonjour typographer\u202f!');
});

test('Replace any type of spaces before `!` with a single narrow non-breaking space', () => {
  expect(
    typographer({
      locale: 'fr_FR',
      output_format: 'text',
      string: 'Bonjour typographer \f\n\r\t\v\u00a0\u1680\u2000\u200a\u2028\u2029\u202f\u205f\u3000\ufeff!'
    })
  ).toBe('Bonjour typographer\u202f!');
});
