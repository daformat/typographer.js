import {space} from '../helpers/regex';

const punctuation = [
  {
    // replace space(s) before periods, except within ellipsis
    locales: [
      'fr', 'fr_FR', 'fr_BE', 'fr_CA', 'fr_CH',
      'en', 'en_US', 'en_GB', 'en_CA', 'en_AU', 'en_NZ', 'en_IN'
    ],
    pattern: new RegExp(
      `(?<!(${space}\\.){1,2})${space}*\\.(?!(${space}\\.){1,2})`,
      'g'
    ),
    replacement: {
      text: '.',
      html: '.'
    }
  },
  {
    // use non-breaking spaces within spaced ellipsis
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
    // replace multiple spaces with a single space before ellipsis
    locales: [
      'fr', 'fr_FR', 'fr_BE', 'fr_CA', 'fr_CH',
      'en', 'en_US', 'en_GB', 'en_CA', 'en_AU', 'en_NZ', 'en_IN'
    ],
    pattern: new RegExp(
      `${space}+(\\.(${space}|&nbsp;)?\\.(${space}|&nbsp;)?\\.)`,
      'g'
    ),
    replacement: {
      text: ' $1',
      html: ' $1'
    }
  },
  {
    // remove any leading space before a comma
    locales: [
      'fr', 'fr_FR', 'fr_BE', 'fr_CA', 'fr_CH',
      'en', 'en_US', 'en_GB', 'en_CA', 'en_AU', 'en_NZ', 'en_IN'
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
    // replace any amount of space(s) before an ? or an !
    // with a narrow non-breaking space
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
    locales: [
      'fr', 'fr_FR', 'fr_BE', 'fr_CA', 'fr_CH',
      'en', 'en_US', 'en_GB', 'en_CA', 'en_AU', 'en_NZ', 'en_IN'
    ],
    pattern: new RegExp(
      `(«|&laquo;|&#[xX]0{0,}[aA][bB];|&#0{0,}171;)${
        space
      }*(.*?)${
        space
      }*(»|&raquo;|&#[xX]0{0,}[bB][bB];|&#0{0,}187;)`,
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
    locales: [
      'fr', 'fr_FR', 'fr_BE', 'fr_CA', 'fr_CH',
      'en', 'en_US', 'en_GB', 'en_CA', 'en_AU', 'en_NZ', 'en_IN'
    ],
    pattern: new RegExp(
      `(‹|&lsaquo;|&#[xX]0{0,}2039;|&#0{0,}8249;)${
        space
      }*(.*?)${
        space
      }*(›|&rsaquo;|&#[xX]0{0,}203[aA];|&#0{0,}8250;)`,
      'g'
    ),
    replacement: {
      text: '$1\u202f$2\u202f$3',
      html: '$1&#8239;$2&#8239;$3'
    }
  },
  {
    // remove any amount of wrapping space within “ ”
    locales: [
      'fr', 'fr_FR', 'fr_BE', 'fr_CA', 'fr_CH',
      'en', 'en_US', 'en_GB', 'en_CA', 'en_AU', 'en_NZ', 'en_IN'
    ],
    pattern: new RegExp(
      `(“|&ldquo;|&#[xX]0{0,}201[cC];|&#{0,}8220;)${
        space
      }*(.*?)${
        space
      }*(”|&rdquo;|&#[xX]0{0,}201[dD];|&#{0,}8221;)`,
      'g'
    ),
    replacement: {
      text: '$1$2$3',
      html: '$1$2$3'
    }
  },
  {
    // remove any amount of wrapping space within ‘ ’
    locales: [
      'fr', 'fr_FR', 'fr_BE', 'fr_CA', 'fr_CH',
      'en', 'en_US', 'en_GB', 'en_CA', 'en_AU', 'en_NZ', 'en_IN'
    ],
    pattern: new RegExp(
      `(‘|&lsquo;|&#[xX]0{0,}2018;|&#0{0,}8216;)${
        space
      }*(.*?)${
        space
      }*(’|&rsquo;|&#[xX]0{0,}2019;|&#0{0,}8217;)`,
      'g'
    ),
    replacement: {
      text: '$1$2$3',
      html: '$1$2$3'
    }
  },
  {
    // remove any amount of wrapping space within ( )
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
