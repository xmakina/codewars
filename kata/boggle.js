module.exports = checkWord

function checkWord (board, word) {
  let letters = word.split('')
  let firstLetterPositions = findLetterPositions(board, letters[0])

  return firstLetterPositions.reduce((found, position) => {
    if (found) {
      return found
    }

    return findPath(board, position, letters)
  }, false)
}

function findLetterPositions (board, target) {
  let results = []

  board.map((row, y) => row.map((letter, x) => {
    if (target === letter) {
      results.push(new LetterPosition(x, y))
    }
  }))

  return results
}

function findPath (board, origin, sequence, index = 1) {
  if (index === sequence.length) {
    return true
  }

  let noBacktrackBoard = removeOrigin(board, origin)

  let target = sequence[index]
  let candidates = findAdjacents(noBacktrackBoard, origin, target)
  if (candidates.length === 0) {
    return false
  }

  return candidates.reduce((pathFound, candidate) => {
    if (pathFound) {
      return pathFound
    }

    return findPath(noBacktrackBoard, candidate, sequence, index + 1)
  }, false)
}

function removeOrigin (board, origin) {
  let cloneBoard = JSON.parse(JSON.stringify(board))
  cloneBoard[origin.y][origin.x] = ''
  return cloneBoard
}

function findAdjacents (board, origin, target) {
  let allInstancesOfTarget = findLetterPositions(board, target)
  return allInstancesOfTarget.filter(isAdjacent(origin))
}

function isAdjacent (origin) {
  return function (potentialTarget) {
    if (potentialTarget.y - origin.y < -1 || potentialTarget.y - origin.y > 1) {
      return false
    }

    if (potentialTarget.x - origin.x < -1 || potentialTarget.x - origin.x > 1) {
      return false
    }

    return true
  }
}

class LetterPosition {
  constructor (x, y) {
    this.x = x
    this.y = y
  }
}
