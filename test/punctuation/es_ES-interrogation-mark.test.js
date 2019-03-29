import typographer from '../../dist/typographer.umd';

test('[text] Use narrow non-breaking space after `¿` and before `?`', () => {
  expect(
    typographer(
      '¿Hola typographer, cómo estás?',
      {
        locale: 'es_ES',
        output_format: 'text'
      }
    )
  ).toBe('¿\u202fHola typographer, cómo estás\u202f?');
});
