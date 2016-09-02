'use strict';

const alphabetizeObject = function (object, opts) {
  opts = opts || {};
  const keys = Object.keys(object);
  const dest = {};
  keys.sort((i, j) => {
    if (opts.caseInsensitive) {
      return i.toLowerCase() <= j.toLowerCase() ? -1 : 1;
    }
    return i <= j ? -1 : 1;
  });
  keys.forEach((k) => {
    dest[k] = object[k];
  });
  if (opts.recursive) {
    for (let key in dest) {
      if (typeof dest[key] === 'object') {
        dest[key] = alphabetizeObject(dest[key], opts);
      }
    }
  }
  return dest;
};

module.exports = alphabetizeObject;
