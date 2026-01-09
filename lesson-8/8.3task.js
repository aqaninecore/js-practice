const numbers = [10, 20, 30, 40, 50]

const result = numbers.reduce((previousValue, currentValue) => {
    return previousValue + currentValue
})

console.log(result)