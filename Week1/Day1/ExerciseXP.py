#Exercise 1: Print "Hello World" 4 times

from logging import info


print("Hello World!\n" * 4)

#Exercise 2: Some Math

print(99**3 * 8)

#Exercise 3: What is the output?

5 < 3 #False
3 == 3 #True
3 == "3" #False
"3" > 3 #Error
"Hello" == "hello" #False

#Exercise 4: Your computer brand

computer_brand = "Nitro 5"
print("My computer brand is " + computer_brand) 

#Exercise 5: Your Information

name = "Rogério"
age = 54
Shoe_size = 39
info = "My name is " + name + ", I am " + str(age) + " years old and my shoe size is " + str(Shoe_size) + "."
print(info)

#Exercise 6: A & B

a = 5
b = 3   
if a > b:
    print("Hello World") 

#Exercise 7: Odd or Even

number = int(input("Enter a number: "))
if number % 2 == 0:
    print("The number is even.")
else:
    print("The number is odd.") 

#Exercise 8: What’s Your Name?

name = input("What is your name? ")
if name == "Rogério":
    print("Hello, my name is " + name + " too. What a coincidence!") 
else:
    print("Hello, " + name + ".")

#Exercise 9: Tall Enough to Ride a Roller Coaster

height = int(input("What is your height in cm? "))
if height > 145:
    print("You are tall enough to ride the roller coaster!")
else:
    print("You need to grow some more to ride the roller coaster.")

