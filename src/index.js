const rules = [
  {
    locales: ['fr_FR'],
    pattern: /(?<!(\s\.){1,2})\s*\.(?!(\s\.){1,2})/g,
    replacement: {
      text: '.',
      html: '.'
    }
  },
  {
    locales: ['fr_FR'],
    pattern: /\. \. \./g,
    replacement: {
      text: '.\u00a0.\u00a0.',
      html: '.&nbsp;.&nbsp;.'
    }
  },
  {
    locales: ['fr_FR'],
    pattern: /\s+(\.\s\.\s\.)/g,
    replacement: {
      text: ' $1',
      html: ' $1'
    }
  },
  {
    locales: ['fr_FR'],
    pattern: /\s+,/g,
    replacement: {
      text: ',',
      html: ','
    }
  },
  {
    locales: ['fr_FR'],
    pattern: /\s*:/g,
    replacement: {
      text: '\u00a0:',
      html: '&nbsp;:'
    }
  },
  {
    locales: ['fr_FR'],
    pattern: /\s*([;?!])/g,
    replacement: {
      text: '\u202f$1',
      html: '&#8239$1'
    }
  },
  {
    locales: ['fr_FR'],
    pattern: /([«‹])\s*(.*?)\s*([»›])/g,
    replacement: {
      text: '$1\u202f$2\u202f$3',
      html: '$1&#8239$2&#8239$3'
    }
  }
];

const typographer = ({
  locale = 'fr_FR',
  string
}) => {

  // Filter applicable rules for given locale
  const applicable_rules = rules.filter( r => {
    return r.locales.indexOf(locale) !== -1;
  });

  // Apply each rule one after the other
  for (const rule of applicable_rules) {
    string = string.replace(
      rule.pattern,
      rule.replacement.text
    );
  }

  return string;
};

export default typographer;
