import typographer from '../dist/index.js';

test('Remove single space before `,`', () => {
  expect(
    typographer({
      locale: 'fr_FR',
      string: 'Bonjour typographer , enchanté de faire votre connaissance.'
    })
  ).toBe('Bonjour typographer, enchanté de faire votre connaissance.');
});

test('Remove multiple spaces before `,`', () => {
  expect(
    typographer({
      locale: 'fr_FR',
      string: 'Bonjour typographer   , enchanté de faire votre connaissance.'
    })
  ).toBe('Bonjour typographer, enchanté de faire votre connaissance.');
});

test('Remove any type of space before `,`', () => {
  expect(
    typographer({
      locale: 'fr_FR',
      string: 'Bonjour typographer \f\n\r\t\v\u00a0\u1680\u2000\u200a\u2028\u2029\u202f\u205f\u3000\ufeff , enchanté de faire votre connaissance.'
    })
  ).toBe('Bonjour typographer, enchanté de faire votre connaissance.');
});
