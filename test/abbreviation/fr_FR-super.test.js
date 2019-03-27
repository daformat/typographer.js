import typographer from '../../dist/typographer.umd';

test('[text] Replace `1ère` with `1re`', () => {
  expect(
    typographer(
      'C’est la 1ère fois pour moi.',
      {
        locale: 'fr_FR',
        output_format: 'text',
        disable_rules: ['composition/no-orphan-short-words']
      }
    )
  ).toBe('C’est la 1re fois pour moi.');
});

test('[text] Replace `1 ère` with `1re`', () => {
  expect(
    typographer(
      'C’est la 1 ère fois pour moi.',
      {
        locale: 'fr_FR',
        output_format: 'text',
        disable_rules: ['composition/no-orphan-short-words']
      }
    )
  ).toBe('C’est la 1re fois pour moi.');
});

test('[text] Replace `1   ère` (multiple spaces between `1` and `ère`) with `1re`', () => {
  expect(
    typographer(
      'C’est la 1    ère fois pour moi.',
      {
        locale: 'fr_FR',
        output_format: 'text',
        disable_rules: ['composition/no-orphan-short-words']
      }
    )
  ).toBe('C’est la 1re fois pour moi.');
});

test('[text] Replace `1ÈRE` with `1re`', () => {
  expect(
    typographer(
      'C’est la 1ÈRE fois pour moi.',
      {
        locale: 'fr_FR',
        output_format: 'text',
        disable_rules: ['composition/no-orphan-short-words']
      }
    )
  ).toBe('C’est la 1re fois pour moi.');
});

test('[text] Replace `1<sup>ère<sup>` with `1<sup>re</sup>`', () => {
  expect(
    typographer(
      'C’est la 1<sup>ère</sup> fois pour moi.',
      {
        locale: 'fr_FR',
        output_format: 'text',
        disable_rules: ['composition/no-orphan-short-words']
      }
    )
  ).toBe('C’est la 1<sup>re</sup> fois pour moi.');
});

test('[text] Keep optionnal <sup> element properties when replacing `1<sup>ère<sup>` with `1<sup>re</sup>`', () => {
  expect(
    typographer(
      'C’est la 1<sup class="yo" id="lo">ère</sup> fois pour moi.',
      {
        locale: 'fr_FR',
        output_format: 'text',
        disable_rules: ['composition/no-orphan-short-words']
      }
    )
  ).toBe('C’est la 1<sup class="yo" id="lo">re</sup> fois pour moi.');
});

test('[text] Replace `2ème` with `2e`', () => {
  expect(
    typographer(
      'C’est la 2ème fois pour moi.',
      {
        locale: 'fr_FR',
        output_format: 'text',
        disable_rules: ['composition/no-orphan-short-words']
      }
    )
  ).toBe('C’est la 2e fois pour moi.');
});

test('[text] Replace `2 ème` with `2e`', () => {
  expect(
    typographer(
      'C’est la 2 ème fois pour moi.',
      {
        locale: 'fr_FR',
        output_format: 'text',
        disable_rules: ['composition/no-orphan-short-words']
      }
    )
  ).toBe('C’est la 2e fois pour moi.');
});

test('[text] Replace `2   ème` (multiple spaces between `2` and `ème`) with `2e`', () => {
  expect(
    typographer(
      'C’est la 2    ème fois pour moi.',
      {
        locale: 'fr_FR',
        output_format: 'text',
        disable_rules: ['composition/no-orphan-short-words']
      }
    )
  ).toBe('C’est la 2e fois pour moi.');
});

test('[text] Replace `2ÈME` with `2e`', () => {
  expect(
    typographer(
      'C’est la 2ÈME fois pour moi.',
      {
        locale: 'fr_FR',
        output_format: 'text',
        disable_rules: ['composition/no-orphan-short-words']
      }
    )
  ).toBe('C’est la 2e fois pour moi.');
});

test('[text] Replace `2<sup>ème<sup>` with `2<sup>e</sup>`', () => {
  expect(
    typographer(
      'C’est la 2<sup>ème</sup> fois pour moi.',
      {
        locale: 'fr_FR',
        output_format: 'text',
        disable_rules: ['composition/no-orphan-short-words']
      }
    )
  ).toBe('C’est la 2<sup>e</sup> fois pour moi.');
});

test('[text] Keep optionnal <sup> element properties when replacing `2<sup>ème<sup>` with `2<sup>e</sup>`', () => {
  expect(
    typographer(
      'C’est la 2<sup class="yo" id="lo">ème</sup> fois pour moi.',
      {
        locale: 'fr_FR',
        output_format: 'text',
        disable_rules: ['composition/no-orphan-short-words']
      }
    )
  ).toBe('C’est la 2<sup class="yo" id="lo">e</sup> fois pour moi.');
});
