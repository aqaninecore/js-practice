function fetchTodo() {
	return fetch('https://jsonplaceholder.typicode.com/todos/2')
		.then((response) => response.json())
		.catch((error) => console.log('Error fetching todo:', error))
}

function fetchUser() {
	return fetch('https://jsonplaceholder.typicode.com/users/2')
		.then((response) => response.json())
		.catch((error) => console.log('Error fetching user:', error))
}

const allPromise = Promise.all([fetchTodo(), fetchUser()])

allPromise.then((results) => {
	const todo = results[0]
	const user = results[1]

	console.log('Promise.all results:')
	console.log('Todo:', todo)
	console.log('User:', user)
})

const racePromise = Promise.race([fetchTodo(), fetchUser()])

racePromise.then((result) => {
	console.log('Promise.race result:')
	console.log(result)
})

// const allPromise = Promise.all([fetchTodo(), fetchUser()])

// allPromise.then(([todo, user]) => {
//     console.log('Todo:', todo)
//     console.log('User:', user)
// })

// allPromise.catch(error => {
//     console.log('Error in one of the promises:', error)
// })

// const racePromise = Promise.race([fetchTodo(), fetchUser()])

// racePromise.then(firstResult => {
//     console.log('First completed fetch result:', firstResult)
// })

// racePromise.catch(error => {
//     console.log('Error in race promise:', error)
// })
