module.exports = cakes

function cakes (recipe, available) {
  let totals = {}
  for (const itemIndex in recipe) {
    let required = recipe[itemIndex]
    totals[itemIndex] = Math.floor((available[itemIndex] || 0) / required)
  }

  return Object.values(totals).reduce((accumulator, value) => {
    if (value < accumulator) {
      return value
    }

    return accumulator
  })
}
