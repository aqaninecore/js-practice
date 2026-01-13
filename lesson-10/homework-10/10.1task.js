import { Book } from './Book.js'
import { EBook } from './EBook.js'

// ===== Book instances =====
const book1 = new Book('Kobzar', 'Taras Shevchenko', 1840)
const book2 = new Book('Testing.com', 'Roman Savin', 2007)

// ===== EBook instance =====
const ebook1 = new EBook('Clean Code', 'Robert C. Martin', 2008, 'PDF')

// printInfo calls
book1.printInfo()
book2.printInfo()
ebook1.printInfo()

// ===== Using setters =====
book1.year = 1839
ebook1.fileFormat = 'EPUB'

// ===== Static method: oldest book =====
const books = [book1, book2, ebook1]

const oldestBook = Book.getOldestBook(books)
console.log('Oldest book:')
oldestBook.printInfo()

// ===== Static method: create EBook from Book =====
const ebookFromBook = EBook.fromBook(book2, 'MOBI')
ebookFromBook.printInfo()