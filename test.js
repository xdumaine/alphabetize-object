'use strict';

const alphabetizeObject = require('./index');
const assert = require('assert');

describe('alphabetizeObject', function () {
  it('should sort a generic object', function () {
    const object = {
      b: 1,
      d: 2,
      a: 3,
      c: 4
    };
    const newObj = alphabetizeObject(object);
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
    const newObj = alphabetizeObject(object, { recursive: true });
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
    const newObj = alphabetizeObject(object);
    assert.deepEqual(newObj, {
      b: 1,
      d: 2,
      a: 3,
      c: 4
    });
  });

  it('should be case sensitive', function () {
    const object = {
      b: 1,
      B: 2,
      a: 3,
      A: 4
    };
    const newObj = alphabetizeObject(object);
    assert.deepEqual(newObj, {
      A: 4,
      B: 2,
      a: 3,
      b: 1
    });
  });


  it('should be case insensitive if caseInsensitive is true', function () {
    const object = {
      B: 1,
      b: 2,
      a: 3,
      A: 4
    };
    const newObj = alphabetizeObject(object, { caseInsensitive: true });
    assert.deepEqual(newObj, {
      A: 4,
      a: 3,
      B: 1,
      b: 2
    });
  });
});
