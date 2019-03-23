const rules = [
  {
    locales: ['fr_FR'],
    pattern: /(?<!(\s\.){1,2})\s*\.(?!(\s\.){1,2})/g,
    replacement: '.'
  },
  {
    locales: ['fr_FR'],
    pattern: /\. \. \./g,
    replacement: '.\u00a0.\u00a0.'
  },
  {
    locales: ['fr_FR'],
    pattern: /\s+(\.\s\.\s\.)/g,
    replacement: ' $1'
  },
  {
    locales: ['fr_FR'],
    pattern: /\s+,/g,
    replacement: ','
  },
  {
    locales: ['fr_FR'],
    pattern: /\s*:/g,
    replacement: '\u00a0:'
  }
];

const typographer = str => {
  for (const rule of rules) {
    str = str.replace(rule.pattern, rule.replacement);
  }
  return str;
};

export default typographer;
