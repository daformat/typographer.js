import {
  space,
  laquo, raquo, lsaquo, rsaquo,
  ldquo, rdquo, lsquo, rsquo
} from '../helpers/regex';

const punctuation = [
  {
    // remove spaces in between tags when preceding a closing
    // punctuation sign, for example:
    // `... </b> </em> </u>.` -> `...</b></em></u>.`
    name: 'no-trailing-tag-space-before-closing-punctuation',
    locales: [
      'fr', 'fr_FR', 'fr_BE', 'fr_CA', 'fr_CH',
      'en', 'en_US', 'en_GB', 'en_CA', 'en_AU', 'en_NZ', 'en_IN'
    ],
    pattern: new RegExp(
      `${
        space
      }*(<[^>]+>)(?=(${
        space
      }*<[^>]+>)*${
        space
      }?([?!;:.,)\\]]|${raquo}|${rsaquo}|${rdquo}|${rsquo}))`,
      'g'
    ),
    replacement: {
      text: '$1',
      html: '$1'
    }
  },
  {
    // remove space(s) before periods, except within ellipsis
    name: 'no-space-before-period',
    locales: [
      'fr', 'fr_FR', 'fr_BE', 'fr_CA', 'fr_CH',
      'en', 'en_US', 'en_GB', 'en_CA', 'en_AU', 'en_NZ', 'en_IN'
    ],
    pattern: new RegExp(
      `(?<!(${space}\\.){1,2})${space}+\\.(?!(${space}\\.){1,2})`,
      'g'
    ),
    replacement: {
      text: '.',
      html: '.'
    }
  },
  {
    // use non-breaking spaces within spaced ellipsis
    name: 'nbsp-within-spaced-ellipsis',
    locales: [
      'fr', 'fr_FR', 'fr_BE', 'fr_CA', 'fr_CH',
      'en', 'en_US', 'en_GB', 'en_CA', 'en_AU', 'en_NZ', 'en_IN'
    ],
    pattern: new RegExp(
      `\\.${space}\\.${space}\\.`,
      'g'
    ),
    replacement: {
      text: '.\u00a0.\u00a0.',
      html: '.&nbsp;.&nbsp;.'
    }
  },
  {
    // replace multiple spaces with a single non-breaking space
    // before spaced ellipsis
    name: 'nbsp-before-spaced-ellipsis',
    locales: [
      'fr', 'fr_FR', 'fr_BE', 'fr_CA', 'fr_CH',
      'en', 'en_US', 'en_GB', 'en_CA', 'en_AU', 'en_NZ', 'en_IN'
    ],
    pattern: new RegExp(
      `${space}+(\\.${space}\\.${space}\\.)`,
      'g'
    ),
    replacement: {
      text: '\u00a0$1',
      html: '&nbsp;$1'
    }
  },
  {
    // remove any leading space before a comma
    name: 'no-space-before-comma',
    locales: [
      'fr', 'fr_FR', 'fr_BE', 'fr_CA', 'fr_CH',
    ],
    pattern: new RegExp(
      `${space}+,`,
      'g'
    ),
    replacement: {
      text: ',',
      html: ','
    }
  },
  {
    // remove any leading space before ?!;:,
    // (period is dealt with in another rule)
    name: 'no-space-before-punctuation-other-than-period',
    locales: [
      'en', 'en_US', 'en_GB', 'en_CA', 'en_AU', 'en_NZ', 'en_IN'
    ],
    pattern: new RegExp(
      `${space}+([?!;:,])`,
      'g'
    ),
    replacement: {
      text: '$1',
      html: '$1'
    }
  },
  {
    // replace any amount of space(s) before a colon
    // with a non-breaking space
    name: 'nbsp-before-colon',
    locales: ['fr', 'fr_FR'],
    pattern: new RegExp(
      `${space}*:`,
      'g'
    ),
    replacement: {
      text: '\u00a0:',
      html: '&nbsp;:'
    }
  },
  {
    // replace any amount of space(s) before a semicolon
    // with a narrow non-breaking space
    // We need to make sure we don't match the `;` on an html entity
    name: 'narrow-nbsp-before-semicolon',
    locales: ['fr', 'fr_FR'],
    pattern: new RegExp(
      `${space}*(?<!&#?\\w+);`,
      'g'
    ),
    replacement: {
      text: '\u202f;',
      html: '&#8239;;'
    }
  },
  {
    // replace any amount of space(s) (including 0) before an ? or an !
    // with a narrow non-breaking space
    name: 'narrow-nbsp-before-interrogation-exclamation',
    locales: ['fr', 'fr_FR'],
    pattern: new RegExp(
      `${space}*([?!])`,
      'g'
    ),
    replacement: {
      text: '\u202f$1',
      html: '&#8239;$1'
    }
  },
  {
    // replace any amount of wrapping space within « »
    // with a single narrow non-breaking space
    name: 'narrow-nbsp-within-laquo-raquo',
    locales: [
      'fr', 'fr_FR', 'fr_BE', 'fr_CA', 'fr_CH',
      'en', 'en_US', 'en_GB', 'en_CA', 'en_AU', 'en_NZ', 'en_IN'
    ],
    pattern: new RegExp(
      `(${laquo})${space}*(.*?)${space}*(${raquo})`,
      'g'
    ),
    replacement: {
      text: '$1\u202f$2\u202f$3',
      html: '$1&#8239;$2&#8239;$3'
    }
  },
  {
    // replace any amount of wrapping space within ‹ ›
    // with a single narrow non-breaking space
    name: 'narrow-nbsp-within-lsaquo-rsaquo',
    locales: [
      'fr', 'fr_FR', 'fr_BE', 'fr_CA', 'fr_CH',
      'en', 'en_US', 'en_GB', 'en_CA', 'en_AU', 'en_NZ', 'en_IN'
    ],
    pattern: new RegExp(
      `(${lsaquo})${space}*(.*?)${space}*(${rsaquo})`,
      'g'
    ),
    replacement: {
      text: '$1\u202f$2\u202f$3',
      html: '$1&#8239;$2&#8239;$3'
    }
  },
  {
    // remove any amount of wrapping space within “ ”
    name: 'no-space-within-ldquo-rdquo',
    locales: [
      'fr', 'fr_FR', 'fr_BE', 'fr_CA', 'fr_CH',
      'en', 'en_US', 'en_GB', 'en_CA', 'en_AU', 'en_NZ', 'en_IN'
    ],
    pattern: new RegExp(
      `(${ldquo})${space}*(.*?)${space}*(${rdquo})`,
      'g'
    ),
    replacement: {
      text: '$1$2$3',
      html: '$1$2$3'
    }
  },
  {
    // remove any amount of wrapping space within ‘ ’
    name: 'no-space-within-lsquo-rsquo',
    locales: [
      'fr', 'fr_FR', 'fr_BE', 'fr_CA', 'fr_CH',
      'en', 'en_US', 'en_GB', 'en_CA', 'en_AU', 'en_NZ', 'en_IN'
    ],
    pattern: new RegExp(
      `(${lsquo})${space}*(.*?)${space}*(${rsquo})`,
      'g'
    ),
    replacement: {
      text: '$1$2$3',
      html: '$1$2$3'
    }
  },
  {
    // remove any amount of wrapping space within ( )
    name: 'no-space-within-parentheses',
    locales: [
      'fr', 'fr_FR', 'fr_BE', 'fr_CA', 'fr_CH',
      'en', 'en_US', 'en_GB', 'en_CA', 'en_AU', 'en_NZ', 'en_IN'
    ],
    pattern: new RegExp(
      `(\\()${space}*(.*?)${space}*(\\))`,
      'g'
    ),
    replacement: {
      text: '$1$2$3',
      html: '$1$2$3'
    }
  },
  {
    // remove any amount of wrapping space within [ ]
    name: 'no-space-within-square-brackets',
    locales: [
      'fr', 'fr_FR', 'fr_BE', 'fr_CA', 'fr_CH',
      'en', 'en_US', 'en_GB', 'en_CA', 'en_AU', 'en_NZ', 'en_IN'
    ],
    pattern: new RegExp(
      `(\\[)${space}*(.*?)${space}*(\\])`,
      'g'
    ),
    replacement: {
      text: '$1$2$3',
      html: '$1$2$3'
    }
  }
];

for (const rule of punctuation) {
  rule.ruleset = 'punctuation';
}

export default punctuation;
