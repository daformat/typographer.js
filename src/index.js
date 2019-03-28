// General imports
import isElement from './helpers/isElement';
import treeFilter from './helpers/treeFilter';

// Rules
import punctuation from './rules/punctuation';
import abbreviation from './rules/abbreviation';
import composition from './rules/composition';
import unit from './rules/unit';

// Concatenate rules
const rules = [...punctuation, ...abbreviation, ...composition, ...unit];

// Apply applicable_rules to string with output_format for replacements
// returns modified string
const apply_rules = (string, applicable_rules, output_format) => {
  for (const rule of applicable_rules) {
    string = string.replace(
      rule.pattern,
      rule.replacement[output_format]
    );
  }
  return string;
};

// Main function, this is what gets exported
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
  if (typeof input === 'string') {
    // We're dealing with a string, proceed with applying applicable_rules
    return apply_rules(input, applicable_rules, output_format);
  } else if (isElement(input)) {
    // We're dealing with a DOM element, we'll use a TreeWalker
    const treeWalker = document.createTreeWalker(
      input,
      NodeFilter.SHOW_ELEMENT,
      { acceptNode: treeFilter },
      false
    );

    let nodeList = [];

    while(treeWalker.nextNode()) {
      // Since we're working with innerHTML we only want to work on top-level
      // parent nodes, and avoid processing the same thing more than once
      if (
        nodeList.length === 0 ||
        !nodeList[nodeList.length - 1].contains(treeWalker.currentNode)
      ) {
        nodeList.push(treeWalker.currentNode);
        treeWalker.currentNode.innerHTML = apply_rules(
          treeWalker.currentNode.innerHTML,
          applicable_rules,
          output_format
        );
      }
    }
  }

};

export default typographer;
