// Read the source file: users.txt
const { readFileSync } = require("fs") // @ts-nocheck
const fileContents = readFileSync("users.txt", "utf-8")
const lines = fileContents.split(/\r?\n/)

interface User {
  usr?: string
  eme?: string
  psw?: string
  age?: string
  loc?: string
  fll?: string
}

// Start data
let users: Array<User> = []
let correct: Array<User> = []
let incorrect: Array<User> = []
let userPointer: number = 0

// Loop into the lines: then split, parse and put the well structured data into the new array (users)
lines.forEach((line: string) => {
  if (line == "") {
    userPointer++
  } else {
    let pairs = line.split(" ") // ['usr:@midudev', 'eme:mi@gmail.com']

    let userObject: any = {}
    pairs.forEach((pair) => {
      let parts: Array<string> = pair.split(":")
      userObject[parts[0]] = parts[1] || ""
    })
    users[userPointer] = { ...users[userPointer], ...userObject }
  }
})

// Loop users array to check if they are correct and push them to correct/incorrect arrays.
// "age" is sometimes defined but empty.
users.forEach((user: User) => {
  if (
    user.usr &&
    user.eme &&
    user.psw &&
    (user.age || user.age == "") &&
    user.loc &&
    user.fll
  ) {
    correct.push(user)
  } else {
    incorrect.push(user)
  }
})

// Get the number of correct and incorrect users
console.log("correct", correct.length)
console.log("incorrect", incorrect.length)

// Get last valid user name
let username: string = correct[correct.length - 1].usr || ""

let solution = `Solution: ${correct.length}${username}`
console.log(solution)

export {}
