import chalk from 'chalk'

// 4. Geometric calculations

// 4.1 -> Circle's radius
// Mike, provide your solution/advice about this approach.
// what is more valid and suitable in real coding practice?

// Approach 1
// let radius = 5
// let circleArea = Math.PI * Math.pow(radius, 2)
// let shortArea = circleArea.toFixed(3)
// console.log(shortArea)
// console.log(chalk.green(Math.floor(circleArea)))

// Approach 2
let radius = 5
let circleArea = (Math.PI * Math.pow(radius, 2)).toFixed(3)
console.log(chalk.green(`This is a rounded area of the circle: ${circleArea}`))

////////////////////////////////////////////////////////

// 4.2 -> Rectangle's radius
const length = 7.5
const width = 12.159
const rectangleArea = (length * width).toFixed(2)
console.log(chalk.blue(`This is a rounded area of the rectangle: ${rectangleArea}`))

////////////////////////////////////////////////////////

// 4.3 -> Cylinder's volume
const cylRadius = 15.5
const cylHeight = 32.3
const cylVolume = (Math.PI * Math.pow(cylRadius, 2) * cylHeight).toFixed(2)
console.log(chalk.cyanBright(`This is a rounded volume of the cylinder: ${cylVolume}`))