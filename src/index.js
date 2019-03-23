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
    pattern: /\s*[;?!]/g,
    replacement: {
      text: '\u202f$1',
      html: '&#8239$1'
    }
  }
];

const typographer = str => {
  for (const rule of rules) {
    str = str.replace(rule.pattern, rule.replacement.text);
  }
  return str;
};

export default typographer;
