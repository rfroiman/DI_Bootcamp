class Book:
    def __init__(self, title, author=None):
        self.title = title
        self.author = author
        self.lent_to = None

    def get_info(self):
        status = f"Lent to: {self.lent_to}" if self.lent_to else "Available"
        print(f"Title: {self.title}")
        print(f"Author: {self.author if self.author else 'Unknown'}")
        print(status)
        print()

    def lend(self, person):
        if self.lent_to is None:
            self.lent_to = person
        else:
            print(f"{self.title} is already lent to {self.lent_to}")

    def get_back(self):
        self.lent_to = None


# Create a library
library = [
    Book("1984", "George Orwell"),
    Book("The Hobbit", "J.R.R. Tolkien"),
    Book("Harry Potter", "J.K. Rowling"),
    Book("The Little Prince"),
    Book("Don Quixote", "Miguel de Cervantes")
]

# Show all books
print("LIBRARY")
for book in library:
    book.get_info()


# Lend 2 books
library[0].lend("John")
library[2].lend("John")


# Show library again
print("AFTER LENDING 2 BOOKS")
for book in library:
    book.get_info()


# Get 1 book back
library[0].get_back()


# Show library one more time
print("AFTER RETURNING 1 BOOK")
for book in library:
    book.get_info()


