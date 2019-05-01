const checkWord = require('./boggle')
const Test = require('../framework/Test')

var testBoard = [
  ['E', 'A', 'R', 'A'],
  ['N', 'L', 'E', 'C'],
  ['I', 'A', 'I', 'S'],
  ['B', 'Y', 'O', 'R']
]

Test.describe('checking boggle words', () => {
  Test.itAssertEquals(checkWord(testBoard, 'C'), true, 'Single letters are allowed')
  Test.itAssertEquals(checkWord(testBoard, 'EAR'), true, 'All letters are adjacent')
  Test.itAssertEquals(checkWord(testBoard, 'EARS'), false, 'Cannot use letters which are not adjacent')
  Test.itAssertEquals(checkWord(testBoard, 'BAILER'), true)
  Test.itAssertEquals(checkWord(testBoard, 'RSCAREIOYBAILNEA'), true, 'Must be able to check indefinite word lengths going in all directions')
  Test.itAssertEquals(checkWord(testBoard, 'CEREAL'), false, "Valid guesses can't overlap themselves")
  Test.itAssertEquals(checkWord(testBoard, 'ROBES'), false, 'Valid guesses have to be adjacent')
  Test.itAssertEquals(checkWord(testBoard, 'BAKER'), false, 'All the letters have to be in the board')
  Test.itAssertEquals(checkWord(testBoard, 'CARS'), false, 'Valid guesses cannot wrap around the edges of the board')
})
