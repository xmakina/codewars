module.exports = function deleteNth (motives, limit) {
  const result = []

  motives.map((motive) => {
    let occurences = result.filter((value) => motive === value).length
    if (occurences < limit) {
      result.push(motive)
    }
  })

  return result
}
