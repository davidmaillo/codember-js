const input =
  "11610497110107115 102111114 11210897121105110103 9911110010110998101114 11210810197115101 11510497114101"
const words = input.split(" ")
const solution = words.map((word) => ASCIItoString(word)).join(" ")
console.log("submit " + solution)

function ASCIItoString(word: string) {
  let pointer: number = 0
  let wordChars: string[] = []

  for (let i = 0; i <= word.length; i++) {
    if (i == pointer) {
      if (word[pointer] == "1") {
        wordChars.push(word.slice(pointer, pointer + 3))
        pointer = pointer + 3
      }
      if (word[pointer] == "9") {
        wordChars.push(word.slice(pointer, pointer + 2))
        pointer = pointer + 2
      }
    }
  }

  return wordChars
    .map((char: string) => {
      return String.fromCharCode(Number(char))
    })
    .join("")
}

export {}
