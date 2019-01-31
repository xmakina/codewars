module.exports = VigenèreCipher

function VigenèreCipher (key, alphabet) {
  this.alphabet = alphabet.split('')
  this.key = key.split('')

  this.encode = function (plaintext) {
    return plaintext.split('').reduce(shift(this, 1), '')
  }
  this.decode = function (ciphertext) {
    return ciphertext.split('').reduce(shift(this, -1), '')
  }
}

function shift (cipher, direction) {
  return (accumulator, letter, index) => {
    let letterIndex = cipher.alphabet.indexOf(letter)
    if (letterIndex === -1) {
      accumulator += letter
      return accumulator
    }

    let keyLetter = cipher.key[index % cipher.key.length]
    let keyIndex = cipher.alphabet.indexOf(keyLetter)

    let shift = letterIndex + (keyIndex * direction)
    if (shift < 0) {
      shift += cipher.alphabet.length
    }

    accumulator += cipher.alphabet[shift % cipher.alphabet.length]
    return accumulator
  }
}
