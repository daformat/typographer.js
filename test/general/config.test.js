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

test('Calling typographer with a HTMLElement modifies the element in DOM', () => {
  document.body.innerHTML =
    '<div id="typographer">' +
    '  <p>Bonjour typographer !</p>' +
    '</div>';

  const element = document.querySelector('#typographer');

  typographer(
    element,
    {
      locale: 'en'
    }
  );

  expect(
    document.body
  ).toMatchSnapshot()
})
