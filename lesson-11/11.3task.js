async function fetchTodo() {
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/todos/2')
		const todo = await response.json()
		return todo
	} catch (error) {
		console.log('Error fetching todo:', error)
	}
}

async function fetchUser() {
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/users/2')
		const user = await response.json()
		return user
	} catch (error) {
		console.log('Error fetching user:', error)
	}
}

async function fetchAll() {
	const allPromise = Promise.all([fetchTodo(), fetchUser()])
	const results = await allPromise

	const todo = results[0]
	const user = results[1]

	console.log('Promise.all results:')
	console.log('Todo:', todo)
	console.log('User:', user)
}

async function fetchRace() {
	const racePromise = Promise.race([fetchTodo(), fetchUser()])
	const result = await racePromise

	console.log('Promise.race result:')
	console.log(result)
}

fetchAll()
fetchRace()
