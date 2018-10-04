function addition (left, right) {
  return left + right
}

function subtraction (left, right) {
  return left - right
}

function division (left, right) {
  return left / right
}

function multiplication (left, right) {
  return left * right
}

module.exports = function (operator, left, right) {
  switch (operator) {
    case '+':
      return addition(left, right)
    case '-':
      return subtraction(left, right)
    case '/':
      return division(left, right)
    case '*':
      return multiplication(left, right)
  }
}
