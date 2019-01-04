const findOutlier = require('./findOutlier')
const Test = require('../framework/Test')

Test.describe('outliers can be found', () => {
  Test.it('can spot an odd outlier', () => {
    Test.assertEquals(findOutlier([0, 1, 2]), 1)
  })

  Test.it('can spot an even outlier', () => {
    Test.assertEquals(findOutlier([1, 2, 3]), 2)
  })

  Test.it('can spot an outlier in a long array', () => {
    Test.assertEquals(findOutlier([2, 6, 8, 10, 3]), 3)
  })

  Test.it('can spot odd in zeros', () => {
    Test.assertEquals(findOutlier([0, 0, 3, 0, 0]), 3)
  })

  Test.it('can spot zero in odds', () => {
    Test.assertEquals(findOutlier([1, 1, 0, 1, 1]), 0)
  })

  Test.it('can spot negative numbers', () => {
    Test.assertEquals(findOutlier([ 2, 6, 8, 2, -66, 34, -35, 66, 700, 1002, -84, 10, 4 ]), -35)
  })
})
