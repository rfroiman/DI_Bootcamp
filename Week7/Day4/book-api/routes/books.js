const express = require("express");

const router = express.Router();

// Sample in-memory database for storing books
const books = [];

// Get all books
router.get("/", (req, res) => {
    res.json(books);
});

// Add a new book
router.post("/", (req, res) => {
    const newBook = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author
    };

    books.push(newBook);

    res.status(201).json(newBook);
});

// Update a book by ID
router.put("/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const book = books.find(book => book.id === id);

    if (!book) {
        return res.status(404).json({
            message: "Book not found"
        });
    }

    book.title = req.body.title;
    book.author = req.body.author;

    res.json(book);
});

// Delete a book by ID
router.delete("/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const index = books.findIndex(book => book.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Book not found"
        });
    }

    const deletedBook = books.splice(index, 1);

    res.json({
        message: "Book deleted",
        book: deletedBook[0]
    });
});

module.exports = router;