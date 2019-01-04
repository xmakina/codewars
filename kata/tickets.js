module.exports = function tickets (peopleInLine) {
  const theCinema = Cinema(peopleInLine)

  return theCinema.HandleCustomers() ? 'YES' : 'NO'
}

function Cinema (customers) {
  let theRegister = []

  function HandleCustomers () {
    const result = customers.reduce((accumulator, bill) => {
      if (accumulator === false) {
        return false
      }

      const customerHandled = handleCustomer(theRegister, bill)

      return customerHandled
    }, true)

    return result
  }

  return { HandleCustomers }
}

function handleCustomer (register, bill) {
  register.push(bill)
  register.sort((a, b) => a - b)

  const changeNeeded = bill - 25
  const madeChange = makeChange(register, changeNeeded)

  return madeChange
}

function makeChange (register, changeNeeded) {
  let billsToRemove = []
  let totalChange = register.reduceRight((totalChange, currentBill, index) => {
    if (changeNeeded - totalChange >= currentBill) {
      billsToRemove.push(index)
      totalChange += currentBill
    }

    return totalChange
  }, 0)

  if (totalChange === changeNeeded) {
    billsToRemove.map((billIndex) => { register.splice(billIndex, 1) })
    return true
  }

  return false
}
