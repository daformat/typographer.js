import {space} from '../helpers/regex';

const unit = [
  {
    // Non breaking space before temperature units
    name: 'nbsp-before-unit-temperature',
    locales: [
      'fr', 'fr_FR', 'fr_BE', 'fr_CA', 'fr_CH',
      'en', 'en_US', 'en_GB', 'en_CA', 'en_AU', 'en_NZ', 'en_IN'
    ],
    pattern: new RegExp(
      `(\\d+(?:[.,]\\d+)?)${space}*(°[CF])\\b`,
      'g'
    ),
    replacement: {
      text: '$1\u00a0$2',
      html: '$1&nbsp;$2'
    }
  }
];

for (const rule of unit) {
  rule.ruleset = 'unit';
}

export default unit;
