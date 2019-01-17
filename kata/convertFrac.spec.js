const convertFrac = require('./convertFrac')
const Test = require('../framework/Test')

Test.describe('common denomiators', _ => {
  Test.it('should find the common denomiator', () => {
    var lst = [ [1, 2], [1, 3], [1, 4] ]
    return Test.assertEquals(convertFrac(lst), '(6,12)(4,12)(3,12)')
  })

  Test.it('should find the common denomiator', () => {
    var lst = [ [69, 130], [87, 1310], [1, 4] ]
    return Test.assertEquals(convertFrac(lst), '(18078,34060)(2262,34060)(8515,34060)')
  })

  Test.it('should handle empty lists', () => {
    var lst = [ ]
    return Test.assertEquals(convertFrac(lst), '')
  })
})
