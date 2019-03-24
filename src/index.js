import punctuation from './rules/punctuation';

// Concatenate rules
const rules = [...punctuation];

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
