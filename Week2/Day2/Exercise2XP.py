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
