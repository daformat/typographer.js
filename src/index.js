// We might want to use the new RegExp() constructor to simplify
// the expressions involving spaces so we can match html entity
// spaces too: (?:\s|&nbsp;|&thinsp;|&#8239;|&#x202f;|...)
// otherwise it's going to be pretty verbose and difficult to
// work with the expressions

// Full (hopefully) regex for both textual and html entities spaces:
const space = '(?:\\s|&#x20;|&#32;|&thinsp;|&#x2009;|&#8201;|&#x200a;|&#8202;|&#x205f;|&#8287;|&#x1680;|&#5760;|&#x2000;|&#8192;|&#x2001;|&#8193;|&ensp;|&#x2002;|&#8194;|&emsp;|&#x2003;|&#8195;|&#x2004;|&#8196;|&#x2005;|&#8197;|&#x2006;|&#8198;|&nbsp;|&#xa0;|&#160;|&#x202f;|&#8239;|&#x2007;|&#8199;|&#x2008;|&#8200;|&#x3000;|&#12288;|&#xfeff;|&#65279;|&Tab;|&#x9;|&#9;|&#xb;|&#11;)';

const rules = [
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
      `(«|&laquo;|&#x00AB;)${space}*(.*?)${space}*(»|&raquo;|&#x00BB;)`,
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
      `(‹|&lsaquo;|&#x2039;)${space}*(.*?)${space}*(›|&rsaquo;|&#x203A;)`,
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
      `(“|&ldquo;|&#x201C;)${space}*(.*?)${space}*(”|&rdquo;|&#x201D;)`,
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
      `(‘|&lsquo;|&#x2018;)${space}*(.*?)${space}*(’|&rsquo;|&#x2019;)`,
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

const typographer = ({
  locale = 'fr_FR',
  output_format = 'text',
  string
}) => {

  // Make sure we're using a valid output format
  output_format = output_format.toLowerCase();
  if (
    output_format !== 'text' &&
    output_format !== 'html'
  ) {
    output_format = 'text';
  }

  // Filter applicable rules for given locale
  const applicable_rules = rules.filter( r => {
    return r.locales.indexOf(locale) !== -1;
  });

  // Apply each rule one after the other
  for (const rule of applicable_rules) {
    string = string.replace(
      rule.pattern,
      rule.replacement[output_format]
    );
  }

  return string;
};

export default typographer;
