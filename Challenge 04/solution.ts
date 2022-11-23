const getValidPasswords = () => {
  const START = 11095
  const END = 98123
  let validPasswords: Array<number> = []

  for (let i = START; i <= END; i++) {
    let digits: Array<string> = String(i).split("")
    let fivesCount: number = 0

    digits.forEach((d) => {
      if (d === "5") fivesCount++
    })

    if (
      fivesCount > 1 &&
      digits[4] >= digits[3] &&
      digits[3] >= digits[2] &&
      digits[2] >= digits[1] &&
      digits[1] >= digits[0]
    ) {
      validPasswords.push(i)
    }
  }

  return validPasswords
}

let validPasswords: Array<number> = getValidPasswords()
console.log({
  validPasswords,
  total: validPasswords.length,
  index55: validPasswords[55],
  solution: `submit ${validPasswords.length}-${validPasswords[55]}`,
})
