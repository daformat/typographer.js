import {space} from '../helpers/regex';

const composition = [
  {
    // Avoid short-words orphans
    name: 'no-orphan-short-words',
    locales: [
      'fr', 'fr_FR', 'fr_BE', 'fr_CA', 'fr_CH'
    ],
    pattern: new RegExp(
      `(${space})(du|de|des|le|la|là|les|a|à|au|et|en|ou|où|on|y) `,
      'gi'
    ),
    replacement: {
      text: '$1$2\u00a0',
      html: '$1$2&nbsp;'
    }
  }
];

for (const rule of composition) {
  rule.ruleset = 'composition';
}

export default composition;
