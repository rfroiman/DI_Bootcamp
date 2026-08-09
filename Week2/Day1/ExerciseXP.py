# ============================================================
# EXERCISE 1 - CATS
# ============================================================

class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age


# Create three cat objects
cat1 = Cat("Mia", 5)
cat2 = Cat("Luna", 8)
cat3 = Cat("Simba", 3)


# Function to find the oldest cat
def find_oldest_cat(cat1, cat2, cat3):
    oldest = cat1

    if cat2.age > oldest.age:
        oldest = cat2

    if cat3.age > oldest.age:
        oldest = cat3

    return oldest


# Get the oldest cat
oldest_cat = find_oldest_cat(cat1, cat2, cat3)

print(f"The oldest cat is {oldest_cat.name}, and is {oldest_cat.age} years old.")


# ============================================================
# EXERCISE 2 - DOGS
# ============================================================

class Dog:
    def __init__(self, name, height):
        self.name = name
        self.height = height

    def bark(self):
        print(f"{self.name} goes woof!")

    def jump(self):
        print(f"{self.name} jumps {self.height * 2} cm high!")


# Create two dog objects
davids_dog = Dog("Rex", 50)
sarahs_dog = Dog("Buddy", 40)


# David's dog
print(davids_dog.name)
print(davids_dog.height)
davids_dog.bark()
davids_dog.jump()

print()

# Sarah's dog
print(sarahs_dog.name)
print(sarahs_dog.height)
sarahs_dog.bark()
sarahs_dog.jump()

print()

# Compare dog sizes
if davids_dog.height > sarahs_dog.height:
    print(f"{davids_dog.name} is taller than {sarahs_dog.name}.")

elif sarahs_dog.height > davids_dog.height:
    print(f"{sarahs_dog.name} is taller than {davids_dog.name}.")

else:
    print("Both dogs are the same height.")


# ============================================================
# EXERCISE 3 - SONG
# ============================================================

class Song:
    def __init__(self, lyrics):
        self.lyrics = lyrics

    def sing_me_a_song(self):
        for line in self.lyrics:
            print(line)


# Create Song object
stairway = Song([
    "There's a lady who's sure",
    "All that glitters is gold",
    "And she's buying a stairway to heaven"
])


# Sing the song
stairway.sing_me_a_song()


# ============================================================
# EXERCISE 4 - ZOO
# ============================================================

class Zoo:

    def __init__(self, zoo_name):
        self.name = zoo_name
        self.animals = []
        self.groups = {}

    def add_animal(self, *args):
        for animal in args:
            if animal not in self.animals:
                self.animals.append(animal)

    def get_animals(self):
        print(self.animals)

    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)

    def sort_animals(self):
        self.animals.sort()

        self.groups = {}

        for animal in self.animals:
            first_letter = animal[0].upper()

            if first_letter not in self.groups:
                self.groups[first_letter] = []

            self.groups[first_letter].append(animal)

    def get_groups(self):
        for letter, animals in self.groups.items():
            print(f"{letter}: {animals}")


# Create Zoo object
brooklyn_safari = Zoo("Brooklyn Safari")


# Add animals using *args
brooklyn_safari.add_animal(
    "Giraffe",
    "Bear",
    "Baboon",
    "Lion",
    "Zebra"
)


# Display animals
print()
print("Animals in the zoo:")
brooklyn_safari.get_animals()


# Sell an animal
brooklyn_safari.sell_animal("Bear")


# Display animals again
print()
print("Animals after selling Bear:")
brooklyn_safari.get_animals()


# Sort animals
brooklyn_safari.sort_animals()


# Display animal groups
print()
print("Animal groups:")
brooklyn_safari.get_groups()