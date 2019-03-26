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
  ).toBe('Pèche, pomme, poire\u00a0etc.');
});

test('[text] Disallow ellipsis after `etc` (2)', () => {
  expect(
    typographer(
      'Pèche, pomme, poire etc..',
      {
        locale: 'fr_FR',
        output_format: 'text'
      }
    )
  ).toBe('Pèche, pomme, poire\u00a0etc.');
});

test('[text] Disallow ellipsis after `etc` (3)', () => {
  expect(
    typographer(
      'Pèche, pomme, poire etc......',
      {
        locale: 'fr_FR',
        output_format: 'text'
      }
    )
  ).toBe('Pèche, pomme, poire\u00a0etc.');
});
