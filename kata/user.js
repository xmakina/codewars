module.exports = User

function User (rank = -8, progress = 0) {
  return {
    rank,
    progress,
    incProgress: function (level) {
      if (level > 8 || level < -8 || level === 0) {
        throw new Error()
      }

      let diff = getDifference(this, level)

      if (diff === 0) {
        raiseProgress(this, 3)
      } else if (diff === -1) {
        raiseProgress(this, 1)
      } else if (diff > 0) {
        raiseProgress(this, 10 * diff * diff)
      }
    }
  }

  function getDifference (user, level) {
    let diff = level - user.rank

    if (user.rank < 0 && level > 0) {
      diff--
    }

    if (user.rank > 0 && level < 0) {
      diff++
    }

    return diff
  }

  function raiseProgress (user, value) {
    user.progress += value
    while (user.progress >= 100) {
      user.progress -= 100
      user.rank++
      if (user.rank === 0) {
        user.rank++
      }
    }

    if (user.rank >= 8) {
      user.rank = 8
      user.progress = 0
    }
  }
}
