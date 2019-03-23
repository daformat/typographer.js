import typographer from '../dist/index.js';

// «» - double french quote marks

test('Insert narrow non-breaking space within `«»`', () => {
  expect(
    typographer('Bonjour «typographer»')
  ).toBe('Bonjour «\u202ftypographer\u202f»');
});

test('Replace opening and closing regular spaces by narrow non-breaking space within `«»`', () => {
  expect(
    typographer('Bonjour « typographer »')
  ).toBe('Bonjour «\u202ftypographer\u202f»');
});

test('Replace opening and closing multiple spaces by narrow non-breaking space within `«»`', () => {
  expect(
    typographer('Bonjour «   typographer     »')
  ).toBe('Bonjour «\u202ftypographer\u202f»');
});

test('Replace any type of opening and closing spaces by narrow non-breaking space within `«»`', () => {
  expect(
    typographer('Bonjour « \f\n\r\t\v\u00a0\u1680\u2000\u200a\u2028\u2029\u202f\u205f\u3000\ufefftypographer \f\n\r\t\v\u00a0\u1680\u2000\u200a\u2028\u2029\u202f\u205f\u3000\ufeff»')
  ).toBe('Bonjour «\u202ftypographer\u202f»');
});


// ‹› - single french quote marks

test('Insert narrow non-breaking space within `‹›`', () => {
  expect(
    typographer('Bonjour ‹typographer›')
  ).toBe('Bonjour ‹\u202ftypographer\u202f›');
});

test('Replace opening and closing regular spaces by narrow non-breaking space within `‹›`', () => {
  expect(
    typographer('Bonjour ‹ typographer ›')
  ).toBe('Bonjour ‹\u202ftypographer\u202f›');
});

test('Replace opening and closing multiple spaces by narrow non-breaking space within `‹›`', () => {
  expect(
    typographer('Bonjour ‹   typographer     ›')
  ).toBe('Bonjour ‹\u202ftypographer\u202f›');
});

test('Replace any type of opening and closing multiple spaces by narrow non-breaking space within `‹›`', () => {
  expect(
    typographer('Bonjour ‹ \f\n\r\t\v\u00a0\u1680\u2000\u200a\u2028\u2029\u202f\u205f\u3000\ufefftypographer \f\n\r\t\v\u00a0\u1680\u2000\u200a\u2028\u2029\u202f\u205f\u3000\ufeff›')
  ).toBe('Bonjour ‹\u202ftypographer\u202f›');
});
