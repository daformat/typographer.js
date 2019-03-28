// Find out if an object is an HTMLElement
const isElement = o => {
  return (
    typeof HTMLElement === 'object' ?
      o instanceof HTMLElement :
      o && typeof o === 'object' && o !== null && o.nodeType === 1 && typeof o.nodeName==='string'
  );
};

export default isElement;
