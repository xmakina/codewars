const high = require('./high')
const Test = require('../framework/Test')

Test.describe('Example tests', _ => {
  Test.it('should score taxi the highest', () => {
    Test.assertEquals(high('man i need a taxi up to ubud'), 'taxi')
  })

  Test.it('should score volcano the highest', () => {
    Test.assertEquals(high('what time are we climbing up the volcano'), 'volcano')
  })

  Test.it('should score semynak the highest', () => {
    Test.assertEquals(high('take me to semynak'), 'semynak')
  })

  Test.it('should return the first word if both are equal score', () => {
    Test.assertEquals(high('tqijuqu vatsdbm jkzrxqo unfwovt'), 'jkzrxqo')
  })

  Test.it('should return nothing if given nothing', () => {
    Test.assertEquals(high(''), '')
  })
})
