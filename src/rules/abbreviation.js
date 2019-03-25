import {space} from '../helpers/regex';

const abbreviation = [
  {
    // 1re instead of 1ère
    locales: [
      'fr', 'fr_FR', 'fr_BE', 'fr_CA', 'fr_CH'
    ],
    pattern: new RegExp(
      `\\b1${space}*ère\\b`,
      'gi'
    ),
    replacement: {
      text: '1re',
      html: '1re'
    }
  },
  {
    // 1<sup>re</sup> instead of 1<sup>ère</sup>
    locales: [
      'fr', 'fr_FR', 'fr_BE', 'fr_CA', 'fr_CH'
    ],
    pattern: new RegExp(
      `\\b1${space}*<sup( [^>]*)?>ère</sup>`,
      'g'
    ),
    replacement: {
      text: '1<sup$1>re</sup>',
      html: '1<sup$1>re</sup>'
    }
  },
];

for (const rule of abbreviation) {
  rule.ruleset = 'abbreviation';
}

export default abbreviation
