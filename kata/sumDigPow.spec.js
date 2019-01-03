const sumDigPow = require('./sumDigPow')
const Test = require('../framework/Test')

Test.describe('Example Tests', function () {
  Test.assertSimilar(sumDigPow(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9])
  Test.assertSimilar(sumDigPow(1, 100), [1, 2, 3, 4, 5, 6, 7, 8, 9, 89])
  Test.assertSimilar(sumDigPow(10, 100), [89])
  Test.assertSimilar(sumDigPow(90, 100), [])
  Test.assertSimilar(sumDigPow(90, 150), [135])
  Test.assertSimilar(sumDigPow(50, 150), [89, 135])
  Test.assertSimilar(sumDigPow(10, 150), [89, 135])
})
