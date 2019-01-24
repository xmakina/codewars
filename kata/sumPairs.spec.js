const sumPairs = require('./sumPairs')
const Test = require('../framework/Test')

const l1 = [1, 4, 8, 7, 3, 15]
const l2 = [1, -2, 3, 0, -6, 1]
const l3 = [20, -13, 40]
const l4 = [1, 2, 3, 4, 1, 0]
const l5 = [10, 5, 2, 3, 7, 5]
const l6 = [4, -2, 3, 3, 4]
const l7 = [0, 2, 0]
const l8 = [5, 9, 13, -3]

Test.describe('Testing For Sum of Pairs', function () {
  Test.it('Basic: [' + l1 + '] should return [1, 7] for sum = 8', () => {
    return Test.assertSimilar(sumPairs(l1, 8), [1, 7])
  })

  Test.it('Negatives: [' + l2 + '] should return [0, -6] for sum = -6', () => {
    return Test.assertSimilar(sumPairs(l2, -6), [0, -6])
  })

  Test.it('No Match: [' + l3 + '] should return undefined for sum = -7', () => {
    return Test.assertEquals(sumPairs(l3, -7), undefined)
  })

  Test.it('First Match From Left: [' + l4 + '] should return [1, 1] for sum = 2 ', () => {
    return Test.assertSimilar(sumPairs(l4, 2), [1, 1])
  })

  Test.it('First Match From Left REDUX!: [' + l5 + '] should return [3, 7] for sum = 10 ', () => {
    return Test.assertSimilar(sumPairs(l5, 10), [3, 7])
  })

  Test.it('Duplicates: [' + l6 + '] should return [4, 4] for sum = 8', () => {
    return Test.assertSimilar(sumPairs(l6, 8), [4, 4])
  })

  Test.it('Zeroes: [' + l7 + '] should return [0, 0] for sum = 0', () => {
    return Test.assertSimilar(sumPairs(l7, 0), [0, 0])
  })

  Test.it('Subtraction: [' + l8 + '] should return [13, -3] for sum = 10', () => {
    return Test.assertSimilar(sumPairs(l8, 10), [13, -3])
  })

  Test.it('Can handle an enormous list', () => {
    let megaList = []
    for (let i = 0; i < 5000000; i++) {
      megaList.push(Math.floor(Math.random() * 10))
    }

    return Test.assertSimilar(sumPairs(megaList, 22), undefined)
  })
})
