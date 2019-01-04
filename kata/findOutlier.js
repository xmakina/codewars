module.exports = function findOutlier (integers) {
  const odds = integers.filter((value) => Math.abs(value) % 2 === 1)
  const evens = integers.filter((value) => Math.abs(value) % 2 === 0)

  if (odds.length > evens.length) {
    return evens[0]
  }

  return odds[0]
}
