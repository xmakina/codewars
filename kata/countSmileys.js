module.exports = function countSmileys (arr) {
  return arr.reduce((accumulator, smiley) => {
    if (isValid(smiley)) {
      return accumulator + 1
    }

    return accumulator
  }, 0)
}

function isValid (smiley) {
  if (smiley.length > 3) {
    return false
  }

  let components = smiley.split('')

  let hasEyes = match(components[0], [':', ';'])
  let hasMouth = match(components[components.length - 1], [')', 'D'])
  let hasValidNose = (components.length === 3) ? match(components[1], ['-', '~']) : true

  return hasEyes && hasMouth && hasValidNose
}

function match (item, chars) {
  return chars.includes(item)
}
