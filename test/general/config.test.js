import typographer from '../../dist/typographer.umd';

test('Calling typographer without config works', () => {
  expect(
    typographer(
      'Bonjour typographer!'
    )
  ).toBe('Bonjour typographer!')
});

test('Calling typographer with a string returns a string', () => {
  expect(
    typeof typographer(
      'Bonjour typographer!'
    )
  ).toBe('string')
})
