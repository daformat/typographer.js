// Disallowed nodes - those nodes won't be processed themselves by typographer.
// Other type of nodes won't be processed if they **contain** one of these.
// But their children will, as long as they don't match this test.
const isDisallowed = node => {
  return (
    node.nodeName === 'PRE' ||
    node.nodeName === 'CODE' ||
    node.nodeName === 'KBD' ||
    node.nodeName === 'SAMP' ||
    node.nodeName === 'VAR' ||
    node.nodeName === 'BDI' ||
    node.nodeName === 'BDO' ||
    node.nodeName === 'SAMP' ||
    node.nodeName === 'TT' ||
    node.nodeName === 'EMBED' ||
    node.nodeName === 'OBJECT' ||
    node.nodeName === 'SCRIPT' ||
    node.nodeName === 'STYLE' ||
    node.nodeName === 'IFRAME'
  );
};

// TreeWalker filter, exclude disallowed nodes, or nodes containing disallowed
// children node types
const filter = node => {
  if (isDisallowed(node)) {
    return NodeFilter.FILTER_SKIP;
  } else {
    var t = [].find.call(node.children, child => {
      return isDisallowed(child);
    });
    if (t) {
      return NodeFilter.FILTER_SKIP;
    } else {
      return NodeFilter.FILTER_ACCEPT;
    }
  }
};

export default filter;
