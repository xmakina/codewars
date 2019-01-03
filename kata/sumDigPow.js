module.exports = function sumDigPow (start, end) {
  var results = []
  for (var i = start; i <= end; i++) {
    if (isEureka(i)) {
      results.push(i)
    }
  }

  return results
}

function isEureka (number) {
  let stringedNumber = '' + number
  let digits = stringedNumber.split('')

  let total = digits.reduce((accumulator, current, index) => {
    return accumulator + Math.pow(current, index + 1)
  }, 0)

  return total === number
}
