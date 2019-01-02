module.exports = function (theNumber) {
  const result = multiplyIntoSequence(theNumber)

  return result
}

function multiplyIntoSequence (theNumber) {
  let currentResult = theNumber
  let previousResult = 0
  while (currentResult !== previousResult) {
    previousResult = currentResult
    currentResult = calculateResult(currentResult.toString().split('').reverse())
  }

  return currentResult
}

function calculateResult (numbers) {
  let theSequence = sequence()
  const result = multiplyNumbersAgainstSequence(numbers, theSequence)

  return result
}

function multiplyNumbersAgainstSequence (numbers, sequence) {
  let result = 0
  for (let i = 0; i < numbers.length; i++) {
    const nextValue = sequence.next()
    result += numbers[i] * nextValue.value
  }

  return result
}

function * sequence () {
  const sequence = [1, 10, 9, 12, 3, 4]
  while (true) {
    for (let i = 0; i < sequence.length; i++) {
      yield sequence[i]
    }
  }
}
