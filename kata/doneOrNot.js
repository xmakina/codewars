module.exports = doneOrNot

function doneOrNot (rows) {
  let columns = transpose(rows)
  let regions = regionise(rows, columns)
  if (Math.min(columns) === 0 || Math.min(rows) === 0 || Math.min(regions) === 0) {
    return 'Try again!'
  }

  return rows.reduce(isValid, true) && columns.reduce(isValid, true) && regions.reduce(isValid, true) ? 'Finished!' : 'Try again!'
}

function transpose (rows) {
  let columns = []

  for (let columnIndex = 0; columnIndex < rows.length; columnIndex++) {
    let column = []
    for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
      column.push(rows[rowIndex][columnIndex])
    }
    columns.push(column)
  }

  return columns
}

function regionise (rows) {
  let regions = []

  for (let currentRegion = 0; currentRegion < 9; currentRegion++) {
    let region = []
    let offset = (currentRegion % 3) * 3

    for (let columnIndex = 0; columnIndex < 3; columnIndex++) {
      let targetColumn = columnIndex + offset
      for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
        let targetRow = rowIndex + offset
        region.push(rows[targetRow][targetColumn])
      }
    }

    regions.push(region)
  }

  return regions
}

function isValid (accumulator, row) {
  if (!accumulator) {
    return false
  }

  let check = Array(9).fill(false)
  row.map((value) => {
    check[value - 1] = true
  })

  return accumulator && check.reduce((acc, value) => {
    return acc && value
  })
}
