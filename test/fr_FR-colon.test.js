import typographer from '../dist/index.js';

test('Use non-breaking space before `:`', () => {
  expect(
    typographer('Bonjour typographer: enchanté de faire votre connaissance.')
  ).toBe('Bonjour typographer\u00a0: enchanté de faire votre connaissance.');
});
