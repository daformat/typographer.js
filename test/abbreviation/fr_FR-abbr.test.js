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


test('[html] Prevent orphan `etc`', () => {
  expect(
    typographer(
      'Pèche, pomme, <b>poire</b> etc.',
      {
        locale: 'fr_FR',
        output_format: 'html'
      }
    )
  ).toBe('Pèche, pomme, <b>poire</b>&nbsp;etc.');
});

test('[html] Prevent orphan `etc`', () => {
  expect(
    typographer(
      'Pèche, <em>pomme, <b>poire </b> </em> etc.',
      {
        locale: 'fr_FR',
        output_format: 'html'
      }
    )
  ).toBe('Pèche, <em>pomme, <b>poire</b></em>&nbsp;etc.');
});
