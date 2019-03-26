import typographer from '../../dist/typographer.umd';

test('Calling typographer without config works', () => {
  expect(
    typographer(
      'Bonjour typographer!'
    )
  ).toBe('Bonjour typographer!')
});
