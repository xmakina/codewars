module.exports = function sqInRect (length, width) {
  if (length === width) {
    return null
  }

  return findSquares(length, width, [])
}

function findSquares (length, width, accumulator) {
  if (length <= 0 || width <= 0) {
    return accumulator
  }

  if (length === width) {
    if (length > 0) {
      accumulator.push(length)
    }
    return accumulator
  }

  if (length > width) {
    length = length - width
    accumulator.push(width)
  } else {
    width = width - length
    accumulator.push(length)
  }

  return findSquares(length, width, accumulator)
}
