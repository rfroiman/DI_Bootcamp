# Request a word and count how many letters have in the word
word = input("Enter a word: ").lower()

letters = {}

for letter in word:
    if letter in letters:
        letters[letter] += 1
    else:
        letters[letter] = 1

for letter, quantity in letters.items():
    print(f"{letter}: {quantity}")

#Functions
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

print(greet("Student"))
print(greet(greeting= "Good morning", name="Rome"))

#task2

def total_sum(*args):
    total = 0

    for number in args:
        if number >= 0:
           total += number
    return total

print (total_sum(1, 5, 10, 15, 20))


def invert_lettters(text):
    return text.swapcase()

word = input("Enter a word: ")

result = invert_lettters(word)
         
print("Result:", result)

