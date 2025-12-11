// for (let i = 0; i < 100; i++) {
//     console.log('Iteration number: ' + i)
// }


// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }


// for (let i= -7; i <= 15; i++) {
//     if (i % 2 === 0) {
//         console.log(i)
//     }
// }


// for (let i = 0; i < 11; i+=5) {
//     console.log(i)
// }


// for (let i = 47; i > 10; i--) {
//     console.log(i)
// }


// for (let i = 0; i <= 10; i++) {
//     if (i === 5) {
//         break
//     }
//     console.log(i)
// }



// for (let i = 0; i <= 10; i++) {
//     if (i === 3 || i === 5) {
//         continue
//     }
//     console.log(i)
// }


// for (let a = 0, b = 0; a <10 && b < 10; a++, b+=2) {
//     console.log('a: ${a}, b: ${b}')
// }

// let i = 0
// while (i < 10) {
//     console.log(i)
//     i++
// }


// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }

// Almost dead approach
// let i = 16
// do {
//     console.log(i)
//     i++
// } while (i < 10)


// let userInput = 'Test string'
// let vowelCount = 0

// for (let i = 0; i < userInput.length; i++) {
//     console.log(userInput[i])
// }


// let userInput = 'Test string'
// let vowelCount = 5

// for (let i = 0; i < userInput.length; i++) {
//     let currentChar = userInput[i]

//     if (currentChar === 'a' || currentChar === 'e' || currentChar === 'o' || currentChar === 'u' || currentChar === 'i') {
//         vowelCount++
//         console.log('Found vowel. Index ${i}, character: ${currentChar}')
//     }
// }

// console.log('Total vowels: ${vowelCount}')


// let userInput = 'Test string'
// const vowels = "aeuoiAEUOI"

// let vowelCount = 0

// for (let i = 0; i < userInput.length; i++) {
//     let currentChar = userInput[i]

//     if (vowels.includes(currentChar)) {
//         vowelCount++
//         console.log(`Found vowel. Index ${i}, character: ${currentChar}`)
//     }
// }

// console.log(`Total vowels: ${vowelCount}`)


// Passenger should have enough founds on bank account
// Passenger should be older than 18
// Passenger should not have more than 20 KG of baggage

// let money = 1000
// let isPassengerAdult = true
// let baggageWeight = 10

// let ticketPrice = 500
// let allowedBaggageWeight = 20

// if (money > ticketPrice && isPassengerAdult && baggageWeight < allowedBaggageWeight) {
//     console.log("You can board the plane")
// } else if (money < ticketPrice) {
//     console.log("You don't have enough money")
// } else if (!isPassengerAdult) {
//     console.log("You can not buy a ticket")
// } else if (baggageWeight > allowedBaggageWeight) {
//     console.log("You have too much baggage")
// }