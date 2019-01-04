module.exports = function rgb (...theArgs) {
  return theArgs.reduce((accumulator, value) => {
    return accumulator + padHex(decToHex(validate(value)))
  }, '')
}

function validate (value) {
  if (value > 255) {
    value = 255
  }

  if (value < 0) {
    value = 0
  }

  return value
}

function padHex (hexNumber) {
  if (hexNumber.length < 2) {
    return '0' + hexNumber
  }

  return hexNumber
}

function decToHex (number) {
  let remainder = number % 16
  if (number - remainder === 0) {
    return getHex(remainder)
  }

  return getHex((number - remainder) / 16) + getHex(remainder)
}

function getHex (number) {
  const hex = '0123456789ABCDEF'.split('')

  return hex[number]
}
