module.exports = convertFrac

function convertFrac (lst) {
  if (lst.length === 0) {
    return ''
  }

  let fractions = lst.reduce(toFractions, [])
  let lowestCommon = findLowest(fractions)
  return fractions.reduce(toFractionString(lowestCommon), '')
}

function toFractions (accumulator, value) {
  let fraction = { numerator: value[0], denominator: value[1] }
  accumulator.push(fraction)
  return accumulator
}

function findLowest (fractions) {
  let lowestCommon = 1
  let found = false
  while (!found) {
    found = fractions.reduce(isLowest(lowestCommon), true)

    if (!found) {
      lowestCommon++
    }
  }

  return lowestCommon
}

function isLowest (lowestCommon) {
  return (accumulator, value) => {
    let remainder = lowestCommon % value.denominator
    if (remainder !== 0) {
      return false
    }

    return accumulator && true
  }
}

function toFractionString (lowestCommon) {
  return (accumulator, value) => {
    let factor = lowestCommon / value.denominator
    let newNumerator = Math.floor(value.numerator * factor)

    return accumulator + `(${newNumerator},${lowestCommon})`
  }
}
