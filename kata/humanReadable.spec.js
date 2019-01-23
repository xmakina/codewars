const humanReadable = require('./humanReadable')
const Test = require('../framework/Test')

Test.describe('human readable time', function () {
  Test.describe('should format correctly', function () {
    Test.it('can format 0', () => {
      Test.assertEquals(humanReadable(0), '00:00:00')
    })
    Test.it('can format 5', () => {
      Test.assertEquals(humanReadable(5), '00:00:05')
    })
    Test.it('can format 60', () => {
      Test.assertEquals(humanReadable(60), '00:01:00')
    })
    Test.it('can format 86399', () => {
      Test.assertEquals(humanReadable(86399), '23:59:59')
    })
    Test.it('can format 359999', () => {
      Test.assertEquals(humanReadable(359999), '99:59:59')
    })
  })
})
