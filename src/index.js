import punctuation from './rules/punctuation';
import abbreviation from './rules/abbreviation';
import composition from './rules/composition';

// Concatenate rules
const rules = [...punctuation, ...abbreviation, ...composition];

const typographer = (
  input = '',
  {
    locale = 'en',
    output_format = 'text',
    disable_rules
  } = {}
) => {

  // Make sure we're using a valid output format
  output_format = output_format.toLowerCase();
  if (
    output_format !== 'text' &&
    output_format !== 'html'
  ) {
    output_format = 'text';
  }

  // Filter applicable rules for given locale
  let applicable_rules = rules.filter( r => {
    return r.locales.indexOf(locale) !== -1;
  });

  // Disable specified rules
  if (disable_rules) {
    applicable_rules = applicable_rules.filter( r => {
      return disable_rules.indexOf(`${r.ruleset}/${r.name}`) === -1;
    });
  }

  // Test input type
  // For the moment we only accept strings
  let string = '';
  if (typeof input === 'string') {
    string = input;
  }

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
