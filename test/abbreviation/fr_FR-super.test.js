import typographer from '../../dist/typographer.umd';

test('[text] Replace `1ère` with `1re`', () => {
  expect(
    typographer({
      locale: 'fr_FR',
      output_format: 'text',
      string: 'C’est la 1ère fois pour moi.'
    })
  ).toBe('C’est la 1re fois pour moi.');
});

test('[text] Replace `1 ère` with `1re`', () => {
  expect(
    typographer({
      locale: 'fr_FR',
      output_format: 'text',
      string: 'C’est la 1 ère fois pour moi.'
    })
  ).toBe('C’est la 1re fois pour moi.');
});

test('[text] Replace `1   ère` (multiple spaces between `1` and `ère`) with `1re`', () => {
  expect(
    typographer({
      locale: 'fr_FR',
      output_format: 'text',
      string: 'C’est la 1    ère fois pour moi.'
    })
  ).toBe('C’est la 1re fois pour moi.');
});

test('[text] Replace `1ÈRE` with `1re`', () => {
  expect(
    typographer({
      locale: 'fr_FR',
      output_format: 'text',
      string: 'C’est la 1ÈRE fois pour moi.'
    })
  ).toBe('C’est la 1re fois pour moi.');
});

test('[text] Replace `1<sup>ère<sup>` with `1<sup>re</sup>`', () => {
  expect(
    typographer({
      locale: 'fr_FR',
      output_format: 'text',
      string: 'C’est la 1<sup>ère</sup> fois pour moi.'
    })
  ).toBe('C’est la 1<sup>re</sup> fois pour moi.');
});

test('[text] Keep optionnal <sup> element properties when replacing `1<sup>ère<sup>` with `1<sup>re</sup>`', () => {
  expect(
    typographer({
      locale: 'fr_FR',
      output_format: 'text',
      string: 'C’est la 1<sup class="yo" id="lo">ère</sup> fois pour moi.'
    })
  ).toBe('C’est la 1<sup class="yo" id="lo">re</sup> fois pour moi.');
});
