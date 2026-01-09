const users = [
    { name: 'Alice', email: 'test@gmail.com', age: 25 },
    { name: 'Bob', email: 'test1@gmail.com', age: 26 },
    { name: 'Charlie', email: 'test2@gmail.com', age: 99 }
]

for (const { name, email, age } of users) {
    console.log('Name:', name)
    console.log('Email:', email)
    console.log('Age:', age)
    console.log('---')
}