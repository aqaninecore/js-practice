import chalk from 'chalk'

const handleNum = (num, evenCallback, oddCallback) => {
	if (num % 2 === 0) {
		evenCallback()
	} else {
		oddCallback()
	}
}

const handleEven = () => {
	console.log(chalk.magentaBright('number is even'))
}

const handleOdd = () => {
	console.log(chalk.cyanBright('number is odd'))
}

handleNum(15, handleEven, handleOdd)
handleNum(20, handleEven, handleOdd)
