import chalk from 'chalk'


const divide = (numerator, denominator) => {
    if (denominator === 0) {
        throw new Error('Division by zero is not allowed')
        return null
    }
    if (typeof numerator !== 'number' || typeof denominator !== 'number') {
        throw new Error('Both arguments must be numbers')
    }

    return numerator / denominator
}

try {
    const result1 = divide(10, 2)
    console.log(chalk.greenBright(`Result: ${result1}`))

    const result2 = divide(5, 0)
    console.log(chalk.greenBright(`Result: ${result2}`))

} catch (error) {
    console.log(chalk.redBright(`Error: ${error.message}`))
}

try {
    const result3 = divide(8, 'a')
    console.log(chalk.greenBright(`Result: ${result3}`))
} catch (error) {
    console.log(chalk.redBright(`Error: ${error.message}`))
}

//////////////////////// OR ////////////////////////
const divider = (numerator, denominator) => {
    if (denominator === 0) {
        throw new Error('Division by zero is not allowed')
        return null
    }
    if (typeof numerator !== 'number' || typeof denominator !== 'number') {
        throw new Error('Both arguments must be numbers')
    }

    return numerator / denominator
}

const numbersToDivide = [
    [22, 11],
    [7, 2],
    [1, 0],
    ['q', 1],
    [1, 'w']
]

numbersToDivide.forEach(([numerator, denominator]) => {
    try {
        console.log(divide(numerator, denominator))
    } catch (error) {
        console.log(chalk.redBright(`Error: ${error.message}`))
    } finally {
        console.log(chalk.blueBright('Work is done'))
    }
})
