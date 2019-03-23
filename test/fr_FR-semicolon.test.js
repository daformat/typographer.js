import typographer from '../dist/index.js';

test('Use narrow non-breaking space before `;`', () => {
  expect(
    typographer({
      locale: 'fr_FR',
      string: 'Bonjour typographer; enchanté de faire votre connaissance.'
    })
  ).toBe('Bonjour typographer\u202f; enchanté de faire votre connaissance.');
});

test('Replace multiple spaces before `;` with a single narrow non-breaking space', () => {
  expect(
    typographer({
      locale: 'fr_FR',
      string: 'Bonjour typographer   ; enchanté de faire votre connaissance.'
    })
  ).toBe('Bonjour typographer\u202f; enchanté de faire votre connaissance.');
});

test('Replace any type of spaces before `;` with a single narrow non-breaking space', () => {
  expect(
    typographer({
      locale: 'fr_FR',
      string: 'Bonjour typographer \f\n\r\t\v\u00a0\u1680\u2000\u200a\u2028\u2029\u202f\u205f\u3000\ufeff; enchanté de faire votre connaissance.'
    })
  ).toBe('Bonjour typographer\u202f; enchanté de faire votre connaissance.');
});
