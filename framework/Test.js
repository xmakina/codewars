/* global it, describe */
const chai = require('chai')

const assertEquals = function (actual, expected, hasMessage = false) {
  const test = chai.expect(actual).to.equal(expected)

  if (hasMessage) {
    return test
  }

  return it(`${actual} should be equal to ${expected}`, () => test)
}

const itAssertEquals = function (actual, expected, msg, options) {
  return it(msg || `${actual} should be equal to ${expected}`, () => {
    this.assertEquals(actual, expected, true)
  })
}

const assertSimilar = function (actual, expected, hasMessage = false) {
  const test = chai.expect(actual).to.deep.equal(expected)

  if (hasMessage) {
    return test
  }

  return it(`${actual} should be similar to ${expected}`, () => test)
}

const itAssertSimilar = function (actual, expected, msg, options) {
  return it(msg || `${actual} should be similar to ${expected}`, () => {
    return assertSimilar(actual, expected, true)
  })
}

module.exports = {
  assertSimilar,
  itAssertSimilar,
  assertEquals,
  itAssertEquals,
  describe,
  it
}
