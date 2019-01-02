/* global it, describe */
const chai = require('chai')

module.exports = {
  assertSimilar: function (actual, expected, msg, options) {
    return it(`${actual} should be similar to ${expected}`, () => {
      return chai.expect(actual).to.equal(expected)
    })
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
