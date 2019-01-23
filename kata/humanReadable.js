module.exports = humanReadable

function humanReadable (secondsInput) {
  let hours = Math.floor(secondsInput / 60 / 60)
  let minutes = Math.floor(secondsInput / 60 % 60)
  let seconds = Math.floor(secondsInput % 60)

  return `${padLeft(hours)}:${padLeft(minutes)}:${padLeft(seconds)}`
}

function padLeft (value) {
  if (value < 10) {
    return '0' + value
  }

  return `${value}`
}
