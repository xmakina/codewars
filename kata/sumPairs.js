module.exports = sumPairs

function sumPairs (ints, s) {
  let pairs = []
  let farRight = ints.length

  let prevMax = ints[0]
  let max = ints.reduce((accumulator, value, index) => {
    if (value >= accumulator) {
      prevMax = accumulator
      return value
    }

    return accumulator
  })

  if (max + prevMax < s) {
    return
  }

  let previous
  ints.map((value, leftIndex) => {
    if (previous === value) {
      return
    }
    previous = value
    if (leftIndex > farRight) {
      return
    }
    let rightIndex = ints.indexOf(s - ints[leftIndex], leftIndex + 1)
    if (rightIndex > -1) {
      pairs.push([leftIndex, rightIndex])
      if (farRight > rightIndex) {
        farRight = rightIndex
      }
    }
  })

  if (pairs.length === 0) {
    return undefined
  } else {
    let leftMostPair = pairs[leftMost(pairs)]
    return [ints[leftMostPair[0]], ints[leftMostPair[1]]]
  }
}

function leftMost (pairs) {
  return pairs.reduce((accumulator, pair, index) => {
    if (pairs[accumulator][1] > pair[1]) {
      return index
    }

    return accumulator
  }, 0)
}
