module.exports = parseMolecule

function parseMolecule (formula, factor = 1) {
  formula = formula.replace(/\(/g, '{').replace(/\[/g, '{').replace(/\)/g, '}').replace(/\]/g, '}')
  let regex = /\{.*\}/g
  let leftover = formula.split(regex)[0]

  let subComponents = getSubComponents(formula, regex)
  let component = parseMoleculeComponent(leftover, factor)

  return blendComponentWithSubcomponents(subComponents, component, factor)
}

function blendComponentWithSubcomponents (subComponents, component, factor) {
  return subComponents.reduce((accumulator, subComponent) => {
    for (let element in subComponent) {
      if (accumulator[element]) {
        accumulator[element] += subComponent[element] * factor
      } else {
        accumulator[element] = subComponent[element] * factor
      }
    }

    return accumulator
  }, component)
}

function getSubComponents (formula, regex) {
  let subComponents = []
  let subForumlaMatch = []
  while ((subForumlaMatch = regex.exec(formula)) !== null) {
    subComponents.push(buildSubComponent(subForumlaMatch))
  }

  return subComponents
}

function buildSubComponent (subForumlaMatch) {
  let subForumla = subForumlaMatch[0]
  let openBracketIndex = subForumla.indexOf('{')
  let closeBracketIndex = subForumla.lastIndexOf('}')

  let cleanedSubFormula = subForumla.substring(openBracketIndex + 1, closeBracketIndex)
  let factor = subForumlaMatch.input.substring(subForumlaMatch.index + subForumlaMatch[0].length, subForumlaMatch.index + subForumlaMatch[0].length + 1)

  if (isNaN(factor)) {
    factor = 1
  }

  return parseMolecule(cleanedSubFormula, factor)
}

function parseMoleculeComponent (formula, factor) {
  let regex = /[A-Z][a-z]?\d*|\(.*?\)\d+/g
  let formulaArray = []
  let component = []
  while ((component = regex.exec(formula)) !== null) {
    formulaArray.push(component[0])
  }

  return formulaArray.reduce((accumulator, value) => {
    let regex = /\d+|\D+/g
    let element = regex.exec(value)[0]
    let quantity = parseInt((regex.exec(value) || [1])[0]) * factor

    if (accumulator[element]) {
      accumulator[element] += quantity
    } else {
      accumulator[element] = quantity
    }

    return accumulator
  }, {})
}
