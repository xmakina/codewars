module.exports = add

function add (a, b) {
  let top = toReverseOrderNumbers(a)
  let bottom = toReverseOrderNumbers(b)

  let max = Math.max(top.length, bottom.length)

  let remainder = 0
  let final = []

  for (let i = 0; i < max; i++) {
    let result = addWithRemainder((top[i] || 0), (bottom[i] || 0), remainder)
    remainder = result.remainder
    final.push(result.value)
  }

  if (remainder) {
    final.push(remainder)
  }

  return final.reverse().join('')
}

function toReverseOrderNumbers (input) {
  return input.split('').reverse().map((x) => {
    return parseInt(x)
  })
}

function addWithRemainder (a, b, overflow) {
  let value = (a + b + overflow) % 10
  let remainder = Math.floor((a + b + overflow) / 10)
  return { value, remainder }
}
