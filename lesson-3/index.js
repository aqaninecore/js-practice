import chalk from 'chalk'

console.log(
	chalk.yellow(
		chalk.italic(
			chalk.bold(
				'Hi Mr. Teacher! There are below some test attempts with JS! Check it out',
			),
		),
	),
)

// variables
const dog = 'Corgi'
const happy = 'Happy'
const sad = 'Sad'
let age = 2
let dogFood = 'junk food'

console.log(dog + ' | ' + age + ' | ' + dogFood)
console.log('Dog breed is: ' + dog + '. And it likes ' + dogFood)

if ((dog) => 'Corgi') {
	console.log(chalk.magenta('Cutie'))
} else {
	console.log(chalk.gray('Wolf'))
}

let isCute = true
let isWolf = false

// check Boolean
console.log(typeof isCute)

console.log(chalk.green('If Corgi a Wolf? - ' + isWolf + '!'))
console.log(chalk.cyan('No! Corgi is Cutie - ' + isCute + '!'))
