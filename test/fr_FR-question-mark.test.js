import typographer from '../dist/typographer.umd';

test('[text] Use narrow non-breaking space before `?`', () => {
  expect(
    typographer({
      locale: 'fr_FR',
      output_format: 'text',
      string: 'Bonjour typographer, comment allez-vous?'
    })
  ).toBe('Bonjour typographer, comment allez-vous\u202f?');
});

test('[html] Use narrow non-breaking space before `?`', () => {
  expect(
    typographer({
      locale: 'fr_FR',
      output_format: 'html',
      string: 'Bonjour typographer, comment allez-vous?'
    })
  ).toBe('Bonjour typographer, comment allez-vous&#8239;?');
});

test('[text] Replace multiple spaces before `?` with a single narrow non-breaking space', () => {
  expect(
    typographer({
      locale: 'fr_FR',
      output_format: 'text',
      string: 'Bonjour typographer, comment allez-vous   ?'
    })
  ).toBe('Bonjour typographer, comment allez-vous\u202f?');
});

test('[html] Replace multiple spaces before `?` with a single narrow non-breaking space', () => {
  expect(
    typographer({
      locale: 'fr_FR',
      output_format: 'html',
      string: 'Bonjour typographer, comment allez-vous   ?'
    })
  ).toBe('Bonjour typographer, comment allez-vous&#8239;?');
});

test('[text] Replace any type of spaces before `?` with a single narrow non-breaking space', () => {
  expect(
    typographer({
      locale: 'fr_FR',
      output_format: 'text',
      string: 'Bonjour typographer, comment allez-vous \f\n\r\t\v\u00a0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2028\u2029\u202f\u205f\u3000\ufeff?'
    })
  ).toBe('Bonjour typographer, comment allez-vous\u202f?');
});

test('[text] Replace any space html entities before `?` with a single narrow non-breaking space', () => {
  expect(
    typographer({
      locale: 'fr_FR',
      output_format: 'text',
      string: 'Bonjour typographer, comment allez-vous &#x20;&#32;&thinsp;&#x2009;&#8201;&#x200a;&#8202;&#x205f;&#8287;&#x1680;&#5760;&#x2000;&#8192;&#x2001;&#8193;&ensp;&#x2002;&#8194;&emsp;&#x2003;&#8195;&#x2004;&#8196;&#x2005;&#8197;&#x2006;&#8198;&nbsp;&#xa0;&#160;&#x202f;&#8239;&#x2007;&#8199;&#x2008;&#8200;&#x3000;&#12288;&#xfeff;&#65279;&Tab;&#x9;&#9;&#xb;&#11;?'
    })
  ).toBe('Bonjour typographer, comment allez-vous\u202f?');
});

test('[html] Replace any type of spaces before `?` with a single narrow non-breaking space', () => {
  expect(
    typographer({
      locale: 'fr_FR',
      output_format: 'html',
      string: 'Bonjour typographer, comment allez-vous \f\n\r\t\v\u00a0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2028\u2029\u202f\u205f\u3000\ufeff?'
    })
  ).toBe('Bonjour typographer, comment allez-vous&#8239;?');
});
