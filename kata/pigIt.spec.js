const pigIt = require('./pigIt')
const Test = require('../framework/Test')

Test.describe('Example tests', _ => {
  Test.it('Should parse Pig latin is cool', () => {
    return Test.assertEquals(pigIt('Pig latin is cool'), 'igPay atinlay siay oolcay')
  })
  Test.it('This is my string', () => {
    return Test.assertEquals(pigIt('This is my string'), 'hisTay siay ymay tringsay')
  })
  Test.it('Should ignore punctuation !', () => {
    return Test.assertEquals(pigIt('Hello world !'), 'elloHay orldway !')
  })
})
