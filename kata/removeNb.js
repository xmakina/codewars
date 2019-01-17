module.exports = removeNb

function removeNb (n) {
  let results = []
  let total = getTotal(n)

  for (let a = 1; a < n; a++) {
    let b = Math.floor((total - a) / a)
    if (total === a * b + a + b) {
      results.push([a, b])
      results.push([b, a])
    }
  }

  return results.sort((a, b) => {
    return a[0] - b[0]
  })
}

function getTotal (max) {
  let total = 0
  for (let i = 1; i <= max; i++) {
    total += i
  }
  return total
}
