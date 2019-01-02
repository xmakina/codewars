const solution = require('./roman')
const Test = require('../framework/Test')

Test.describe('solution', () => {
  Test.describe('should handle small numbers', () => {
    Test.itAssertEquals(solution(1), 'I', '1 should, "I"')
    Test.itAssertEquals(solution(2), 'II', '2 should, "II"')
    Test.itAssertEquals(solution(3), 'III', '3 should, "III"')
    Test.itAssertEquals(solution(4), 'IV', '4 should, "IV"')
    Test.itAssertEquals(solution(5), 'V', '5 should, "V"')
    Test.itAssertEquals(solution(9), 'IX', '9 should, "IX"')
    Test.itAssertEquals(solution(10), 'X', '10 should, "X"')
    Test.itAssertEquals(solution(11), 'XI', '11 should, "XI"')
    Test.itAssertEquals(solution(19), 'XIX', '19 should, "XIX"')
    Test.itAssertEquals(solution(22), 'XXII', '22 should, "XXII"')
    Test.itAssertEquals(solution(15), 'XV', '15 should, "XV"')
  })

  Test.describe('should handle large numbers', () => {
    Test.itAssertEquals(solution(1000), 'M', '1000 should, "M"')
    Test.itAssertEquals(solution(1001), 'MI', '1001 should, "MI"')
    Test.itAssertEquals(solution(1990), 'MCMXC', '1990 should, "MCMXC"')
    Test.itAssertEquals(solution(2007), 'MMVII', '2007 should, "MMVII"')
    Test.itAssertEquals(solution(2008), 'MMVIII', '2008 should, "MMVIII"')
    Test.itAssertEquals(solution(499), 'CDXCIX', '499 should, "CDXCIX"')
    Test.itAssertEquals(solution(1666), 'MDCLXVI', '1666 should, "MDCLXVI"')
  })
})
