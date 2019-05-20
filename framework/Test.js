/* global it, describe */
const chai = require('chai')

module.exports = {
  itAssertSimilar: function (actual, expected, msg, options) {
    return it(msg || `${actual} should be similar to ${expected}`, () => {
      return this.assertSimilar(actual, expected, msg, options)
    })
  },
  assertSimilar: function (actual, expected, msg, options) {
    return chai.expect(actual).to.deep.equal(expected)
  },
  describe,
  it,
  assertEquals: function (actual, expected, msg, options) {
    return chai.expect(actual).to.equal(expected)
  },
  itAssertEquals: function (actual, expected, msg, options) {
    return it(msg || '', () => {
      this.assertEquals(actual, expected, msg, options)
    })
  }
}
