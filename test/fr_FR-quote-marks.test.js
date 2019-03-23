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
