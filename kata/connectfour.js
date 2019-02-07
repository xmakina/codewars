module.exports = whoIsWinner
const ref = { 'A': 0, 'B': 1, 'C': 2, 'D': 3, 'E': 4, 'F': 5, 'G': 6 }

function whoIsWinner (piecesPositionList) {
  let grid = Array(6).fill(undefined)
  grid.map((column, index, source) => {
    source[index] = Array(7).fill(undefined)
  })

  let winner
  piecesPositionList.map((move) => { winner = drop(winner, grid, ...move.split('_')) })

  return findWinner(grid) || 'Draw'
}

function drop (winner, grid, column, colour) {
  if (winner) {
    return winner
  }

  let columnIndex = ref[column]
  let rowIndex = 0
  while (grid[rowIndex][columnIndex]) {
    rowIndex++
  }
  grid[rowIndex][columnIndex] = colour
  return findWinner(grid, rowIndex, columnIndex)
}

function findWinner (grid) {
  for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
    let row = grid[rowIndex]
    for (let columnIndex = 0; columnIndex < row.length; columnIndex++) {
      let winner = scan(grid, rowIndex, columnIndex)
      if (winner) {
        return winner
      }
    }
  }

  return undefined
}

function scan (grid, rowIndex, columnIndex) {
  if (columnIndex + 3 < grid[rowIndex].length) {
    if (grid[rowIndex][columnIndex] === grid[rowIndex][columnIndex + 1] &&
        grid[rowIndex][columnIndex] === grid[rowIndex][columnIndex + 2] &&
        grid[rowIndex][columnIndex] === grid[rowIndex][columnIndex + 3]) {
      return grid[rowIndex][columnIndex]
    }
  }
  if (rowIndex + 3 < grid.length) {
    if (grid[rowIndex][columnIndex] === grid[rowIndex + 1][columnIndex] &&
        grid[rowIndex][columnIndex] === grid[rowIndex + 2][columnIndex] &&
        grid[rowIndex][columnIndex] === grid[rowIndex + 3][columnIndex]) {
      return grid[rowIndex][columnIndex]
    }
  }
  if (rowIndex + 3 < grid.length && columnIndex + 3 < grid[rowIndex].length) {
    if (grid[rowIndex][columnIndex] === grid[rowIndex + 1][columnIndex + 1] &&
        grid[rowIndex][columnIndex] === grid[rowIndex + 2][columnIndex + 2] &&
        grid[rowIndex][columnIndex] === grid[rowIndex + 3][columnIndex + 3]) {
      return grid[rowIndex][columnIndex]
    }
  }
  if (rowIndex + 3 < grid.length && columnIndex - 3 < grid[rowIndex].length) {
    if (grid[rowIndex][columnIndex] === grid[rowIndex + 1][columnIndex - 1] &&
        grid[rowIndex][columnIndex] === grid[rowIndex + 2][columnIndex - 2] &&
        grid[rowIndex][columnIndex] === grid[rowIndex + 3][columnIndex - 3]) {
      return grid[rowIndex][columnIndex]
    }
  }
}
