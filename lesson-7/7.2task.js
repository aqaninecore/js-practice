import chalk from 'chalk'

const handleNum = (num) => {
	console.log(chalk.yellowBright(`Handling number: ${num}`))

	if (num <= 0) {
		return
	}
	handleNum(num - 1)
}
handleNum(5)
