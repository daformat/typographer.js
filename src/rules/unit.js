import {space} from '../helpers/regex';

const number = '(?:\\d+(?:[.,]\\d+)?)';
const prefix = '(?:[EPTGMkhdcmnpfa]|da|µ|&mu;|&#x3bc;|&#956;)';

const unit = [
  {
    // Non breaking space before temperature units
    name: 'nbsp-before-unit-temperature',
    locales: [
      'fr', 'fr_FR', 'fr_BE', 'fr_CA', 'fr_CH', 'fr_LU', 'fr_MC',
      'en', 'en_US', 'en_GB', 'en_CA', 'en_AU', 'en_NZ', 'en_IN'
    ],
    pattern: new RegExp(
      `(${number})${space}*(°[CF])\\b`,
      'g'
    ),
    replacement: {
      text: '$1\u00a0$2',
      html: '$1&nbsp;$2'
    }
  },
  {
    // Non breaking space before distance units (metric)
    name: 'nbsp-before-unit-distance-metric',
    locales: [
      'fr', 'fr_FR', 'fr_BE', 'fr_CA', 'fr_CH', 'fr_LU', 'fr_MC',
      'en', 'en_US', 'en_GB', 'en_CA', 'en_AU', 'en_NZ', 'en_IN'
    ],
    pattern: new RegExp(
      `(${number})${space}*(${prefix}?m)\\b`,
      'g'
    ),
    replacement: {
      text: '$1\u00a0$2',
      html: '$1&nbsp;$2'
    }
  },
  {
    // Non breaking space before distance units (metric) 2
    name: 'nbsp-before-unit-distance-metric-2',
    locales: [
      'fr', 'fr_FR', 'fr_BE', 'fr_CA', 'fr_CH', 'fr_LU', 'fr_MC',
      'en', 'en_US', 'en_GB', 'en_CA', 'en_AU', 'en_NZ', 'en_IN'
    ],
    pattern: new RegExp(
      `(${number})${space}*(${prefix}?m)${space}*(${number})`,
      'g'
    ),
    replacement: {
      text: '$1\u00a0$2\u00a0$3',
      html: '$1&nbsp;$2&nbsp;$3'
    }
  }
];

for (const rule of unit) {
  rule.ruleset = 'unit';
}

export default unit;
