const VigenèreCipher = require('./vigenèrecipher')
const Test = require('../framework/Test')

var abc, key
abc = 'abcdefghijklmnopqrstuvwxyz'
key = 'password'
let c = new VigenèreCipher(key, abc)

Test.describe('The Vigenère Cipher', () => {
  Test.it('can encode', () => {
    Test.assertEquals(c.encode('codewars'), 'rovwsoiv')
    Test.assertEquals(c.encode('waffles'), 'laxxhsj')
  })

  Test.it('will not encode letters not in alphabet', () => {
    Test.assertEquals(c.encode('CODEWARS'), 'CODEWARS')
  })

  Test.it('can decode', () => {
    Test.assertEquals(c.decode('rovwsoiv'), 'codewars')
    Test.assertEquals(c.decode('laxxhsj'), 'waffles')
  })

  Test.it('will not decode letters not in alphabet', () => {
    Test.assertEquals(c.decode('CODEWARS'), 'CODEWARS')
  })
})
