import chalk from 'chalk'


const student = {}
student.firstName = 'Man'
student.lastName = 'Bro'
student.age = 33
student.courses = ['Math', 'History', 'Programming']

console.log(chalk.magentaBright('Student\'s data:'), student)