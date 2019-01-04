const deleteNth = require('./deleteNth')
const Test = require('../framework/Test')

Test.describe('removing Nth', function () {
  Test.it('no more than one', () => {
    Test.assertSimilar(deleteNth([20, 37, 20, 21], 1), [20, 37, 21])
  })
  Test.it('no more than three', () => {
    Test.assertSimilar(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3), [1, 1, 3, 3, 7, 2, 2, 2])
  })
})
