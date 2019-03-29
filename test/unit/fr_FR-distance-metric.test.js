import typographer from '../../dist/typographer.umd';

test('[html] Non-breaking space before `m`', () => {
  expect(
    typographer(
      'Il mesure 2m',
      {
        locale: 'fr_FR',
        output_format: 'html',
        disable_rules: ['composition']
      }
    )
  ).toBe('Il mesure 2&nbsp;m');
});

test('[html] Non-breaking space before `m`', () => {
  expect(
    typographer(
      'Il mesure 1m80',
      {
        locale: 'fr_FR',
        output_format: 'html',
        disable_rules: ['composition']
      }
    )
  ).toBe('Il mesure 1&nbsp;m&nbsp;80');
});

test('[html] Non-breaking space before `km`', () => {
  expect(
    typographer(
      'Continuer sur 2km',
      {
        locale: 'fr_FR',
        output_format: 'html',
        disable_rules: ['composition']
      }
    )
  ).toBe('Continuer sur 2&nbsp;km');
});

test('[html] Non-breaking space before `cm`', () => {
  expect(
    typographer(
      'Mesurons 2cm',
      {
        locale: 'fr_FR',
        output_format: 'html',
        disable_rules: ['composition']
      }
    )
  ).toBe('Mesurons 2&nbsp;cm');
});
