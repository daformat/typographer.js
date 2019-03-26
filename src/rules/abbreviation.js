import {space} from '../helpers/regex';

const abbreviation = [
  {
    // 1re instead of 1ère
    name: 'text-1re',
    locales: [
      'fr', 'fr_FR', 'fr_BE', 'fr_CA', 'fr_CH'
    ],
    pattern: new RegExp(
      `\\b1${space}*[èe]re\\b`,
      'gi'
    ),
    replacement: {
      text: '1re',
      html: '1re'
    }
  },
  {
    // 1<sup>re</sup> instead of 1<sup>ère</sup>
    name: 'html-1re',
    locales: [
      'fr', 'fr_FR', 'fr_BE', 'fr_CA', 'fr_CH'
    ],
    pattern: new RegExp(
      `\\b1${space}*<sup( [^>]*)?>[èe]re</sup>`,
      'gi'
    ),
    replacement: {
      text: '1<sup$1>re</sup>',
      html: '1<sup$1>re</sup>'
    }
  },
  {
    // 2|3|...e instead of 2|3|...ème
    name: 'text-Xe',
    locales: [
      'fr', 'fr_FR', 'fr_BE', 'fr_CA', 'fr_CH'
    ],
    pattern: new RegExp(
      `\\b(\\d+)${space}*[èe]me`,
      'gi'
    ),
    replacement: {
      text: '$1e',
      html: '$1e'
    }
  },
  {
    // 2|3|...<sup>e</sup> instead of 2|3|...<sup>ème</sup>
    name: 'html-Xe',
    locales: [
      'fr', 'fr_FR', 'fr_BE', 'fr_CA', 'fr_CH'
    ],
    pattern: new RegExp(
      `\\b(\\d+)${space}*<sup( [^>]*)?>[èe]me</sup>`,
      'gi'
    ),
    replacement: {
      text: '$1<sup$2>e</sup>',
      html: '$1<sup$2>e</sup>'
    }
  },
  {
    // etc... -> etc.
    name: 'no-ellipsis-after-etc',
    locales: [
      'fr', 'fr_FR', 'fr_BE', 'fr_CA', 'fr_CH'
    ],
    pattern: new RegExp(
      `\\betc\\.{2,}`,
      'g'
    ),
    replacement: {
      text: 'etc.',
      html: 'etc.'
    }
  },
  {
    // No orphan etc.
    name: 'no-orphan-etc',
    locales: [
      'fr', 'fr_FR', 'fr_BE', 'fr_CA', 'fr_CH'
    ],
    pattern: new RegExp(
      `${space}+etc\\.`,
      'g'
    ),
    replacement: {
      text: '\u00a0etc.',
      html: '&nbsp;etc.'
    }
  }
];

for (const rule of abbreviation) {
  rule.ruleset = 'abbreviation';
}

export default abbreviation
