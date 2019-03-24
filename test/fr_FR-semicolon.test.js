import typographer from '../dist/index.js';

test('[text] Use narrow non-breaking space before `;`', () => {
  expect(
    typographer({
      locale: 'fr_FR',
      output_format: 'text',
      string: 'Bonjour typographer; enchanté de faire votre connaissance.'
    })
  ).toBe('Bonjour typographer\u202f; enchanté de faire votre connaissance.');
});

test('[html] Use narrow non-breaking space before `;`', () => {
  expect(
    typographer({
      locale: 'fr_FR',
      output_format: 'html',
      string: 'Bonjour typographer; enchanté de faire votre connaissance.'
    })
  ).toBe('Bonjour typographer&#8239;; enchanté de faire votre connaissance.');
});

test('[text] Replace multiple spaces before `;` with a single narrow non-breaking space', () => {
  expect(
    typographer({
      locale: 'fr_FR',
      output_format: 'text',
      string: 'Bonjour typographer   ; enchanté de faire votre connaissance.'
    })
  ).toBe('Bonjour typographer\u202f; enchanté de faire votre connaissance.');
});

test('[html] Replace multiple spaces before `;` with a single narrow non-breaking space', () => {
  expect(
    typographer({
      locale: 'fr_FR',
      output_format: 'html',
      string: 'Bonjour typographer   ; enchanté de faire votre connaissance.'
    })
  ).toBe('Bonjour typographer&#8239;; enchanté de faire votre connaissance.');
});

test('[text] Replace any type of spaces before `;` with a single narrow non-breaking space', () => {
  expect(
    typographer({
      locale: 'fr_FR',
      output_format: 'text',
      string: 'Bonjour typographer \f\n\r\t\v\u00a0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2028\u2029\u202f\u205f\u3000\ufeff; enchanté de faire votre connaissance.'
    })
  ).toBe('Bonjour typographer\u202f; enchanté de faire votre connaissance.');
});

test('[html] Replace any type of spaces before `;` with a single narrow non-breaking space', () => {
  expect(
    typographer({
      locale: 'fr_FR',
      output_format: 'html',
      string: 'Bonjour typographer \f\n\r\t\v\u00a0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2028\u2029\u202f\u205f\u3000\ufeff; enchanté de faire votre connaissance.'
    })
  ).toBe('Bonjour typographer&#8239;; enchanté de faire votre connaissance.');
});
