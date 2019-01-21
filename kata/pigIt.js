module.exports = pigIt

function pigIt (str) {
  let words = str.split(' ')
  return words.reduce((accumulator, value) => {
    let firstLetter = value.substring(0, 1)
    let rest = value.substring(1)

    let isWord = /\w/g
    if (value.match(isWord)) {
      accumulator.push(rest + firstLetter + 'ay')
    } else {
      accumulator.push(value)
    }

    return accumulator
  }, []).join(' ')
}
