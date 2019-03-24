import typographer from '../dist/index.js';

// «» - double french quote marks

test('[text] Insert narrow non-breaking space within `«»`', () => {
  expect(
    typographer({
      locale: 'fr_FR',
      output_format: 'text',
      string: 'Bonjour «typographer»'
    })
  ).toBe('Bonjour «\u202ftypographer\u202f»');
});

test('[html] Insert narrow non-breaking space within `«»`', () => {
  expect(
    typographer({
      locale: 'fr_FR',
      output_format: 'html',
      string: 'Bonjour «typographer»'
    })
  ).toBe('Bonjour «&#8239;typographer&#8239;»');
});

test('[text] Replace opening and closing regular spaces by narrow non-breaking space within `«»`', () => {
  expect(
    typographer({
      locale: 'fr_FR',
      output_format: 'text',
      string: 'Bonjour « typographer »'
    })
  ).toBe('Bonjour «\u202ftypographer\u202f»');
});

test('[html] Replace opening and closing regular spaces by narrow non-breaking space within `«»`', () => {
  expect(
    typographer({
      locale: 'fr_FR',
      output_format: 'html',
      string: 'Bonjour « typographer »'
    })
  ).toBe('Bonjour «&#8239;typographer&#8239;»');
});

test('[text] Replace opening and closing multiple spaces by narrow non-breaking space within `«»`', () => {
  expect(
    typographer({
      locale: 'fr_FR',
      output_format: 'text',
      string: 'Bonjour «   typographer     »'
    })
  ).toBe('Bonjour «\u202ftypographer\u202f»');
});

test('[html] Replace opening and closing multiple spaces by narrow non-breaking space within `«»`', () => {
  expect(
    typographer({
      locale: 'fr_FR',
      output_format: 'html',
      string: 'Bonjour «   typographer     »'
    })
  ).toBe('Bonjour «&#8239;typographer&#8239;»');
});

test('[text] Replace any type of opening and closing spaces by narrow non-breaking space within `«»`', () => {
  expect(
    typographer({
      locale: 'fr_FR',
      output_format: 'text',
      string: 'Bonjour « \f\n\r\t\v\u00a0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2028\u2029\u202f\u205f\u3000\ufefftypographer \f\n\r\t\v\u00a0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2028\u2029\u202f\u205f\u3000\ufeff»'
    })
  ).toBe('Bonjour «\u202ftypographer\u202f»');
});

test('[text] Replace any type of opening and closing space html entities with a single narrow non-breaking space within `«»`', () => {
  expect(
    typographer({
      locale: 'fr_FR',
      output_format: 'text',
      string: 'Bonjour «&#x20;&#32;&thinsp;&#x2009;&#8201;&#x200a;&#8202;&#x205f;&#8287;&#x1680;&#5760;&#x2000;&#8192;&#x2001;&#8193;&ensp;&#x2002;&#8194;&emsp;&#x2003;&#8195;&#x2004;&#8196;&#x2005;&#8197;&#x2006;&#8198;&nbsp;&#xa0;&#160;&#x202f;&#8239;&#x2007;&#8199;&#x2008;&#8200;&#x3000;&#12288;&#xfeff;&#65279;&Tab;&#x9;&#9;&#xb;&#11;typographer&#x20;&#32;&thinsp;&#x2009;&#8201;&#x200a;&#8202;&#x205f;&#8287;&#x1680;&#5760;&#x2000;&#8192;&#x2001;&#8193;&ensp;&#x2002;&#8194;&emsp;&#x2003;&#8195;&#x2004;&#8196;&#x2005;&#8197;&#x2006;&#8198;&nbsp;&#xa0;&#160;&#x202f;&#8239;&#x2007;&#8199;&#x2008;&#8200;&#x3000;&#12288;&#xfeff;&#65279;&Tab;&#x9;&#9;&#xb;&#11;»'
    })
  ).toBe('Bonjour «\u202ftypographer\u202f»');
});

test('[html] Replace any type of opening and closing spaces by narrow non-breaking space within `«»`', () => {
  expect(
    typographer({
      locale: 'fr_FR',
      output_format: 'html',
      string: 'Bonjour « \f\n\r\t\v\u00a0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2028\u2029\u202f\u205f\u3000\ufefftypographer \f\n\r\t\v\u00a0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2028\u2029\u202f\u205f\u3000\ufeff»'
    })
  ).toBe('Bonjour «&#8239;typographer&#8239;»');
});


// ‹› - single french quote marks

test('[text] Insert narrow non-breaking space within `‹›`', () => {
  expect(
    typographer({
      locale: 'fr_FR',
      output_format: 'text',
      string: 'Bonjour ‹typographer›'
    })
  ).toBe('Bonjour ‹\u202ftypographer\u202f›');
});

