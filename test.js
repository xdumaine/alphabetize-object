'use strict';

const alphabetizeObjectKeys = require('./index');
const assert = require('assert');

describe('alphabetizeObjectKeys', function () {
  it('should sort a generic object', function () {
    const object = {
      b: 1,
      d: 2,
      a: 3,
      c: 4
    };
    const newObj = alphabetizeObjectKeys(object);
    assert.deepEqual(newObj, {
      a: 3,
      b: 1,
      c: 4,
      d: 2
    });
  });

  it('should sort an object recursively', function () {
    const object = {
      b: 1,
      d: 2,
      e: {
        foo: 1,
        bar: 2
      },
      a: 3,
      c: 4
    };
    const newObj = alphabetizeObjectKeys(object, { recursive: true });
    assert.deepEqual(newObj, {
      a: 3,
      b: 1,
      c: 4,
      d: 2,
      e: {
        bar: 2,
        foo: 1
      }
    });
  });

  it('should leave the original object alone', function () {
    const object = {
      b: 1,
      d: 2,
      a: 3,
      c: 4
    };
    const newObj = alphabetizeObjectKeys(object);
    assert.deepEqual(newObj, {
      b: 1,
      d: 2,
      a: 3,
      c: 4
    });
  });
  
  it('should leave modify the original object if inPlace is true', function () {
    const object = {
      b: 1,
      d: 2,
      a: 3,
      c: 4
    };
    const newObj = alphabetizeObjectKeys(object, { inPlace: true });
    assert.deepEqual(object, {
      a: 3,
      b: 1,
      c: 4,
      d: 2
    });
  });
});
