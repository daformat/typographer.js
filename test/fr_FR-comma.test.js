import typographer from '../dist/index.js';

test('[text] Remove single space before `,`', () => {
  expect(
    typographer({
      locale: 'fr_FR',
      output_format: 'text',
      string: 'Bonjour typographer , enchanté de faire votre connaissance.'
    })
  ).toBe('Bonjour typographer, enchanté de faire votre connaissance.');
});

test('[text] Remove multiple spaces before `,`', () => {
  expect(
    typographer({
      locale: 'fr_FR',
      output_format: 'text',
      string: 'Bonjour typographer   , enchanté de faire votre connaissance.'
    })
  ).toBe('Bonjour typographer, enchanté de faire votre connaissance.');
});

test('[text] Remove any type of space before `,`', () => {
  expect(
    typographer({
      locale: 'fr_FR',
      output_format: 'text',
      string: 'Bonjour typographer \f\n\r\t\v\u00a0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2028\u2029\u202f\u205f\u3000\ufeff , enchanté de faire votre connaissance.'
    })
  ).toBe('Bonjour typographer, enchanté de faire votre connaissance.');
});