test('[html] Insert narrow non-breaking space within `‹›`', () => {
  expect(
    typographer({
      locale: 'fr_FR',
      output_format: 'html',
      string: 'Bonjour ‹typographer›'
    })
  ).toBe('Bonjour ‹&#8239;typographer&#8239;›');
});

test('[text] Replace opening and closing regular spaces by narrow non-breaking space within `‹›`', () => {
  expect(
    typographer({
      locale: 'fr_FR',
      output_format: 'text',
      string: 'Bonjour ‹ typographer ›'
    })
  ).toBe('Bonjour ‹\u202ftypographer\u202f›');
});

test('[html] Replace opening and closing regular spaces by narrow non-breaking space within `‹›`', () => {
  expect(
    typographer({
      locale: 'fr_FR',
      output_format: 'html',
      string: 'Bonjour ‹ typographer ›'
    })
  ).toBe('Bonjour ‹&#8239;typographer&#8239;›');
});

test('[text] Replace opening and closing multiple spaces by narrow non-breaking space within `‹›`', () => {
  expect(
    typographer({
      locale: 'fr_FR',
      output_format: 'text',
      string: 'Bonjour ‹   typographer     ›'
    })
  ).toBe('Bonjour ‹\u202ftypographer\u202f›');
});

test('[html] Replace opening and closing multiple spaces by narrow non-breaking space within `‹›`', () => {
  expect(
    typographer({
      locale: 'fr_FR',
      output_format: 'html',
      string: 'Bonjour ‹   typographer     ›'
    })
  ).toBe('Bonjour ‹&#8239;typographer&#8239;›');
});

test('[text] Replace any type of opening and closing multiple spaces by narrow non-breaking space within `‹›`', () => {
  expect(
    typographer({
      locale: 'fr_FR',
      output_format: 'text',
      string: 'Bonjour ‹ \f\n\r\t\v\u00a0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2028\u2029\u202f\u205f\u3000\ufefftypographer \f\n\r\t\v\u00a0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2028\u2029\u202f\u205f\u3000\ufeff›'
    })
  ).toBe('Bonjour ‹\u202ftypographer\u202f›');
});

test('[text] Replace any type of opening and closing space html entities by a single narrow non-breaking space within `‹›`', () => {
  expect(
    typographer({
      locale: 'fr_FR',
      output_format: 'text',
      string: 'Bonjour ‹&#x20;&#32;&thinsp;&#x2009;&#8201;&#x200a;&#8202;&#x205f;&#8287;&#x1680;&#5760;&#x2000;&#8192;&#x2001;&#8193;&ensp;&#x2002;&#8194;&emsp;&#x2003;&#8195;&#x2004;&#8196;&#x2005;&#8197;&#x2006;&#8198;&nbsp;&#xa0;&#160;&#x202f;&#8239;&#x2007;&#8199;&#x2008;&#8200;&#x3000;&#12288;&#xfeff;&#65279;&Tab;&#x9;&#9;&#xb;&#11;typographer&#x20;&#32;&thinsp;&#x2009;&#8201;&#x200a;&#8202;&#x205f;&#8287;&#x1680;&#5760;&#x2000;&#8192;&#x2001;&#8193;&ensp;&#x2002;&#8194;&emsp;&#x2003;&#8195;&#x2004;&#8196;&#x2005;&#8197;&#x2006;&#8198;&nbsp;&#xa0;&#160;&#x202f;&#8239;&#x2007;&#8199;&#x2008;&#8200;&#x3000;&#12288;&#xfeff;&#65279;&Tab;&#x9;&#9;&#xb;&#11;›'
    })
  ).toBe('Bonjour ‹\u202ftypographer\u202f›');
});

test('[html] Replace any type of opening and closing multiple spaces by narrow non-breaking space within `‹›`', () => {
  expect(
    typographer({
      locale: 'fr_FR',
      output_format: 'html',
      string: 'Bonjour ‹ \f\n\r\t\v\u00a0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2028\u2029\u202f\u205f\u3000\ufefftypographer \f\n\r\t\v\u00a0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2028\u2029\u202f\u205f\u3000\ufeff›'
    })
  ).toBe('Bonjour ‹&#8239;typographer&#8239;›');
});

// Multiple quotes embedded, french quotes

test('[text] Insert narrow non-breaking space within embedded french quotes `«‹›»`', () => {
  expect(
    typographer({
      locale: 'fr_FR',
      output_format: 'text',
      string: 'Bonjour «monsieur ‹typographer›»'
    })
  ).toBe('Bonjour «\u202fmonsieur ‹\u202ftypographer\u202f›\u202f»');
});

test('[html] Insert narrow non-breaking space within embedded french quotes `«‹›»`', () => {
  expect(
    typographer({
      locale: 'fr_FR',
      output_format: 'html',
      string: 'Bonjour «monsieur ‹typographer›»'
    })
  ).toBe('Bonjour «&#8239;monsieur ‹&#8239;typographer&#8239;›&#8239;»');
});

