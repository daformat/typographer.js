import typographer from '../../dist/typographer.umd';

test('[text] Can format html strings', () => {
  expect(
    typographer(
      '<p>Bonjour <b>typographer</b>! Voici le <em>topo:</em> il faut rétablir le «bon usage» de la typographie; c’est important.</p>',
      {
        locale: 'fr_FR',
        output_format: 'text',
        disable_rules: ['composition/no-orphan-short-words']
      }
    )
  ).toBe('<p>Bonjour <b>typographer</b>\u202f! Voici le <em>topo\u00a0:</em> il faut rétablir le «\u202fbon usage\u202f» de la typographie\u202f; c’est important.</p>');
});

test('[html] Can format html strings', () => {
  expect(
    typographer(
      '<p>Bonjour <b>typographer</b>! Voici le <em>topo:</em> il faut rétablir le &laquo;bon usage&#x00BB; de la typographie; c’est important.</p>',
      {
        locale: 'fr_FR',
        output_format: 'html',
        disable_rules: ['composition/no-orphan-short-words']
      }
    )
  ).toBe('<p>Bonjour <b>typographer</b>&#8239;! Voici le <em>topo&nbsp;:</em> il faut rétablir le &laquo;&#8239;bon usage&#8239;&#x00BB; de la typographie&#8239;; c’est important.</p>');
});


test('[html] Can format html strings with html comments', () => {
  expect(
    typographer(
      '<!-- Ceci est un commentaire --><p>Bonjour <b>typographer</b>! Voici le <em>topo:</em> il faut rétablir le &laquo;bon usage&#x00BB; de la typographie; c’est important.</p>',
      {
        locale: 'fr_FR',
        output_format: 'html',
        disable_rules: ['composition/no-orphan-short-words']
      }
    )
  ).toBe('<!-- Ceci est un commentaire --><p>Bonjour <b>typographer</b>&#8239;! Voici le <em>topo&nbsp;:</em> il faut rétablir le &laquo;&#8239;bon usage&#8239;&#x00BB; de la typographie&#8239;; c’est important.</p>');
});
