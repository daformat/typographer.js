import typographer from '../../dist/typographer.umd';

test('[text] Remove wrapping spaces within ()', () => {
  expect(
    typographer(
      'Bonjour (   ou bonsoir \f\n\r\t\v\u00a0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2028\u2029\u202f\u205f\u3000\ufeff) typographer',
      {
        locale: 'fr_FR',
        output_format: 'text'
      }
    )
  ).toBe('Bonjour (ou bonsoir) typographer');
});
