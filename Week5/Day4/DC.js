"use strict";
// ==========================================
// DAILY CHALLENGE - LIBRARY SYSTEM
// ==========================================
// ==========================================
// LIBRARY CLASS
// ==========================================
class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    getBookDetails(isbn) {
        return this.books.find(book => book.isbn === isbn);
    }
    getBooks() {
        return this.books;
    }
}
// ==========================================
// DIGITAL LIBRARY CLASS
// ==========================================
class DigitalLibrary extends Library {
    constructor(website) {
        super();
        this.website = website;
    }
    listBooks() {
        return this.getBooks().map(book => book.title);
    }
}
// ==========================================
// CREATE DIGITAL LIBRARY
// ==========================================
const digitalLibrary = new DigitalLibrary("www.mylibrary.com");
// ==========================================
// ADD BOOKS
// ==========================================
digitalLibrary.addBook({
    title: "1984",
    author: "George Orwell",
    isbn: "12345",
    publishedYear: 1949,
    genre: "Dystopian"
});
digitalLibrary.addBook({
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    isbn: "67890",
    publishedYear: 1937,
    genre: "Fantasy"
});
digitalLibrary.addBook({
    title: "Clean Code",
    author: "Robert C. Martin",
    isbn: "54321",
    publishedYear: 2008
});
// ==========================================
// BOOK DETAILS
// ==========================================
console.log(digitalLibrary.getBookDetails("12345"));
console.log(digitalLibrary.getBookDetails("67890"));
// ==========================================
// LIST ALL BOOK TITLES
// ==========================================
console.log(digitalLibrary.listBooks());
// ==========================================
// WEBSITE
// ==========================================
console.log(digitalLibrary.website);
