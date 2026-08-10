# =========================
# EXERCISE 1 - PETS
# =========================

class Pets:
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())


class Cat:
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'


class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'


class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'


class Siamese(Cat):
    pass


bengal_obj = Bengal("Leo", 3)
chartreux_obj = Chartreux("Milo", 5)
siamese_obj = Siamese("Luna", 2)

all_cats = [bengal_obj, chartreux_obj, siamese_obj]

sara_pets = Pets(all_cats)

sara_pets.walk()


# =========================
# EXERCISE 2 - DOGS
# =========================

class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f"{self.name} is barking"

    def run_speed(self):
        return self.weight / self.age * 10

    def fight(self, other_dog):
        my_power = self.run_speed() * self.weight
        other_power = other_dog.run_speed() * other_dog.weight

        if my_power > other_power:
            return f"{self.name} won the fight"
        elif other_power > my_power:
            return f"{other_dog.name} won the fight"
        else:
            return "It's a tie"


dog1 = Dog("Rex", 5, 30)
dog2 = Dog("Buddy", 3, 20)
dog3 = Dog("Max", 7, 35)

print(dog1.bark())
print(dog2.run_speed())
print(dog1.fight(dog2))

print(dog2.bark())
print(dog3.run_speed())
print(dog2.fight(dog3))


# =========================
# EXERCISE 3 - DOGS DOMESTICATED
# =========================

import random


class PetDog(Dog):
    def __init__(self, name, age, weight):
        super().__init__(name, age, weight)
        self.trained = False

    def train(self):
        print(self.bark())
        self.trained = True

    def play(self, *args):
        names = [dog.name if isinstance(dog, Dog) else str(dog) for dog in args]
        names.append(self.name)

        print(f"{', '.join(names)} all play together")

    def do_a_trick(self):
        if self.trained:
            tricks = [
                "does a barrel roll",
                "stands on his back legs",
                "shakes your hand",
                "plays dead"
            ]
            print(f"{self.name} {random.choice(tricks)}")


my_dog = PetDog("Fido", 2, 10)
buddy = PetDog("Buddy", 3, 15)
max_dog = PetDog("Max", 4, 20)

my_dog.train()
my_dog.play(buddy, max_dog)
my_dog.do_a_trick()

buddy.train()
buddy.do_a_trick()


# =========================
# EXERCISE 4 - FAMILY AND PERSON
# =========================

class Person:
    def __init__(self, first_name, age):
        self.first_name = first_name
        self.age = age
        self.last_name = ""

    def is_18(self):
        return self.age >= 18


class Family:
    def __init__(self, last_name):
        self.last_name = last_name
        self.members = []

    def born(self, first_name, age):
        person = Person(first_name, age)
        person.last_name = self.last_name
        self.members.append(person)

    def check_majority(self, first_name):
        for person in self.members:
            if person.first_name == first_name:
                if person.is_18():
                    print(
                        "You are over 18, your parents Jane and John "
                        "accept that you will go out with your friends"
                    )
                else:
                    print(
                        "Sorry, you are not allowed to go out with your friends."
                    )
                return

    def family_presentation(self):
        print(f"Family name: {self.last_name}")

        for person in self.members:
            print(f"{person.first_name}, {person.age}")


family = Family("Smith")

family.born("John", 45)
family.born("Jane", 43)
family.born("Michael", 20)
family.born("Emma", 16)

family.check_majority("Michael")
family.check_majority("Emma")

family.family_presentation()