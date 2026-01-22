import chalk from 'chalk'

// 2. Concatenation & Interpolation

let name1 = 'Edi'
let name2 = 'Alexis'
console.log('Hello dear ' + name1 + ' and ' + name2 + '!')
console.log(chalk.green(`Hello dear ${name1} and ${name2}!`))
