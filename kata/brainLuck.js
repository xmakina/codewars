module.exports = function brainLuck (code, input) {
  let circuitBreaker = 10000000

  let tokenMap = {
    ',': storeInput,
    '+': incrementByte,
    '[': jumpIfZero,
    ']': jumpBackIfNonZero,
    '-': decrementByte,
    '.': output,
    '>': incrementDataPointer,
    '<': decrementDataPointer
  }

  let tempPairs = []
  let jumpPairs = []
  let tokens = code.split('')
  let instructions = tokens.reduce((accumulator, value, index) => {
    let instruction = tokenMap[value]
    if (instruction === jumpIfZero) {
      tempPairs.push(accumulator.length)
    }
    if (instruction === jumpBackIfNonZero) {
      jumpPairs.push({ start: tempPairs.pop(), end: accumulator.length })
    }

    accumulator.push(instruction)
    return accumulator
  }, [])

  let state = makeState(input, instructions, jumpPairs)
  console.log(state.input, input)
  while (state.instructionPointer < instructions.length) {
    state.getCurrentInstruction()(state)
    state.instructionPointer++

    circuitBreaker--
    if (circuitBreaker === 0) {
      break
    }
  }

  return state.output.reduce((accumulator, value) => {
    accumulator += String.fromCharCode(value)
    return accumulator
  }, '')
}

function makeState (input, instructions, jumpPairs) {
  return {
    dataPointer: 0,
    data: [],
    output: [],
    input: input.split('').map(value => value.charCodeAt(0)).reverse(),
    instructionPointer: 0,
    instructions,
    jumpPairs,
    getCurrentInstruction: function () { return this.instructions[this.instructionPointer] },
    getCurrentData: function () { return this.data[this.dataPointer] || 0 },
    updateData: function (value) { this.data[this.dataPointer] = value },
    incrementData: function () {
      if (this.data[this.dataPointer] === undefined) {
        this.data[this.dataPointer] = 0
      }
      this.data[this.dataPointer]++
      if (this.getCurrentData() > 255) {
        this.data[this.dataPointer] = 0
      }
    },
    decrementData: function () {
      if (this.data[this.dataPointer] === undefined) {
        this.data[this.dataPointer] = 0
      }
      this.data[this.dataPointer]--
      if (this.getCurrentData() < 0) {
        this.data[this.dataPointer] = 255
      }
    }
  }
}

function storeInput (state) {
  state.updateData(state.input.pop())
}

function incrementByte (state) {
  state.incrementData()
}

function decrementByte (state) {
  state.decrementData()
}

function jumpIfZero (state) {
  if (state.getCurrentData() === 0) {
    state.instructionPointer = state.jumpPairs.find(p => p.start === state.instructionPointer).end
  }
}

function jumpBackIfNonZero (state) {
  if (state.getCurrentData() !== 0) {
    state.instructionPointer = state.jumpPairs.find(p => p.end === state.instructionPointer).start
  }
}

function output (state) {
  state.output.push(state.getCurrentData())
}

function incrementDataPointer (state) {
  state.dataPointer++
}

function decrementDataPointer (state) {
  state.dataPointer--
}
