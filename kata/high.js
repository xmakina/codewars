function scoreWord (word) {
  const letterScores = word.split('').map(letter => {
    return letter.charCodeAt(0) - 96
  })

  if (letterScores.length === 0) {
    return 0
  }

  const score = letterScores.reduce((accumulator, letterScore) => {
    return (accumulator || 0) + letterScore
  })

  return score
}

module.exports = function high (x) {
  let scored = x.split(' ').map(word => {
    return { score: scoreWord(word), word }
  })

  let highestScoreWithWord = scored.reduce((highest, wordWithScore) => {
    return highest.score >= wordWithScore.score ? highest : wordWithScore
  })

  return highestScoreWithWord.word
}
