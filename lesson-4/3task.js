import chalk from 'chalk'

// 3. Numbers & boolean

let age  = Math.floor(Math.random() * (60 - 10)) + 10
let isAdult = age >= 35

console.log(
  chalk.blue('Is person adult with age ') +
  chalk.yellow(age) +
  chalk.blue('? - ') +
  (isAdult ? chalk.green('true') : chalk.red('false'))
)