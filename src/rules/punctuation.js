import {
  space, tag,
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
      'fr', 'fr_FR', 'fr_BE', 'fr_CA', 'fr_CH', 'fr_LU', 'fr_MC',
      'en', 'en_US', 'en_GB', 'en_CA', 'en_AU', 'en_NZ', 'en_IN',
      'es', 'es_ES', 'es_AR', 'es_BO', 'es_CL', 'es_CO', 'es_CR', 'es_DO', 'es_EC', 'es_SV', 'es_GT', 'es_HN', 'es_MX', 'es_NI', 'es_PA', 'es_PY', 'es_PE', 'es_PR', 'es_UY', 'es_US', 'es_VE',
      'de', 'de_DE', 'de_AT', 'de_BE', 'de_CH', 'de_LI', 'de_LU'
    ],
    pattern: new RegExp(
      `${space}*(${tag})(?=(${space}*${tag})*${
        space
      }*([?!;:.,)\\]]|${raquo}|${rsaquo}|${rdquo}|${rsquo}))`,
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
      'fr', 'fr_FR', 'fr_BE', 'fr_CA', 'fr_CH', 'fr_LU', 'fr_MC',
      'en', 'en_US', 'en_GB', 'en_CA', 'en_AU', 'en_NZ', 'en_IN',
      'es', 'es_ES', 'es_AR', 'es_BO', 'es_CL', 'es_CO', 'es_CR', 'es_DO', 'es_EC', 'es_SV', 'es_GT', 'es_HN', 'es_MX', 'es_NI', 'es_PA', 'es_PY', 'es_PE', 'es_PR', 'es_UY', 'es_US', 'es_VE',
      'de', 'de_DE', 'de_AT', 'de_BE', 'de_CH', 'de_LI', 'de_LU'
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
      'fr', 'fr_FR', 'fr_BE', 'fr_CA', 'fr_CH', 'fr_LU', 'fr_MC',
      'es', 'es_ES', 'es_AR', 'es_BO', 'es_CL', 'es_CO', 'es_CR', 'es_DO', 'es_EC', 'es_SV', 'es_GT', 'es_HN', 'es_MX', 'es_NI', 'es_PA', 'es_PY', 'es_PE', 'es_PR', 'es_UY', 'es_US', 'es_VE',
      'en', 'en_US', 'en_GB', 'en_CA', 'en_AU', 'en_NZ', 'en_IN',
      'de', 'de_DE', 'de_AT', 'de_BE', 'de_CH', 'de_LI', 'de_LU'
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
      'fr', 'fr_FR', 'fr_BE', 'fr_CA', 'fr_CH', 'fr_LU', 'fr_MC',
      'es', 'es_ES', 'es_AR', 'es_BO', 'es_CL', 'es_CO', 'es_CR', 'es_DO', 'es_EC', 'es_SV', 'es_GT', 'es_HN', 'es_MX', 'es_NI', 'es_PA', 'es_PY', 'es_PE', 'es_PR', 'es_UY', 'es_US', 'es_VE',
      'en', 'en_US', 'en_GB', 'en_CA', 'en_AU', 'en_NZ', 'en_IN',
      'de', 'de_DE', 'de_AT', 'de_BE', 'de_CH', 'de_LI', 'de_LU'
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
    // remove any leading space before ?!;:,.
    name: 'no-space-before-punctuation',
    locales: [
      'en', 'en_US', 'en_GB', 'en_CA', 'en_AU', 'en_NZ', 'en_IN',
      'de', 'de_DE', 'de_AT', 'de_BE', 'de_CH', 'de_LI', 'de_LU'
    ],
    pattern: new RegExp(
      `${space}+([?!;:,.])`,
      'g'
    ),
    replacement: {
      text: '$1',
      html: '$1'
    }
  },
  {
    // remove any leading space before a comma
    name: 'no-space-before-comma',
    locales: [
      'fr', 'fr_FR', 'fr_BE', 'fr_CA', 'fr_CH', 'fr_LU', 'fr_MC',
      'es', 'es_ES', 'es_AR', 'es_BO', 'es_CL', 'es_CO', 'es_CR', 'es_DO', 'es_EC', 'es_SV', 'es_GT', 'es_HN', 'es_MX', 'es_NI', 'es_PA', 'es_PY', 'es_PE', 'es_PR', 'es_UY', 'es_US', 'es_VE'
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
    // replace any amount of space(s) before a colon
    // with a non-breaking space
    name: 'nbsp-before-colon',
    locales: [
      'fr', 'fr_FR', 'fr_BE', 'fr_CA', 'fr_CH', 'fr_LU', 'fr_MC'
    ],
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
    // remove any amount of space(s) before a colon
    name: 'no-space-before-colon',
    locales: [
      'es', 'es_ES', 'es_AR', 'es_BO', 'es_CL', 'es_CO', 'es_CR', 'es_DO', 'es_EC', 'es_SV', 'es_GT', 'es_HN', 'es_MX', 'es_NI', 'es_PA', 'es_PY', 'es_PE', 'es_PR', 'es_UY', 'es_US', 'es_VE'
    ],
    pattern: new RegExp(
      `${space}+:`,
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
    locales: [
      'fr', 'fr_FR', 'fr_BE', 'fr_CH',
      'es', 'es_ES', 'es_AR', 'es_BO', 'es_CL', 'es_CO', 'es_CR', 'es_DO', 'es_EC', 'es_SV', 'es_GT', 'es_HN', 'es_MX', 'es_NI', 'es_PA', 'es_PY', 'es_PE', 'es_PR', 'es_UY', 'es_US', 'es_VE'
    ],
    pattern: new RegExp(
      `${space}*;`,
      'g'
    ),
    replacement: {
      text: '\u202f;',
      html: '&#8239;;'
    }
  },
  {
    // replace any amount of space(s) before a semicolon
    // with a narrow non-breaking space
    // Part 2, restore html entities
    name: 'narrow-nbsp-before-semicolon',
    locales: [
      'fr', 'fr_FR', 'fr_BE', 'fr_CH',
      'es', 'es_ES', 'es_AR', 'es_BO', 'es_CL', 'es_CO', 'es_CR', 'es_DO', 'es_EC', 'es_SV', 'es_GT', 'es_HN', 'es_MX', 'es_NI', 'es_PA', 'es_PY', 'es_PE', 'es_PR', 'es_UY', 'es_US', 'es_VE'
    ],
    pattern: new RegExp(
      `(&#?\\w+)(?:\u202f|&#8239;);`,
      'g'
    ),
    replacement: {
      text: '$1;',
      html: '$1;'
    }
  },
  {
    // Remove spaces before semicolon
    name: 'no-space-before-semicolon',
    locales: ['fr_CA'],
    pattern: new RegExp(
      `${space}+;`,
      'g'
    ),
    replacement: {
      text: ';',
      html: ';'
    }
  },
  {
    // Remove spaces before interrogation mark
    name: 'no-space-before-interrogation',
    locales: ['fr_CA'],
    pattern: new RegExp(
      `${space}+\\?`,
      'g'
    ),
    replacement: {
      text: '?',
      html: '?'
    }
  },
  {
    // Remove spaces before exclamation mark
    name: 'no-space-before-exclamation',
    locales: ['fr_CA'],
    pattern: new RegExp(
      `${space}+!`,
      'g'
    ),
    replacement: {
      text: '!',
      html: '!'
    }
  },
  {
    // replace any amount of space(s) (including 0) before an ? or an !
    // with a narrow non-breaking space.
    name: 'narrow-nbsp-before-interrogation-exclamation',
    locales: [
      'fr', 'fr_FR', 'fr_BE', 'fr_CH',
      'es', 'es_ES', 'es_AR', 'es_BO', 'es_CL', 'es_CO', 'es_CR', 'es_DO', 'es_EC', 'es_SV', 'es_GT', 'es_HN', 'es_MX', 'es_NI', 'es_PA', 'es_PY', 'es_PE', 'es_PR', 'es_UY', 'es_US', 'es_VE'
    ],
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
    // replace any amount of space(s) (including 0) after an ¿ or an ¡
    // with a single narrow non-breaking space.
    name: 'narrow-nbsp-after-inverted-interrogation-exclamation',
    locales: [
      'es', 'es_ES', 'es_AR', 'es_BO', 'es_CL', 'es_CO', 'es_CR', 'es_DO', 'es_EC', 'es_SV', 'es_GT', 'es_HN', 'es_MX', 'es_NI', 'es_PA', 'es_PY', 'es_PE', 'es_PR', 'es_UY', 'es_US', 'es_VE'
    ],
    pattern: new RegExp(
      `([¿¡])${space}*`,
      'g'
    ),
    replacement: {
      text: '$1\u202f',
      html: '$1&#8239;'
    }
  },
  {
    // DIRTY restore html coments that have been modified by
    // narrow-nbsp-before-interrogation-exclamation rule
    // TODO: find a way to improve the aforementionned rule
    // so it doesn't match on html comments.
    name: 'restore-html-comments',
    locales: [
      'fr', 'fr_FR', 'fr_BE', 'fr_CA', 'fr_CH', 'fr_LU', 'fr_MC',
      'es', 'es_ES', 'es_AR', 'es_BO', 'es_CL', 'es_CO', 'es_CR', 'es_DO', 'es_EC', 'es_SV', 'es_GT', 'es_HN', 'es_MX', 'es_NI', 'es_PA', 'es_PY', 'es_PE', 'es_PR', 'es_UY', 'es_US', 'es_VE',
    ],
    pattern: new RegExp(
      `<(?:\u202f|&#8239;)!--`,
      'g'
    ),
    replacement: {
      text: '<!--',
      html: '<!--'
    }
  },
  {
    // replace any amount of wrapping space within « »
    // with a single narrow non-breaking space
    name: 'narrow-nbsp-within-laquo-raquo',
    locales: [
      'fr', 'fr_FR', 'fr_BE', 'fr_CA', 'fr_CH', 'fr_LU', 'fr_MC',
      'en', 'en_US', 'en_GB', 'en_CA', 'en_AU', 'en_NZ', 'en_IN',
      'es', 'es_ES', 'es_AR', 'es_BO', 'es_CL', 'es_CO', 'es_CR', 'es_DO', 'es_EC', 'es_SV', 'es_GT', 'es_HN', 'es_MX', 'es_NI', 'es_PA', 'es_PY', 'es_PE', 'es_PR', 'es_UY', 'es_US', 'es_VE'
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
      'fr', 'fr_FR', 'fr_BE', 'fr_CA', 'fr_CH', 'fr_LU', 'fr_MC',
      'en', 'en_US', 'en_GB', 'en_CA', 'en_AU', 'en_NZ', 'en_IN',
      'es', 'es_ES', 'es_AR', 'es_BO', 'es_CL', 'es_CO', 'es_CR', 'es_DO', 'es_EC', 'es_SV', 'es_GT', 'es_HN', 'es_MX', 'es_NI', 'es_PA', 'es_PY', 'es_PE', 'es_PR', 'es_UY', 'es_US', 'es_VE'
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
      'fr', 'fr_FR', 'fr_BE', 'fr_CA', 'fr_CH', 'fr_LU', 'fr_MC',
      'en', 'en_US', 'en_GB', 'en_CA', 'en_AU', 'en_NZ', 'en_IN',
      'es', 'es_ES', 'es_AR', 'es_BO', 'es_CL', 'es_CO', 'es_CR', 'es_DO', 'es_EC', 'es_SV', 'es_GT', 'es_HN', 'es_MX', 'es_NI', 'es_PA', 'es_PY', 'es_PE', 'es_PR', 'es_UY', 'es_US', 'es_VE',
      'de', 'de_DE', 'de_AT', 'de_BE', 'de_CH', 'de_LI', 'de_LU'
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
      'fr', 'fr_FR', 'fr_BE', 'fr_CA', 'fr_CH', 'fr_LU', 'fr_MC',
      'en', 'en_US', 'en_GB', 'en_CA', 'en_AU', 'en_NZ', 'en_IN',
      'es', 'es_ES', 'es_AR', 'es_BO', 'es_CL', 'es_CO', 'es_CR', 'es_DO', 'es_EC', 'es_SV', 'es_GT', 'es_HN', 'es_MX', 'es_NI', 'es_PA', 'es_PY', 'es_PE', 'es_PR', 'es_UY', 'es_US', 'es_VE',
      'de', 'de_DE', 'de_AT', 'de_BE', 'de_CH', 'de_LI', 'de_LU'
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
      'fr', 'fr_FR', 'fr_BE', 'fr_CA', 'fr_CH', 'fr_LU', 'fr_MC',
      'en', 'en_US', 'en_GB', 'en_CA', 'en_AU', 'en_NZ', 'en_IN',
      'es', 'es_ES', 'es_AR', 'es_BO', 'es_CL', 'es_CO', 'es_CR', 'es_DO', 'es_EC', 'es_SV', 'es_GT', 'es_HN', 'es_MX', 'es_NI', 'es_PA', 'es_PY', 'es_PE', 'es_PR', 'es_UY', 'es_US', 'es_VE',
      'de', 'de_DE', 'de_AT', 'de_BE', 'de_CH', 'de_LI', 'de_LU'
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
      'fr', 'fr_FR', 'fr_BE', 'fr_CA', 'fr_CH', 'fr_LU', 'fr_MC',
      'en', 'en_US', 'en_GB', 'en_CA', 'en_AU', 'en_NZ', 'en_IN',
      'es', 'es_ES', 'es_AR', 'es_BO', 'es_CL', 'es_CO', 'es_CR', 'es_DO', 'es_EC', 'es_SV', 'es_GT', 'es_HN', 'es_MX', 'es_NI', 'es_PA', 'es_PY', 'es_PE', 'es_PR', 'es_UY', 'es_US', 'es_VE',
      'de', 'de_DE', 'de_AT', 'de_BE', 'de_CH', 'de_LI', 'de_LU'
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
