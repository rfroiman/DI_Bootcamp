#Daily Challenge 1

import random


string=input("Enter a string at least 10 characters long: ")

if len(string) < 10:
    print("String not long enough.")        
elif len(string) > 10:
    print("String too long.")
else:
    print("Perfect string")

print("The first character of the string is:", string[0])
print("The last character of the string is:", string[-1])   

for i in range(len(string)):
    print(string[:i+1])

random_shuffle = ''.join(random.sample(string, len(string)))
print("Randomly shuffled string:", random_shuffle)