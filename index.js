'use strict';

const alphabetizeObject = function (object, opts) {
  opts = opts || {};
  const keys = [];
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      keys.push({ key, value: object[key] });
    }
  }
  const dest = {};
  keys.sort((i, j) => {
    if (opts.caseInsensitive) {
      return i.key.toLowerCase() <= j.key.toLowerCase() ? -1 : 1;
    }
    return i.key <= j.key ? -1 : 1;
  });
  keys.forEach((k) => {
    dest[k.key] = k.value;
  });
  if (opts.recursive) {
    for (let key in dest) {
      if (typeof dest[key] === 'object') {
        dest[key] = alphabetizeObject(dest[key], opts);
      }
    }
  }
  if (opts.inPlace) {
    object = dest;
  }
  return dest;
};

module.exports = alphabetizeObject;
