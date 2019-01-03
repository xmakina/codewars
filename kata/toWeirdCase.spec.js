const toWeirdCase = require('./toWeirdCase')
const Test = require('../framework/Test')

Test.describe('toWeirdCase', function () {
  Test.it('should return the correct value for a single word', function () {
    Test.assertEquals(toWeirdCase('This'), 'ThIs')
    Test.assertEquals(toWeirdCase('is'), 'Is')
  })
  Test.it('should return the correct value for multiple words', function () {
    Test.assertEquals(toWeirdCase('This is a test'), 'ThIs Is A TeSt')
  })
})