test('[text] Replace multiple spaces with narrow non-breaking space within embedded french quotes `«‹›»`', () => {
  expect(
    typographer({
      locale: 'fr_FR',
      output_format: 'text',
      string: 'Bonjour « monsieur ‹   typographer  ›     »'
    })
  ).toBe('Bonjour «\u202fmonsieur ‹\u202ftypographer\u202f›\u202f»');
});

test('[html] Replace multiple spaces with narrow non-breaking space within embedded french quotes `«‹›»`', () => {
  expect(
    typographer({
      locale: 'fr_FR',
      output_format: 'html',
      string: 'Bonjour « monsieur ‹   typographer  ›     »'
    })
  ).toBe('Bonjour «&#8239;monsieur ‹&#8239;typographer&#8239;›&#8239;»');
});

// English double quotes “”

test('[text] Remove any amount of wrapping spaces within `“ ”`', () => {
  expect(
    typographer({
      locale: 'fr_FR',
      output_format: 'text',
      string: 'Bonjour “    typographer  ”'
    })
  ).toBe('Bonjour “typographer”');
});

test('[text] Remove any amount of wrapping space html entities within `“ ”`', () => {
  expect(
    typographer({
      locale: 'fr_FR',
      output_format: 'text',
      string: 'Bonjour “&#x20;&#32;&thinsp;&#x2009;&#8201;&#x200a;&#8202;&#x205f;&#8287;&#x1680;&#5760;&#x2000;&#8192;&#x2001;&#8193;&ensp;&#x2002;&#8194;&emsp;&#x2003;&#8195;&#x2004;&#8196;&#x2005;&#8197;&#x2006;&#8198;&nbsp;&#xa0;&#160;&#x202f;&#8239;&#x2007;&#8199;&#x2008;&#8200;&#x3000;&#12288;&#xfeff;&#65279;&Tab;&#x9;&#9;&#xb;&#11;typographer&#x20;&#32;&thinsp;&#x2009;&#8201;&#x200a;&#8202;&#x205f;&#8287;&#x1680;&#5760;&#x2000;&#8192;&#x2001;&#8193;&ensp;&#x2002;&#8194;&emsp;&#x2003;&#8195;&#x2004;&#8196;&#x2005;&#8197;&#x2006;&#8198;&nbsp;&#xa0;&#160;&#x202f;&#8239;&#x2007;&#8199;&#x2008;&#8200;&#x3000;&#12288;&#xfeff;&#65279;&Tab;&#x9;&#9;&#xb;&#11; ”'
    })
  ).toBe('Bonjour “typographer”');
});

// English simple quotes ‘’

test('[text] Remove any amount of wrapping spaces within `‘ ’`', () => {
  expect(
    typographer({
      locale: 'fr_FR',
      output_format: 'text',
      string: 'Bonjour ‘    typographer  ’'
    })
  ).toBe('Bonjour ‘typographer’');
});

test('[text] Remove any amount of wrapping space html entities within `‘ ’`', () => {
  expect(
    typographer({
      locale: 'fr_FR',
      output_format: 'text',
      string: 'Bonjour ‘&#x20;&#32;&thinsp;&#x2009;&#8201;&#x200a;&#8202;&#x205f;&#8287;&#x1680;&#5760;&#x2000;&#8192;&#x2001;&#8193;&ensp;&#x2002;&#8194;&emsp;&#x2003;&#8195;&#x2004;&#8196;&#x2005;&#8197;&#x2006;&#8198;&nbsp;&#xa0;&#160;&#x202f;&#8239;&#x2007;&#8199;&#x2008;&#8200;&#x3000;&#12288;&#xfeff;&#65279;&Tab;&#x9;&#9;&#xb;&#11;typographer&#x20;&#32;&thinsp;&#x2009;&#8201;&#x200a;&#8202;&#x205f;&#8287;&#x1680;&#5760;&#x2000;&#8192;&#x2001;&#8193;&ensp;&#x2002;&#8194;&emsp;&#x2003;&#8195;&#x2004;&#8196;&#x2005;&#8197;&#x2006;&#8198;&nbsp;&#xa0;&#160;&#x202f;&#8239;&#x2007;&#8199;&#x2008;&#8200;&#x3000;&#12288;&#xfeff;&#65279;&Tab;&#x9;&#9;&#xb;&#11;’'
    })
  ).toBe('Bonjour ‘typographer’');
});

// English nested quotes “‘’”

test('[text] Remove any amount of wrapping spaces within nested english quotes `“‘ ’”`', () => {
  expect(
    typographer({
      locale: 'fr_FR',
      output_format: 'text',
      string: 'Bonjour “   monsieur ‘  typographer   ’ ”'
    })
  ).toBe('Bonjour “monsieur ‘typographer’”');
});
