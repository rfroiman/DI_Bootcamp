class Farm:

    def __init__(self, farm_name):
        self.name = farm_name
        self.animals = {}

    def add_animal(self, animal_type=None, count=1, **kwargs):

        if animal_type is not None:
            if animal_type in self.animals:
                self.animals[animal_type] += count
            else:
                self.animals[animal_type] = count

        for animal, quantity in kwargs.items():
            if animal in self.animals:
                self.animals[animal] += quantity
            else:
                self.animals[animal] = quantity

    def get_info(self):
        info = f"{self.name}'s farm\n\n"

        for animal, count in self.animals.items():
            info += f"{animal:<10}: {count}\n"

        info += "\n    E-I-E-I-0!"

        return info

    def get_animal_types(self):
        return sorted(self.animals.keys())

    def get_short_info(self):
        animal_types = self.get_animal_types()

        animal_list = []

        for animal in animal_types:
            if self.animals[animal] > 1:
                animal += "s"

            animal_list.append(animal)

        if len(animal_list) == 1:
            animals = animal_list[0]

        elif len(animal_list) == 2:
            animals = f"{animal_list[0]} and {animal_list[1]}"

        else:
            animals = ", ".join(animal_list[:-1])
            animals += f" and {animal_list[-1]}"

        return f"{self.name}'s farm has {animals}."


# -----------------------------------
# Test
# -----------------------------------

macdonald = Farm("McDonald")

macdonald.add_animal("cow", 5)
macdonald.add_animal("sheep")
macdonald.add_animal("sheep")
macdonald.add_animal("goat", 12)

print(macdonald.get_info())

print()

print(macdonald.get_short_info())


# -----------------------------------
# Test do BONUS com **kwargs
# -----------------------------------

macdonald.add_animal(cow=5, sheep=2, goat=12)

print()

print(macdonald.get_info())