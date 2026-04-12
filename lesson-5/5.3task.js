import chalk from 'chalk'

// CALCULATOR


// FOR approach

console.log(chalk.cyanBright('FOR approach'))
const digit = 101;

for (let i = 1; i <= 11; i++) {
    console.log(`${digit} x ${i} = ${digit * i}`);
}


// WHILE approach

console.log(chalk.redBright('WHILE approach'))
const number = -15

let j = 2.5
while (j <= 10.5) {
    console.log(`${number} x ${j} = ${number * j}`)
    j++
}