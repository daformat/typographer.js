import typographer from '../dist/index.js';

test('[text] Can format html strings', () => {
  expect(
    typographer({
      locale: 'fr_FR',
      output_format: 'text',
      string: '<p>Bonjour <b>typographer</b>! Voici le <em>topo:</em> il faut rétablir le bon usage de la typographie; c’est important.</p>'
    })
  ).toBe('<p>Bonjour <b>typographer</b>\u202f! Voici le <em>topo\u00a0:</em> il faut rétablir le bon usage de la typographie\u202f; c’est important.</p>');
});

test('[html] Can format html strings', () => {
  expect(
    typographer({
      locale: 'fr_FR',
      output_format: 'html',
      string: '<p>Bonjour <b>typographer</b>! Voici le <em>topo:</em> il faut rétablir le bon usage de la typographie; c’est important.</p>'
    })
  ).toBe('<p>Bonjour <b>typographer</b>&#8239;! Voici le <em>topo&nbsp;:</em> il faut rétablir le bon usage de la typographie&#8239;; c’est important.</p>');
});
