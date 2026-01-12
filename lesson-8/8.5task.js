const firstArray = [1, 2, 3, 4, 5, -9, -7, -5, -3, -1]

const secondArray = [2, 3, 4, 5, 6, -8, -6, -4, -2, 0]

const result = firstArray.concat(secondArray).filter((num, index, array) => {
    return array.indexOf(num) === index
})

console.log(result)