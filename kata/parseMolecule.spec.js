const parseMolecule = require('./parseMolecule')
const Test = require('../framework/Test')

Test.describe('Example tests', _ => {
  Test.it('Should parse water', () => {
    return Test.assertSimilar(parseMolecule('H2O'), { H: 2, O: 1 })
  })

  Test.it('Should parse magneisum water', () => {
    return Test.assertSimilar(parseMolecule('Mg2O2'), { Mg: 2, O: 2 })
  })

  Test.it('Should parse magnesium hydroxide: Mg(OH)2', () => {
    return Test.assertSimilar(parseMolecule('Mg(OH)2'), { Mg: 1, O: 2, H: 2 })
  })

  Test.it('Should parse Fremy\'s salt: K4[ON(SO3)2]2', () => {
    return Test.assertSimilar(parseMolecule('K4[ON(SO3)2]2'), { K: 4, O: 14, N: 2, S: 4 })
  })

  Test.it('Should parse big numbers: C6H12O6', () => {
    return Test.assertSimilar(parseMolecule('C6H12O6'), { C: 6, H: 12, O: 6 })
  })

//   Test.it('Should parse cyclopentadienyliron dicarbonyl dimer: (C5H5)Fe(CO)2CH3', () => {
//     return Test.assertSimilar(parseMolecule('(C5H5)Fe(CO)2CH3'), { C: 8, H: 8, Fe: 1, O: 2 })
//   })
})
