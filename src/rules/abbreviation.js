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
      'gi'
    ),
    replacement: {
      text: '1<sup$1>re</sup>',
      html: '1<sup$1>re</sup>'
    }
  },
  {
    // 2|3|...e instead of 2|3|...ème
    locales: [
      'fr', 'fr_FR', 'fr_BE', 'fr_CA', 'fr_CH'
    ],
    pattern: new RegExp(
      `\\b(\\d+)${space}*ème`,
      'gi'
    ),
    replacement: {
      text: '$1e',
      html: '$1e'
    }
  },
  {
    // 2|3|...<sup>e</sup> instead of 2|3|...<sup>ème</sup>
    locales: [
      'fr', 'fr_FR', 'fr_BE', 'fr_CA', 'fr_CH'
    ],
    pattern: new RegExp(
      `\\b(\\d+)${space}*<sup( [^>]*)?>ème</sup>`,
      'gi'
    ),
    replacement: {
      text: '$1<sup$2>e</sup>',
      html: '$1<sup$2>e</sup>'
    }
  },
];

for (const rule of abbreviation) {
  rule.ruleset = 'abbreviation';
}

export default abbreviation
