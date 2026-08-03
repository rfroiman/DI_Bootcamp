#Exercise 1: Favorite Numbers

my_fav_numbers = {6, 11, 21}
print(my_fav_numbers)

my_fav_numbers.update({7,13})
print(my_fav_numbers)

my_fav_numbers.remove(13)
print(my_fav_numbers)

friend_fav_numbers = {3, 5, 9}
print(friend_fav_numbers)

our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
print(our_fav_numbers)

#Exercise 2: Tuple

my_tuple = (1, 2, 3, 4, 5)
print(my_tuple)

my_tuple.add(6,7,8)
print(my_tuple) 

#Exercise 3: List Manipulation

basket = ["Banana", "Apples", "Oranges", "Blueberries"]
print(basket)

basket.remove("Banana")
print(basket)

basket.remove("Blueberries")
print(basket)

basket.append("Kiwi")
print(basket)

basket.insert(0, "Apples")
print(basket)

count_apples = basket.count("Apples")
print(count_apples)

basket.clear()
print(basket)

#Exercise 4: Floats

list = []
num = 1.5
while num <= 5:
    if num.is_integer():
        list.append(int(num))
    else:
        list.append(num)    
    num += 0.5

print(list)

#Exercise 5: For Loop

for i in range(1, 21):
 print(i)

for i in range(1, 21):
    if i % 2 == 0:
        print(i)    

#Exercise 6: While Loop

name = input("Enter your name: ")
while True:
  if len(name) < 3 or name.isdigit():
     name = input("Give the correct name: ")
  else:
    print("thank you")
    break

#Exercise 7: Favorite Fruits

favorite_fruits = input("Enter your favorite fruits (comma-separated): ").split(", ")
print(favorite_fruits)

any_fruit = input("Enter a fruit: ")
if any_fruit in favorite_fruits:
    print("You chose one of your favorite fruits! Enjoy!")  
else:
    print("You chose a new fruit. I hope you enjoy it!")

#Exercise 8: Pizza Toppings

base_price = 10
toppings = []   
while True:
    topping = input("Enter a pizza topping (or type 'quit' to finish): ")
    if topping.lower() == 'quit':
        break
    toppings.append(topping)
    base_price += 2.5
    print(f"Adding {topping} to your pizza.")

print(f"Your pizza toppings: {', '.join(toppings)}")
print(f"Total price: ${base_price:.2f}")

#Exercise 9: Cinemax Tickets

ages = []
Total_price = 0
while True:
    age_input = input("Enter your age (or type 'quit' to finish): ")
    if age_input.lower() == 'quit':
        break
    try:
        age = int(age_input)
        ages.append(age)
        if age < 3:
            price = 0
        elif 3 <= age <= 12:
            price = 10
        else:
            price = 15
        Total_price += price
    except ValueError:
        print("Please enter a valid age.")

print(f"Total price for all tickets: ${Total_price:.2f}")

#Bonus

list = []
while True:
    name = input("Enter a name (or type 'quit' to finish): ")
    if name.lower() == 'quit':
        break
    age = int(input("Enter your age (or type 'quit' to finish): "))
    if age >= 16 and age <= 21:
        list.append(name)

print(f"List of people allowed to watch the movie: {', '.join(list)}")
