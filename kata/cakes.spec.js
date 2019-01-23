const cakes = require('./cakes')
const Test = require('../framework/Test')

Test.describe('cakes', function () {
  var recipe, available

  Test.it('can make 2 cakes', function () {
    recipe = { flour: 500, sugar: 200, eggs: 1 }
    available = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
    Test.assertEquals(cakes(recipe, available), 2, 'Wrong result for example #1')
  })

  Test.it('can make 0 cakes', () => {
    recipe = { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 }
    available = { sugar: 500, flour: 2000, milk: 2000 }
    Test.assertEquals(cakes(recipe, available), 0, 'Wrong result for example #2')
  })
})
