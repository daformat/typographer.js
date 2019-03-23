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
      string: 'Bonjour « \f\n\r\t\v\u00a0\u1680\u2000\u200a\u2028\u2029\u202f\u205f\u3000\ufefftypographer \f\n\r\t\v\u00a0\u1680\u2000\u200a\u2028\u2029\u202f\u205f\u3000\ufeff»'
    })
  ).toBe('Bonjour «\u202ftypographer\u202f»');
});

test('[html] Replace any type of opening and closing spaces by narrow non-breaking space within `«»`', () => {
  expect(
    typographer({
      locale: 'fr_FR',
      output_format: 'html',
      string: 'Bonjour « \f\n\r\t\v\u00a0\u1680\u2000\u200a\u2028\u2029\u202f\u205f\u3000\ufefftypographer \f\n\r\t\v\u00a0\u1680\u2000\u200a\u2028\u2029\u202f\u205f\u3000\ufeff»'
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
      string: 'Bonjour ‹ \f\n\r\t\v\u00a0\u1680\u2000\u200a\u2028\u2029\u202f\u205f\u3000\ufefftypographer \f\n\r\t\v\u00a0\u1680\u2000\u200a\u2028\u2029\u202f\u205f\u3000\ufeff›'
    })
  ).toBe('Bonjour ‹\u202ftypographer\u202f›');
});

test('[html] Replace any type of opening and closing multiple spaces by narrow non-breaking space within `‹›`', () => {
  expect(
    typographer({
      locale: 'fr_FR',
      output_format: 'html',
      string: 'Bonjour ‹ \f\n\r\t\v\u00a0\u1680\u2000\u200a\u2028\u2029\u202f\u205f\u3000\ufefftypographer \f\n\r\t\v\u00a0\u1680\u2000\u200a\u2028\u2029\u202f\u205f\u3000\ufeff›'
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
