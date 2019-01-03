module.exports = function toWeirdCase (input) {
  let words = input.split(' ')
  let weirdWords = words.map((word) => {
    return weirdCaseWord(word)
  })

  return weirdWords.join(' ')
}

function weirdCaseWord (word) {
  let letters = word.split('')
  return letters.reduce((accumulator, letter, index) => {
    accumulator += index % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase()
    return accumulator
  }, '')
}
