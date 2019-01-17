const removeNb = require('./removeNb')
const Test = require('../framework/Test')

Test.describe('Is my friend cheating?', () => {
  Test.it('can solve 1000003', () => {
    return Test.assertSimilar(removeNb(1000003), [[550320, 908566], [559756, 893250], [893250, 559756], [908566, 550320]])
  })

  Test.it('can solve 1000', () => {
    return Test.assertSimilar(removeNb(1000), [])
  })

  Test.it('can solve 100', () => {
    return Test.assertSimilar(removeNb(100), [])
  })

  Test.it('can solve 26', () => {
    return Test.assertSimilar(removeNb(26), [[15, 21], [21, 15]])
  })
})
