const tickets = require('./tickets')
const Test = require('../framework/Test')

Test.describe('can change be made', () => {
  Test.it('can make change', () => {
    Test.assertEquals(tickets([25, 25, 50, 50, 25, 25, 25, 100]), 'YES')
  })
  Test.it('can not make change from not enough', () => {
    Test.assertEquals(tickets([25, 100]), 'NO')
  })
  Test.it('can not make 25s from 50s', () => {
    Test.assertEquals(tickets([25, 25, 50, 50, 100]), 'NO')
  })
})
