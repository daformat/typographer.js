const rules = [
  {
    // replace space(s) before periods, except when ellipsis
    locales: ['fr_FR'],
    pattern: /(?<!(\s\.){1,2})\s*\.(?!(\s\.){1,2})/g,
    replacement: {
      text: '.',
      html: '.'
    }
  },
  {
    // use non-breaking spaces within spaced ellipsis
    locales: ['fr_FR'],
    pattern: /\. \. \./g,
    replacement: {
      text: '.\u00a0.\u00a0.',
      html: '.&nbsp;.&nbsp;.'
    }
  },
  {
    // replace multiple spaces with a single space before ellipsis
    locales: ['fr_FR'],
    pattern: /\s+(\.(\s|&nbsp;)?\.(\s|&nbsp;)?\.)/g,
    replacement: {
      text: ' $1',
      html: ' $1'
    }
  },
  {
    // remove any leading space before a comma
    locales: ['fr_FR'],
    pattern: /\s+,/g,
    replacement: {
      text: ',',
      html: ','
    }
  },
  {
    // replace any amount of space(s) before a colon
    // with a non-breaking space
    locales: ['fr_FR'],
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
    locales: ['fr_FR'],
    pattern: /\s*(?<!&#?\w+);/g,
    replacement: {
      text: '\u202f;',
      html: '&#8239;;'
    }
  },
  {
    // replace any amount of space(s) before an ? or an !
    // with a narrow non-breaking space
    locales: ['fr_FR'],
    pattern: /\s*([?!])/g,
    replacement: {
      text: '\u202f$1',
      html: '&#8239;$1'
    }
  },
  {
    // replace any amount of wrapping space within « »
    // with a single narrow non-breaking space
    locales: ['fr_FR'],
    pattern: /(«|&laquo;|&#x00AB;)\s*(.*?)\s*(»|&raquo;|&#x00BB;)/g,
    replacement: {
      text: '$1\u202f$2\u202f$3',
      html: '$1&#8239;$2&#8239;$3'
    }
  },
  {
    // replace any amount of wrapping space within ‹ ›
    // with a single narrow non-breaking space
    locales: ['fr_FR'],
    pattern: /(‹|&lsaquo;|&#x2039;)\s*(.*?)\s*(›|&rsaquo;|&#x203A;)/g,
    replacement: {
      text: '$1\u202f$2\u202f$3',
      html: '$1&#8239;$2&#8239;$3'
    }
  },
  {
    // remove any amount of wrapping space within “ ”
    locales: ['fr_FR'],
    pattern: /(“|&ldquo;|&#x201C;)\s*(.*?)\s*(”|&rdquo;|&#x201D;)/g,
    replacement: {
      text: '$1$2$3',
      html: '$1$2$3'
    }
  },
  {
    // remove any amount of wrapping space within ‘ ’
    locales: ['fr_FR'],
    pattern: /(‘|&lsquo;|&#x2018;)\s*(.*?)\s*(’|&rsquo;|&#x2019;)/g,
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
