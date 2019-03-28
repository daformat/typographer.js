import typographer from '../../dist/typographer.umd';

test('[text] Non-breaking space before °C', () => {
  expect(
    typographer(
      'Il fait au moins -8000°C',
      {
        locale: 'fr_FR',
        output_format: 'html',
        disable_rules: ['composition']
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
        disable_rules: ['composition']
      }
    )
  ).toBe('La température normale du corps humain se situe entre 36,1&nbsp;°C et 37,8&nbsp;°C');
});


test('[text] Non-breaking space before °F', () => {
  expect(
    typographer(
      'Il fait au moins -8000°F',
      {
        locale: 'fr_FR',
        output_format: 'html',
        disable_rules: ['composition']
      }
    )
  ).toBe('Il fait au moins -8000&nbsp;°F');
});

test('[text] Non-breaking space before °F', () => {
  expect(
    typographer(
      'La température normale du corps humain se situe entre 96,98 °F et 100,04   °F',
      {
        locale: 'fr_FR',
        output_format: 'html',
        disable_rules: ['composition']
      }
    )
  ).toBe('La température normale du corps humain se situe entre 96,98&nbsp;°F et 100,04&nbsp;°F');
});
