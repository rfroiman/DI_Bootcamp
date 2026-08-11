class Genre:
    def __init__(self, genre_name, list_of_books):
        self.genre_name = genre_name
        self.list_of_books = list_of_books

    def get_books(self):
        print(f"Genre name: {self.genre_name}")
        print(f"List of Books: {self.list_of_books}")

    def show_info(self):
        print (f"Genre name: {self.genre_name} and {self.list_of_books}")
        
    def get_name(self):
        print(f"Genre name: {self.genre_name}") 

library = [
    Genre ("Fiction", ["Fiction1, Fiction2, Fiction3"]),
    Genre ("Drama", ["Drama1, Drama2, Drama3"]),
    Genre ("Terror", ["Terror1", "Terror2", "Terror3", "Terror4"])
]

print("LIBRARY")
for book in library:
    book.get_books()
    book.show_info()
    book.get_name()
