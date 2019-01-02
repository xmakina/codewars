const getMiddle = require('./GetMiddle')
const Test = require('../framework/Test')

Test.describe('GetMiddle', function () {
  Test.it('odd length returns single letter', function () {
    Test.assertEquals(getMiddle('testing'), 't')
  })

  Test.it('even returns two letters', function () {
    Test.assertEquals(getMiddle('test'), 'es')
  })

  Test.it('even returns two letters even if same', function () {
    Test.assertEquals(getMiddle('middle'), 'dd')
  })

  Test.it('casing is preserved', function () {
    Test.assertEquals(getMiddle('A'), 'A')
  })
})
