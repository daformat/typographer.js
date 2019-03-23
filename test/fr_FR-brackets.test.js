import typographer from '../dist/index.js';

test('[text] Remove wrapping spaces within []', () => {
  expect(
    typographer({
      locale: 'fr_FR',
      output_format: 'text',
      string: 'Bonjour [   ou bonsoir \f\n\r\t\v\u00a0\u1680\u2000\u200a\u2028\u2029\u202f\u205f\u3000\ufeff] typographer'
    })
  ).toBe('Bonjour [ou bonsoir] typographer');
});

test('[text] Remove wrapping spaces (including html entities) within []', () => {
  expect(
    typographer({
      locale: 'fr_FR',
      output_format: 'text',
      string: 'Bonjour [ &nbsp; ou bonsoir \f\n\r\t\v\u00a0\u1680\u2000\u200a\u2028\u2029\u202f\u205f\u3000\ufeff] typographer'
    })
  ).toBe('Bonjour [ou bonsoir] typographer');
});
