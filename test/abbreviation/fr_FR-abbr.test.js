import typographer from '../../dist/typographer.umd';

test('[text] Disallow ellipsis after `etc`', () => {
  expect(
    typographer(
      'Pèche, pomme, poire etc...',
      {
        locale: 'fr_FR',
        output_format: 'text'
      }
    )
  ).toBe('Pèche, pomme, poire etc.');
});
