function translate (number, upper, stepdown, letter, stepdownLetter) {
  let result = ''
  for (number; number >= stepdown; number -= upper) {
    if (number < upper && number >= stepdown) {
      result += stepdownLetter
      number -= stepdown
      break
    } else {
      result += letter
    }
  }

  return { number, result }
}

module.exports = function solution (number) {
  let thousands = translate(number, 1000, 900, 'M', 'CM')
  let fiveHundreds = translate(thousands.number, 500, 400, 'D', 'CD')
  let hundreds = translate(fiveHundreds.number, 100, 90, 'C', 'XC')
  let fifties = translate(hundreds.number, 50, 40, 'L', 'XL')
  let tens = translate(fifties.number, 10, 9, 'X', 'IX')
  let fives = translate(tens.number, 5, 4, 'V', 'IV')
  let ones = translate(fives.number, 1, 0, 'I', '')

  return thousands.result + fiveHundreds.result + hundreds.result + fifties.result + tens.result + fives.result + ones.result
}
