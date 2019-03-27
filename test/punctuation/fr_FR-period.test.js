import typographer from '../../dist/typographer.umd';

test('[text] Remove single space before `.`', () => {
  expect(
    typographer(
      'Bonjour typographer .',
      {
        locale: 'fr_FR',
        output_format: 'text'
      }
    )
  ).toBe('Bonjour typographer.');
});

test('[text] Remove multiple spaces before `.`', () => {
  expect(
    typographer(
      'Bonjour typographer    .',
      {
        locale: 'fr_FR',
        output_format: 'text'
      }
    )
  ).toBe('Bonjour typographer.');
});

test('[text] Remove any type of space before `.`', () => {
  expect(
    typographer(
      'Bonjour typographer \f\n\r\t\v\u00a0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2028\u2029\u202f\u205f\u3000\ufeff .',
      {
        locale: 'fr_FR',
        output_format: 'text'
      }
    )
  ).toBe('Bonjour typographer.');
});

test('[text] Remove any space html entity before `.`', () => {
  expect(
    typographer(
      'Bonjour typographer&#x20;&#32;&thinsp;&#x2009;&#8201;&#x200a;&#8202;&#x205f;&#8287;&#x1680;&#5760;&#x2000;&#8192;&#x2001;&#8193;&ensp;&#x2002;&#8194;&emsp;&#x2003;&#8195;&#x2004;&#8196;&#x2005;&#8197;&#x2006;&#8198;&nbsp;&#xa0;&#160;&#x202f;&#8239;&#x2007;&#8199;&#x2008;&#8200;&#x3000;&#12288;&#xfeff;&#65279;&Tab;&#x9;&#9;&#xb;&#11;.',
      {
        locale: 'fr_FR',
        output_format: 'text'
      }
    )
  ).toBe('Bonjour typographer.');
});

test('[text] Remove any space before a single `.` in multiple sentences', () => {
  expect(
    typographer(
      'Bonjour typographer . Enchanté de faire votre connaissance .',
      {
        locale: 'fr_FR',
        output_format: 'text',
        disable_rules: ['composition/no-orphan-short-words']
      }
    )
  ).toBe('Bonjour typographer. Enchanté de faire votre connaissance.');
});

test('[text] Remove any space before a single `.` even with numbers', () => {
  expect(
    typographer(
      'Bonjour typographer . Enchanté de faire votre connaissance . 1 .2345',
      {
        locale: 'fr_FR',
        output_format: 'text',
        disable_rules: ['composition/no-orphan-short-words']
      }
    )
  ).toBe('Bonjour typographer. Enchanté de faire votre connaissance. 1.2345');
});

test('[html] Properly deal with html for periods', () => {
  expect(
    typographer(
      '<u>Bonjour <em>mon cher <b>typographer </b> </em> </u>.',
      {
        locale: 'fr_FR',
        output_format: 'html',
      }
    )
  ).toBe('<u>Bonjour <em>mon cher <b>typographer</b></em></u>.')
});

test('[text] Use non-breaking spaces for `. . .`', () => {
  expect(
    typographer(
      'Bonjour typographer . . .',
      {
        locale: 'fr_FR',
        output_format: 'text'
      }
    )
  ).toBe('Bonjour typographer\u00a0.\u00a0.\u00a0.');
});

test('[html] Use non-breaking spaces for `. . .`', () => {
  expect(
    typographer(
      'Bonjour typographer . . .',
      {
        locale: 'fr_FR',
        output_format: 'html',
      }
    )
  ).toBe('Bonjour typographer&nbsp;.&nbsp;.&nbsp;.');
});

test('[html] Properly deal with html for spaced ellipsis', () => {
  expect(
    typographer(
      '<u>Bonjour <em>mon cher <b>typographer </b> </em> </u>. . .',
      {
        locale: 'fr_FR',
        output_format: 'html',
      }
    )
  ).toBe('<u>Bonjour <em>mon cher <b>typographer</b></em></u>.&nbsp;.&nbsp;.')
});

test('[text] Remove multiple spaces before `. . .`', () => {
  expect(
    typographer(
      'Bonjour typographer  . . .',
      {
        locale: 'fr_FR',
        output_format: 'text'
      }
    )
  ).toBe('Bonjour typographer\u00a0.\u00a0.\u00a0.');
});

test('[html] Remove multiple spaces before `. . .`', () => {
  expect(
    typographer(
      'Bonjour typographer  . . .',
      {
        locale: 'fr_FR',
        output_format: 'html',
      }
    )
  ).toBe('Bonjour typographer&nbsp;.&nbsp;.&nbsp;.');
});

test('[text] Keep `...` as is', () => {
  expect(
    typographer(
      'Bonjour typographer...',
      {
        locale: 'fr_FR',
        output_format: 'text'
      }
    )
  ).toBe('Bonjour typographer...');
});

test('[text] Remove spaces before `...`', () => {
  expect(
    typographer(
      'Bonjour typographer ...',
      {
        locale: 'fr_FR',
        output_format: 'text'
      }
    )
  ).toBe('Bonjour typographer...');
});

test('[html] Properly deal with html for ellipsis', () => {
  expect(
    typographer(
      '<u>Bonjour <em>mon cher <b>typographer </b> </em> </u>...',
      {
        locale: 'fr_FR',
        output_format: 'html',
      }
    )
  ).toBe('<u>Bonjour <em>mon cher <b>typographer</b></em></u>...')
});
