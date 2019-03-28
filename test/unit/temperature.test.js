import typographer from '../../dist/typographer.umd';

test('[text] Non-breaking space before °C', () => {
  expect(
    typographer(
      'Il fait au moins -8000°C',
      {
        locale: 'fr_FR',
        output_format: 'html',
        disable_rules: ['composition/no-orphan-short-words']
      }
    )
  ).toBe('Il fait au moins -8000&nbsp;°C');
});

test('[text] Non-breaking space before °C', () => {
  expect(
    typographer(
      'La température normale du corps humain se situe entre 36,1 °C et 37,8   °C',
      {
        locale: 'fr_FR',
        output_format: 'html',
        disable_rules: ['composition/no-orphan-short-words']
      }
    )
  ).toBe('La température normale du corps humain se situe entre 36,1&nbsp;°C et 37,8&nbsp;°C');
});
