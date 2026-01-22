import chalk from 'chalk'

export class Book {
	constructor(name, author, year) {
		this.name = name
		this.author = author
		this.year = year
	}

	///////////////GETTERS///////////

	get name() {
		return this._name
	}

	get author() {
		return this._author
	}

	get year() {
		return this._year
	}

	///////////////SETTERS (VALIDATION)///////////

	set name(name) {
		if (typeof name !== 'string' || name.length === 0) {
			throw new Error('Name must be a non-empty string.')
		}
		this._name = name
	}

	set author(author) {
		if (typeof author !== 'string' || author.length === 0) {
			throw new Error('Author must be a non-empty string.')
		}
		this._author = author
	}

	set year(year) {
		if (typeof year !== 'number' || !Number.isFinite(year) || year <= 0) {
			throw new Error('Year must be a positive finite number.')
		}
		this._year = year
	}

	printInfo() {
		console.log(
			chalk.green(
				`Book: ${this.name}, Author: ${this.author}, Year: ${this.year}`,
			),
		)
	}

	static getOldestBook(books) {
		if (!Array.isArray(books) || books.length === 0) {
			return null
		}

		return books.reduce((oldest, current) => {
			return current.year < oldest.year ? current : oldest
		})
	}
}

export const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925)
export const book2 = new Book('To Kill a Mockingbird', 'Harper Lee', 1960)
export const book3 = new Book('1984', 'George Orwell', 1949)

// export default Book

book1.printInfo()
book2.printInfo()
book3.printInfo()
