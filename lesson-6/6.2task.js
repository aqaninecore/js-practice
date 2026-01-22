import chalk from 'chalk'

let isAdult = (age) => {
	return age >= 18
}

console.log(isAdult(18), '- Enter accessed')
console.log(isAdult(17), '- Enter denied')

// CONCISE ARROW FUNCTION EXPRESSION + TEMPLATE STRING

let isEnough = (enough) => enough >= 18

console.log(chalk.italic(chalk.green(`${isEnough(18)} - Enter accessed`)))
console.log(chalk.italic(chalk.red(`${isEnough(17)} - Enter denied`)))

////////////////////////  OR  /////////////////////////////

function isBig(age) {
	if (age >= 18) {
		return true
	} else {
		return false
	}
}

console.log(isBig(18)) // true
console.log(isBig(17)) // false
