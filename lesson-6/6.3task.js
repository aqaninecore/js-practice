import chalk from 'chalk'

let checkOrder = (ordered, available) => {
	if (ordered > available) {
		console.log(
			chalk.red.bold('Your order is too large, we don’t have enough goods.'),
		)
	}
	if (ordered <= 0) {
		console.log(chalk.yellow.bgCyan('Your order is empty'))
	} else {
		console.log(chalk.green.italic.bold('Your order is accepted'))
	}
}

checkOrder(100, 99)
checkOrder(1001, 1001)
checkOrder(0, 1)
checkOrder(-1, 0)
