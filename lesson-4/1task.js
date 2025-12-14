import chalk from 'chalk'

// 1. Data types in JS and a variables declaration for primitive types

// ////////////////////////////////////////////////////// String

let user = 'User1 Tester'
let welcome = 'Hello'
console.log(chalk.gray(welcome , user))
welcome = 'Hi'
console.log(`${welcome}, ${user}!`)
console.log(chalk.yellow(user[3], welcome[1]))
console.log(chalk.redBright(user.length))
console.log(chalk.bgBlue(typeof user))


// ////////////////////////////////////////////////////// Number

// Math operations
const x = 125.5
const y = 74.3
const sum = x + y
console.log(sum)

// Rounding
const digit = 4456.687984651
const roundedNumber = Math.round(digit)
console.log(roundedNumber)

// toFixed
const roundedString = digit.toFixed(3)
console.log(roundedString)

// Random
const randomNumber = Math.floor(Math.random() * 101) // 0-100
console.log(randomNumber)

// Round to smallest nearest integer >= than given number
let j = 152.01
let roundedCeil = Math.ceil(j)
console.log(roundedCeil) // -> 153

// Round to biggest nearest integer >= than given number
let value = 129.12984562
let roundedFloor = Math.floor(value)
console.log(roundedFloor) // -> 129

console.log((Math.PI).toFixed(5)) // lib Math
console.log(Math.pow(9, 10)) // lib Math (raising to a power)
console.log(chalk.bgBlue(typeof value))


// ////////////////////////////////////////////////////// Boolean

// Const
const isActive = true
console.log(isActive)
console.log(chalk.bgBlue(typeof isActive))

// Let
let isOnline = false
console.log(isOnline? 'Online' : 'Offline & sleeping')

isOnline = true
console.log(isOnline? 'Online & watching a movie' : 'Offline')
console.log(chalk.bgBlue(typeof isOnline))

// ////////////////////////////////////////////////////// Null

let userAge = null
console.log(userAge)
console.log(chalk.bgBlue(typeof userAge)) // bug in JS - shows object (info from AI)

let sessionId = { id: 3, title: 'Learn null' };
console.log(sessionId.title); // -> 'Learn null'

let newSessionId = null;
console.log(newSessionId); // -> null


// ////////////////////////////////////////////////////// Undefined

let userScore;
console.log(userScore); // -> undefined
console.log(chalk.bgBlue(typeof userScore)); // -> undefined

userScore = 55;
console.log(userScore); // -> 55