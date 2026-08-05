# ============================================================
# Exercise 1: What Are You Learning?
# ============================================================

def display_message():
    print("I am learning about functions in Python.")

display_message()


# ============================================================
# Exercise 2: What's Your Favorite Book?
# ============================================================

def favorite_book(title):
    print(f"One of my favorite books is {title}.")

favorite_book("Alice in Wonderland")


# ============================================================
# Exercise 3: Some Geography
# ============================================================

def describe_city(city, country="Unknown"):
    print(f"{city} is in {country}.")

describe_city("Reykjavik", "Iceland")
describe_city("Paris")


# ============================================================
# Exercise 4: Random
# ============================================================

import random

def compare_numbers(user_number):
    random_number = random.randint(1, 100)

    if user_number == random_number:
        print("Success!")
    else:
        print(f"Fail! Your number: {user_number}, Random number: {random_number}")

compare_numbers(17)


# ============================================================
# Exercise 5: Let's Create Some Personalized Shirts!
# ============================================================

# Step 1, 2 and 3

def make_shirt(size, text):
    print(f"The size of the shirt is {size} and the text is '{text}'.")

make_shirt("Small", "Hello World")
make_shirt("Medium", "Python")


# Step 4, 5 and Bonus

def make_shirt(size="large", text="I love Python"):
    print(f"The size of the shirt is {size} and the text is '{text}'.")

# Large shirt with default message
make_shirt()

# Medium shirt with default message
make_shirt("medium")

# Custom shirt
make_shirt("small", "Custom message")

# Bonus - Keyword arguments
make_shirt(size="small", text="Hello!")


# ============================================================
# Exercise 6: Magicians
# ============================================================

magician_names = [
    "Harry Houdini",
    "David Blaine",
    "Criss Angel"
]

# Show magicians
def show_magicians(names):
    for magician in names:
        print(magician)

# Modify list
def make_great(names):
    for i in range(len(names)):
        names[i] = names[i] + " the Great"

make_great(magician_names)

show_magicians(magician_names)


# ============================================================
# Exercise 7: Temperature Advice
# ============================================================

# Step 1

def get_random_temp():
    return random.randint(-10, 40)

# Step 2 and 3

def main():
    temperature = get_random_temp()

    print(f"\nThe temperature right now is {temperature} degrees Celsius.")

    if temperature < 0:
        print("Brrr, that's freezing! Wear some extra layers today.")

    elif temperature <= 16:
        print("Quite chilly! Don't forget your coat.")

    elif temperature <= 23:
        print("Nice weather.")

    elif temperature <= 32:
        print("A bit warm, stay hydrated.")

    else:
        print("It's really hot! Stay cool.")

main()


# ============================================================
# BONUS 1 - Floating Point Temperature
# ============================================================

def get_random_temp():
    return round(random.uniform(-10, 40), 1)

temperature = get_random_temp()

print(f"\nBonus 1")
print(f"The temperature right now is {temperature} degrees Celsius.")


# ============================================================
# BONUS 2 - Temperature by Season
# ============================================================

def get_random_temp(month):

    if month == 12 or month == 1 or month == 2:
        # Winter
        return round(random.uniform(-10, 15), 1)

    elif month == 3 or month == 4 or month == 5:
        # Spring
        return round(random.uniform(10, 25), 1)

    elif month == 6 or month == 7 or month == 8:
        # Summer
        return round(random.uniform(25, 40), 1)

    elif month == 9 or month == 10 or month == 11:
        # Autumn
        return round(random.uniform(10, 30), 1)
    
month = 0 

while True:
    try:
        month = int(input("\nEnter a month (1-12): "))
        if month >=1 and month <=12:
           break
        else:
           print("Invalid month, please try again!")
    except ValueError:
        print("Invalid Input, please try again!")

temperature = get_random_temp(month)

print(f"The temperature right now is {temperature} degrees Celsius.")

if temperature < 0:
    print("Brrr, that's freezing! Wear some extra layers today.")

elif temperature <= 16:
    print("Quite chilly! Don't forget your coat.")

elif temperature <= 23:
    print("Nice weather.")

elif temperature <= 32:
    print("A bit warm, stay hydrated.")

else:
    print("It's really hot! Stay cool.")