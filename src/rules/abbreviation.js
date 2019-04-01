import {space, tag, opening_tag} from '../helpers/regex';

const abbreviation = [
  {
    // 1re instead of 1ère
    name: 'text-1re',
    locales: [
      'fr', 'fr_FR', 'fr_BE', 'fr_CA', 'fr_CH', 'fr_LU', 'fr_MC'
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
      'fr', 'fr_FR', 'fr_BE', 'fr_CA', 'fr_CH', 'fr_LU', 'fr_MC'
    ],
    pattern: new RegExp(
      `\\b1${space}*(${opening_tag('sup')})[èe]re</sup>`,
      'gi'
    ),
    replacement: {
      text: '1$1re</sup>',
      html: '1$1re</sup>'
    }
  },
  {
    // 2|3|...e instead of 2|3|...ème
    name: 'text-Xe',
    locales: [
      'fr', 'fr_FR', 'fr_BE', 'fr_CA', 'fr_CH', 'fr_LU', 'fr_MC'
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
      'fr', 'fr_FR', 'fr_BE', 'fr_CA', 'fr_CH', 'fr_LU', 'fr_MC'
    ],
    pattern: new RegExp(
      `\\b(\\d+)${space}*(${opening_tag('sup')})[èe]me</sup>`,
      'gi'
    ),
    replacement: {
      text: '$1$2e</sup>',
      html: '$1$2e</sup>'
    }
  },
  {
    // etc... -> etc.
    name: 'no-ellipsis-after-etc',
    locales: [
      'fr', 'fr_FR', 'fr_BE', 'fr_CA', 'fr_CH', 'fr_LU', 'fr_MC'
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
    // No orphan `etc.` - adds a non-breaking space before
    name: 'no-orphan-etc',
    locales: [
      'fr', 'fr_FR', 'fr_BE', 'fr_CA', 'fr_CH', 'fr_LU', 'fr_MC'
    ],
    pattern: new RegExp(
      `${space}+etc\\.`,
      'g'
    ),
    replacement: {
      text: '\u00a0etc.',
      html: '&nbsp;etc.'
    }
  },
  {
    // remove spaces in between tags when preceding `etc.`
    // `... </b> </em> </u>etc.` -> `...</b></em></u>etc.`
    name: 'no-trailing-tag-space-before-etc.',
    locales: [
      'fr', 'fr_FR', 'fr_BE', 'fr_CA', 'fr_CH', 'fr_LU', 'fr_MC'
    ],
    pattern: new RegExp(
      `${space}*(${tag})(?=(${space}*${tag})*${space}?(etc\\.))`,
      'g'
    ),
    replacement: {
      text: '$1',
      html: '$1'
    }
  }
];

for (const rule of abbreviation) {
  rule.ruleset = 'abbreviation';
}

export default abbreviation
