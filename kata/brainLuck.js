module.exports = function brainLuck (code, input) {
  let circuitBreaker = 10000

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

  let tokens = code.split('')
  let instructions = tokens.reduce((accumulator, value) => {
    accumulator.push(tokenMap[value])
    return accumulator
  }, [])

  let state = makeState(input, instructions)
  console.log(state)
  while (state.instructionPointer < instructions.length) {
    let jump = state.getCurrentInstruction()(state)
    if (!jump) {
      state.instructionPointer++
    }

    circuitBreaker--
    if (circuitBreaker === 0) {
      break
    }
  }
  console.log(state)
  return state.output.reduce((accumulator, value) => {
    accumulator += String.fromCharCode(value)
    return accumulator
  }, '')
}

function makeState (input, instructions) {
  return {
    dataPointer: 0,
    data: [],
    output: [],
    input: input.split('').map(value => value.charCodeAt(0)).reverse(),
    instructionPointer: 0,
    instructions,
    getCurrentInstruction: function () { return this.instructions[this.instructionPointer] },
    getCurrentData: function () { return this.data[this.dataPointer] },
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
    findClosingJump(state)

    return true
  }
}

function jumpBackIfNonZero (state) {
  if (state.getCurrentData() !== 0) {
    findOpeningJump(state)

    return true
  }
}

function output (state) {
  state.output.push(state.getCurrentData())
}

function findClosingJump (state) {
  while (state.getCurrentInstruction() !== jumpBackIfNonZero) {
    state.instructionPointer++
    if (state.getCurrentInstruction() === jumpIfZero) {
      findClosingJump(state)
      state.instructionPointer++
    }
  }
}

function findOpeningJump (state) {
  while (state.getCurrentInstruction() !== jumpIfZero) {
    state.instructionPointer--
    if (state.getCurrentInstruction() === jumpBackIfNonZero) {
      findOpeningJump(state)
      state.instructionPointer--
    }
  }
}

function incrementDataPointer (state) {
  state.dataPointer++
}

function decrementDataPointer (state) {
  state.dataPointer--
}
