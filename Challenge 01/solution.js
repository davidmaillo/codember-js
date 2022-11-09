// Read the source file: users.txt
const { readFileSync } = require("fs")
const fileContents = readFileSync("users.txt", "utf-8")
const lines = fileContents.split(/\r?\n/)

// Start data
let users = []
let correct = []
let incorrect = []
let userPointer = 0

// Loop into the lines: then split, parse and put the well structured data into the new array (users)
lines.forEach((line) => {
  if (line == "") {
    userPointer++
  } else {
    let pairs = line.split(" ") // ['usr:@midudev', 'eme:mi@gmail.com']

    let userObject = {}
    pairs.forEach((pair) => {
      let parts = pair.split(":")
      userObject[parts[0]] = parts[1]
    })
    users[userPointer] = { ...users[userPointer], ...userObject }
  }
})

// Loop users array to check if they are correct and push them to correct/incorrect arrays.
// "age" is sometimes defined but empty.
users.forEach((user) => {
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
let username = correct.at(-1).usr

let solution = `Solution: ${correct.length}${username}`
console.log(solution)
