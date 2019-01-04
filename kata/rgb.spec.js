const rgb = require('./rgb')
const Test = require('../framework/Test')

Test.describe('the rbg converter', () => {
  Test.it('should convert correct values', () => {
    Test.assertEquals(rgb(255, 255, 255), 'FFFFFF')
    Test.assertEquals(rgb(15, 0, 0), '0F0000')
    Test.assertEquals(rgb(148, 0, 211), '9400D3')
  })
  Test.it('should convert correct over top values', () => {
    Test.assertEquals(rgb(255, 255, 300), 'FFFFFF')
  })
  Test.it('should convert correct negative values', () => {
    Test.assertEquals(rgb(0, 0, -20), '000000')
  })
})
