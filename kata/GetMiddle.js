module.exports = function (input) {
  let hasDeadMiddle = input.length % 2 === 1
  if (hasDeadMiddle) {
    let deadMiddle = (input.length + 1) / 2
    return input.substring(deadMiddle - 1, deadMiddle)
  }

  let middle = input.length / 2
  return input.substring(middle - 1, middle + 1)
}
