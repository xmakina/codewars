const thirt = require('./divisibleBy13')
const Test = require('../framework/Test')

Test.describe('thirt', function () {
  Test.it('Basic tests', function () {
    Test.assertEquals(thirt(8529), 79)
    Test.assertEquals(thirt(85299258), 31)
    Test.assertEquals(thirt(5634), 57)
    Test.assertEquals(thirt(1111111111), 71)
    Test.assertEquals(thirt(987654321), 30)
  })
})
