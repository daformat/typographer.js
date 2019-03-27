import typographer from '../../dist/typographer.umd';

test('[text] Use narrow non-breaking space before `!`', () => {
  expect(
    typographer(
      'Bonjour typographer!',
      {
        locale: 'fr_FR',
        output_format: 'text'
      }
    )
  ).toBe('Bonjour typographer\u202f!');
});

test('[html] Use narrow non-breaking space before `!`', () => {
  expect(
    typographer(
      'Bonjour typographer!',
      {
        locale: 'fr_FR',
        output_format: 'html'
      }
    )
  ).toBe('Bonjour typographer&#8239;!');
});

test('[text] Replace multiple spaces before `!` with a single narrow non-breaking space', () => {
  expect(
    typographer(
      'Bonjour typographer   !',
      {
        locale: 'fr_FR',
        output_format: 'text'
      }
    )
  ).toBe('Bonjour typographer\u202f!');
});

test('[html] Replace multiple spaces before `!` with a single narrow non-breaking space', () => {
  expect(
    typographer(
      'Bonjour typographer   !',
      {
        locale: 'fr_FR',
        output_format: 'html',
      }
    )
  ).toBe('Bonjour typographer&#8239;!');
});

test('[text] Replace any type of spaces before `!` with a single narrow non-breaking space', () => {
  expect(
    typographer(
      'Bonjour typographer \f\n\r\t\v\u00a0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2028\u2029\u202f\u205f\u3000\ufeff!',
      {
        locale: 'fr_FR',
        output_format: 'text'
      }
    )
  ).toBe('Bonjour typographer\u202f!');
});

test('[text] Replace any space html entities before `!` with a single narrow non-breaking space', () => {
  expect(
    typographer(
      'Bonjour typographer &#x20;&#32;&thinsp;&#x2009;&#8201;&#x200a;&#8202;&#x205f;&#8287;&#x1680;&#5760;&#x2000;&#8192;&#x2001;&#8193;&ensp;&#x2002;&#8194;&emsp;&#x2003;&#8195;&#x2004;&#8196;&#x2005;&#8197;&#x2006;&#8198;&nbsp;&#xa0;&#160;&#x202f;&#8239;&#x2007;&#8199;&#x2008;&#8200;&#x3000;&#12288;&#xfeff;&#65279;&Tab;&#x9;&#9;&#xb;&#11;!',
      {
        locale: 'fr_FR',
        output_format: 'text'
      }
    )
  ).toBe('Bonjour typographer\u202f!');
});

test('[html] Replace any type of spaces before `!` with a single narrow non-breaking space', () => {
  expect(
    typographer(
      'Bonjour typographer \f\n\r\t\v\u00a0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2028\u2029\u202f\u205f\u3000\ufeff!',
      {
        locale: 'fr_FR',
        output_format: 'html'
      }
    )
  ).toBe('Bonjour typographer&#8239;!');
});

test('[text] Properly deal with html (1)', () => {
  expect(
    typographer(
      'Bonjour <b>typographer</b>!',
      {
        locale: 'fr_FR',
        output_format: 'html'
      }
    )
  ).toBe('Bonjour <b>typographer</b>&#8239;!')
});

test('[text] Properly deal with html (2)', () => {
  expect(
    typographer(
      'Bonjour <b>typographer</b> !',
      {
        locale: 'fr_FR',
        output_format: 'html'
      }
    )
  ).toBe('Bonjour <b>typographer</b>&#8239;!')
});

test('[text] Properly deal with html (3)', () => {
  expect(
    typographer(
      'Bonjour <b>typographer </b>!',
      {
        locale: 'fr_FR',
        output_format: 'html'
      }
    )
  ).toBe('Bonjour <b>typographer</b>&#8239;!')
});

test('[text] Properly deal with html (4)', () => {
  expect(
    typographer(
      '<u>Bonjour <em>mon cher <b>typographer </b> </em> </u>!',
      {
        locale: 'fr_FR',
        output_format: 'html'
      }
    )
  ).toBe('<u>Bonjour <em>mon cher <b>typographer</b></em></u>&#8239;!')
});

test('[text] Properly deal with html (5)', () => {
  expect(
    typographer(
      '<p>C’est le moins <em>que l’on <b>puisse dire </b>  </em>  !</p>',
      {
        locale: 'fr_FR',
        output_format: 'html',
        disable_rules: ['composition/no-orphan-short-words']
      }
    )
  ).toBe('<p>C’est le moins <em>que l’on <b>puisse dire</b></em>&#8239;!</p>')
});
