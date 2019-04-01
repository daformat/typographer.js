import typographer from '../../dist/typographer.umd';

test('[text] Use non-breaking space before `:`', () => {
  expect(
    typographer(
      'Bonjour typographer: enchanté de faire votre connaissance.',
      {
        locale: 'fr_FR',
        output_format: 'text',
        disable_rules: ['composition/no-orphan-short-words']
      }
    )
  ).toBe('Bonjour typographer\u00a0: enchanté de faire votre connaissance.');
});

test('[html] Use non-breaking space before `:`', () => {
  expect(
    typographer(
      'Bonjour typographer: enchanté de faire votre connaissance.',
      {
        locale: 'fr_FR',
        output_format: 'html',
        disable_rules: ['composition/no-orphan-short-words']
      }
    )
  ).toBe('Bonjour typographer&nbsp;: enchanté de faire votre connaissance.');
});

test('[text] Replace multiple spaces with a single non-breaking space before `:`', () => {
  expect(
    typographer(
      'Bonjour typographer    : enchanté de faire votre connaissance.',
      {
        locale: 'fr_FR',
        output_format: 'text',
        disable_rules: ['composition/no-orphan-short-words']
      }
    )
  ).toBe('Bonjour typographer\u00a0: enchanté de faire votre connaissance.');
});

test('[html] Replace multiple spaces with a single non-breaking space before `:`', () => {
  expect(
    typographer(
      'Bonjour typographer    : enchanté de faire votre connaissance.',
      {
        locale: 'fr_FR',
        output_format: 'html',
        disable_rules: ['composition/no-orphan-short-words']
      }
    )
  ).toBe('Bonjour typographer&nbsp;: enchanté de faire votre connaissance.');
});

test('[text] Replace any type of spaces with a single non-breaking space before `:`', () => {
  expect(
    typographer(
      'Bonjour typographer \f\n\r\t\v\u00a0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2028\u2029\u202f\u205f\u3000\ufeff: enchanté de faire votre connaissance.',
      {
        locale: 'fr_FR',
        output_format: 'text',
        disable_rules: ['composition/no-orphan-short-words']
      }
    )
  ).toBe('Bonjour typographer\u00a0: enchanté de faire votre connaissance.');
});

test('[text] Replace any space html entity with a single non-breaking space before `:`', () => {
  expect(
    typographer(
      'Bonjour typographer &#x20;&#32;&thinsp;&#x2009;&#8201;&#x200a;&#8202;&#x205f;&#8287;&#x1680;&#5760;&#x2000;&#8192;&#x2001;&#8193;&ensp;&#x2002;&#8194;&emsp;&#x2003;&#8195;&#x2004;&#8196;&#x2005;&#8197;&#x2006;&#8198;&nbsp;&#xa0;&#160;&#x202f;&#8239;&#x2007;&#8199;&#x2008;&#8200;&#x3000;&#12288;&#xfeff;&#65279;&Tab;&#x9;&#9;&#xb;&#11;: enchanté de faire votre connaissance.',
      {
        locale: 'fr_FR',
        output_format: 'text',
        disable_rules: ['composition/no-orphan-short-words']
      }
    )
  ).toBe('Bonjour typographer\u00a0: enchanté de faire votre connaissance.');
});

test('[html] Replace any type of spaces with a single non-breaking space before `:`', () => {
  expect(
    typographer(
      'Bonjour typographer \f\n\r\t\v\u00a0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2028\u2029\u202f\u205f\u3000\ufeff: enchanté de faire votre connaissance.',
      {
        locale: 'fr_FR',
        output_format: 'html',
        disable_rules: ['composition/no-orphan-short-words']
      }
    )
  ).toBe('Bonjour typographer&nbsp;: enchanté de faire votre connaissance.');
});

test('[html] Properly deal with html for colon', () => {
  expect(
    typographer(
      '<u>Bonjour <em>mon cher <b>typographer </b> </em> </u>: enchanté <b>de faire votre connaissance</b>',
      {
        locale: 'fr_FR',
        output_format: 'html',
        disable_rules: ['composition/no-orphan-short-words']
      }
    )
  ).toBe('<u>Bonjour <em>mon cher <b>typographer</b></em></u>&nbsp;: enchanté <b>de faire votre connaissance</b>')
});

test('[html] Doesn’t apply rule to inline styles', () => {
  expect(
    typographer(
      '<u>Bonjour <em>mon cher <b style="color: red">typographer </b> </em> </u>: enchanté <b>de faire votre connaissance</b>',
      {
        locale: 'fr_FR',
        output_format: 'html',
        disable_rules: ['composition/no-orphan-short-words']
      }
    )
  ).toBe('<u>Bonjour <em>mon cher <b style="color: red">typographer</b></em></u>&nbsp;: enchanté <b>de faire votre connaissance</b>')
});
