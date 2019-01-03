const countSmileys = require('./countSmileys')
const Test = require('../framework/Test')

Test.describe('Count Smileys', function () {
  Test.it('no smileys returns empty array', () => {
    Test.assertEquals(countSmileys([]), 0)
  })
  Test.it('valid smileys found', () => {
    Test.assertEquals(countSmileys([':D', ':~)', ';~D', ':)']), 4)
  })
  Test.it('invalid smileys ignored', () => {
    Test.assertEquals(countSmileys([':)', ':(', ':D', ':O', ':;']), 2)
  })
  Test.it('noses are included', () => {
    Test.assertEquals(countSmileys([';]', ':[', ';*', ':$', ';-D']), 1)
  })
  Test.it('noses are validated', () => {
    Test.assertEquals(countSmileys([':~)', ';oD', ':~>', ':)', ':)', ':~)', ':-(']), 4)
  })
  Test.it('right components wrong order', () => {
    Test.assertEquals(countSmileys([':D-']), 0)
  })
  Test.it('should reject extra components', () => {
    Test.assertEquals(countSmileys([':o)', ':--D', ';-~)']), 0)
  })
})
