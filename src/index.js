// We might want to use the new RegExp() constructor to simplify
// the expressions involving spaces so we can match html entity
// spaces too: (?:\s|&nbsp;|&thinsp;|&#8239;|&#x202f;|...)
// otherwise it's going to be pretty verbose and difficult to
// work with the expressions

const rules = [
  {
    // replace space(s) before periods, except within ellipsis
    locales: [
      'fr', 'fr_FR', 'fr_BE', 'fr_CA', 'fr_CH',
      'en', 'en_US', 'en_GB', 'en_CA', 'en_AU', 'en_NZ', 'en_IN'
    ],
    pattern: /(?<!(\s\.){1,2})\s*\.(?!(\s\.){1,2})/g,
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
    pattern: /\. \. \./g,
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
    pattern: /\s+(\.(\s|&nbsp;)?\.(\s|&nbsp;)?\.)/g,
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
    pattern: /\s+,/g,
    replacement: {
      text: ',',
      html: ','
    }
  },
  {
    // replace any amount of space(s) before a colon
    // with a non-breaking space
    locales: ['fr', 'fr_FR'],
    pattern: /\s*:/g,
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
    pattern: /\s*(?<!&#?\w+);/g,
    replacement: {
      text: '\u202f;',
      html: '&#8239;;'
    }
  },
  {
    // replace any amount of space(s) before an ? or an !
    // with a narrow non-breaking space
    locales: ['fr', 'fr_FR'],
    pattern: /\s*([?!])/g,
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
    pattern: /(«|&laquo;|&#x00AB;)\s*(.*?)\s*(»|&raquo;|&#x00BB;)/g,
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
    pattern: /(‹|&lsaquo;|&#x2039;)\s*(.*?)\s*(›|&rsaquo;|&#x203A;)/g,
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
    pattern: /(“|&ldquo;|&#x201C;)\s*(.*?)\s*(”|&rdquo;|&#x201D;)/g,
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
    pattern: /(‘|&lsquo;|&#x2018;)(?:\s|&nbsp;|&thinsp;|&#8239;|&#x202f;)*(.*?)(?:\s|&nbsp;|&thinsp;|&#8239;|&#x202f;)*(’|&rsquo;|&#x2019;)/g,
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
    pattern: /(\()(?:\s|&nbsp;|&thinsp;|&#8239;|&#x202f;)*(.*?)(?:\s|&nbsp;|&thinsp;|&#8239;|&#x202f;)*(\))/g,
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
    pattern: /(\[)(?:\s|&nbsp;|&thinsp;|&#8239;|&#x202f;)*(.*?)(?:\s|&nbsp;|&thinsp;|&#8239;|&#x202f;)*(\])/g,
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
