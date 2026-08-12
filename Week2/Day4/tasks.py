class Animal:
    def __init__(self, food_amount, food_type):
        self.food_amount = food_amount
        self.food_type = food_type

    def daily_food(self):
        return self.food_amount


class Wolf(Animal):
    def __init__(self):
        super().__init__(2, "meat")


class Parrot(Animal):
    def __init__(self):
        super().__init__(0.2, "fruit")


class Chicken(Animal):
    def __init__(self):
        super().__init__(0.15, "wheat")


# Zoo animals
zoo = [
    Chicken(),
    Wolf(),
    Wolf(),
    Parrot(),
    Parrot(),
    Parrot()
]


# Ask the user for the number of days
days = int(input("Enter the number of days: "))


# Calculate the total food needed
food_needed = {}

for animal in zoo:
    food_type = animal.food_type
    amount = animal.food_amount * days

    if food_type in food_needed:
        food_needed[food_type] += amount
    else:
        food_needed[food_type] = amount


# Display the result
print("\nFood needed:")

for food_type, amount in food_needed.items():
    print(f"{food_type}: {amount:.2f} kg")