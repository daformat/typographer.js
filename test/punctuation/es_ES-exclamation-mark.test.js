import typographer from '../../dist/typographer.umd';

test('[text] Use narrow non-breaking space after `¡` and before `!`', () => {
  expect(
    typographer(
      '¡Hola typographer!',
      {
        locale: 'es_ES',
        output_format: 'text'
      }
    )
  ).toBe('¡\u202fHola typographer\u202f!');
});
