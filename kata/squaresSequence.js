module.exports = function squares (toSquare, amount) {
  if (amount <= 0) {
    return []
  }

  return deepSquare(toSquare, --amount, [toSquare])
}

function deepSquare (toSquare, amount, accumulator) {
  if (amount === 0) {
    return accumulator
  }

  let squared = toSquare * toSquare
  accumulator.push(squared)
  return deepSquare(squared, --amount, accumulator)
}
