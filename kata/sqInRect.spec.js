const sqInRect = require('./sqInRect')
const Test = require('../framework/Test')
Test.describe('rectangle to squares', () => {
  Test.assertSimilar(sqInRect(5, 5), null, 'same lengths should be rejected')
  Test.assertSimilar(sqInRect(5, 3), [3, 2, 1, 1], '5 x 3 should become 3,2,1,1')
  Test.assertSimilar(sqInRect(3, 5), [3, 2, 1, 1])
  Test.assertSimilar(sqInRect(20, 14), [14, 6, 6, 2, 2, 2])
})
