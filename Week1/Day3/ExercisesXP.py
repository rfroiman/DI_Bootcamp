# =====================================
# Exercise 1: Converting Lists into Dictionaries
# =====================================

keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

dictionary = dict(zip(keys, values))

print("Exercise 1 Output:")
print(dictionary)

# =====================================
# Exercise 2: Cinemax #2
# =====================================

family = {
    "rick": 43,
    "beth": 13,
    "morty": 5,
    "summer": 8
}

total_cost = 0

print("\nExercise 2 Output:")

for name, age in family.items():
    if age < 3:
        ticket_price = 0
    elif age <= 12:
        ticket_price = 10
    else:
        ticket_price = 15

    total_cost += ticket_price
    print(f"{name} ticket price: ${ticket_price}")

print(f"Total cost: ${total_cost}")

# =====================================
# Exercise 2 Bonus:
# Allow user to input family members
# =====================================

print("\nExercise 2 Bonus Output:")

family = {}

number_members = int(input("How many family members? "))

# Get names and ages from the user
for i in range(number_members):
    name = input("Enter member name: ")
    age = int(input("Enter member age: "))

    family[name] = age


total_cost = 0

# Calculate tickets
for name, age in family.items():

    if age < 3:
        ticket_price = 0
    elif age <= 12:
        ticket_price = 10
    else:
        ticket_price = 15

    total_cost += ticket_price

    print(f"{name} ticket price: ${ticket_price}")

print(f"Total cost: ${total_cost}")


# =====================================
# Exercise 3: Zara
# =====================================

brand = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": [
        "men",
        "women",
        "children",
        "home"
    ],
    "international_competitors": [
        "Gap",
        "H&M",
        "Benetton"
    ],
    "number_stores": 7000,
    "major_color": {
        "France": "blue",
        "Spain": "red",
        "US": [
            "pink",
            "green"
        ]
    }
}

print("\nExercise 3 Output:")

# Change number of stores
brand["number_stores"] = 2
print(f"Number of Stores {brand['number_stores']}")

# Describe Zara clients
print(
    f"Zara clients are people interested in {brand['type_of_clothes']} clothing."
)

# Add country creation
brand["country_creation"] = "Spain"
print(f"New Country Creation {brand['country_creation']}")

# Add Desigual if competitors key exists
if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")

# Delete creation date
brand.pop("creation_date")

# Print last competitor
print(
    "Last competitor:",
    brand["international_competitors"][-1]
)

# Print US colors
print(
    "US colors:",
    brand["major_color"]["US"]
)

# Print number of keys
print(
    "Number of keys:",
    len(brand)
)

# Print all keys
print("All keys:")
for key in brand.keys():
    print(key)


# =====================================
# Exercise 3 Bonus:
# Merge another dictionary with Zara
# =====================================

more_on_zara = {
    "creation_date": 1975,
    "number_stores": 7000
}

brand.update(more_on_zara)

print("\nZara dictionary after update:")
print(brand)

# =====================================
# Exercise 4: Disney Characters
# =====================================

users = [
    "Mickey",
    "Minnie",
    "Donald",
    "Ariel",
    "Pluto"
]


print("\nExercise 4 Output:")


# 1. Characters mapped to indices

characters_to_index = {}

for index, character in enumerate(users):
    characters_to_index[character] = index

print(characters_to_index)


# 2. Indices mapped to characters

index_to_characters = {}

for index, character in enumerate(users):
    index_to_characters[index] = character

print(index_to_characters)


# 3. Sorted characters mapped to indices

sorted_users = sorted(users)

sorted_dictionary = {}

for index, character in enumerate(sorted_users):
    sorted_dictionary[character] = index

print(sorted_dictionary)