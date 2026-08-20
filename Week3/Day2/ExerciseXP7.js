// Exercise 7

const allBooks = [

    {
        title: "Harry Potter",
        author: "J.K. Rowling",
        image: "https://covers.openlibrary.org/b/id/10521270-M.jpg",
        alreadyRead: true
    },

    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        image: "https://covers.openlibrary.org/b/id/6979861-M.jpg",
        alreadyRead: false
    }

];


let section = document.querySelector(".listBooks");


for (let book of allBooks) {

    let bookDiv = document.createElement("div");

    let bookInfo = document.createElement("p");

    bookInfo.textContent = book.title + " written by " + book.author;

    let bookImage = document.createElement("img");

    bookImage.src = book.image;
    bookImage.style.width = "100px";


    if (book.alreadyRead === true) {
        bookInfo.style.color = "red";
    }


    bookDiv.appendChild(bookInfo);
    bookDiv.appendChild(bookImage);

    section.appendChild(bookDiv);
}