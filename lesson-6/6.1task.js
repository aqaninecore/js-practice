import chalk from 'chalk'

// FUNCTION DECLARATION

function rectangleArea(width, height) {
	const value = width * height
	return value
}

const area = rectangleArea(7, 9)
console.log(chalk.bgBlack(chalk.yellow(area)))

//////////////////////////////////////////////////////////////
// FUNCTION EXPRESSION

const rectArea = function (a, b) {
	const multiply = a * b
	return multiply
}

const area1 = rectArea(7, 8)
console.log(chalk.bgBlack(chalk.red(area1)))

//////////////////////////////////////////////////////////////
// ARROW FUNCTION EXPRESSION
const reArea = (i, j) => {
	return i * j
}

const area2 = reArea(8, 9)
console.log(chalk.bgBlack(chalk.cyan(area2)))
