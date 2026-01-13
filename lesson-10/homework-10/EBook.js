import { Book } from './Book.js'
import { book1, book2, book3 } from './Book.js'

export class EBook extends Book {
    constructor(first, second, third, fourth) {
        if (first instanceof Book) {
            // called as (bookInstance, fileFormat)
            const book = first
            const fileFormat = second
            super(book.name, book.author, book.year)
            this.fileFormat = fileFormat
        } else {
            // called as (name, author, year, fileFormat)
            const name = first
            const author = second
            const year = third
            const fileFormat = fourth
            super(name, author, year)
            this.fileFormat = fileFormat
        }
    }

    ////////GETTERS/////////

    get fileFormat() {
        return this._fileFormat
    }

    ////////SETTERS (VALIDATION)/////////

    set fileFormat(fileFormat) {
        if (typeof fileFormat !== 'string' || fileFormat.trim() === '') {
            throw new Error('File format must be a non-empty string.')
        }
        this._fileFormat = fileFormat
    }

    printInfo() {
        //super.printInfo()
        console.log(`EBook: ${this.name}, Author: ${this.author}, Year: ${this.year}, Format: ${this.fileFormat}`)
    }

    static fromBook(book, fileFormat) {
        return new EBook(book, fileFormat)
    }
}


export const eBook1 = new EBook(book1, 'PDF')
export const eBook2 = new EBook(book2, 'TXT')
export const eBook3 = new EBook(book3, 'DOCX')

eBook1.printInfo()
eBook2.printInfo()
eBook3.printInfo()