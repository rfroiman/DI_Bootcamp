const express = require("express");

const app = express();
const PORT = 5000;

app.use(express.json());

let books = [
    {
        id: 1,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        publishedYear: 1937
    },
    {
        id: 2,
        title: "1984",
        author: "George Orwell",
        publishedYear: 1949
    },
    {
        id: 3,
        title: "The Little Prince",
        author: "Antoine de Saint-Exupéry",
        publishedYear: 1943
    }
];

// GET - Read all books
app.get("/api/books", (req, res) => {
    res.json(books);
});

// GET - Read one book
app.get("/api/books/:bookId", (req, res) => {
    const bookId = Number(req.params.bookId);

    const book = books.find(book => book.id === bookId);

    if (!book) {
        return res.status(404).json({
            message: "Book not found"
        });
    }

    res.status(200).json(book);
});

// POST - Create a new book
app.post("/api/books", (req, res) => {
    const newBook = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author,
        publishedYear: req.body.publishedYear
    };

    books.push(newBook);

    res.status(201).json(newBook);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});