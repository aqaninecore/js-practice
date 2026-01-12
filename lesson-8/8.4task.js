const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const result = []
numbers.forEach(function (number) {
    if (number % 2 === 0) {
        result.push(number)
    }
})

console.log(result)