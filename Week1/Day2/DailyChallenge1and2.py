# Daily Challenge 1: Multiples of a number

number = int(input("Enter a number: "))
length = int(input("Enter the length of the list: "))
list=[]

for i in range(length):
    multiple = number * (i + 1)
    list.append(multiple)

print (list)

# Daily Challenge 2: Remove Consecutive Duplicate Letters

string = input("Enter a string: ")
result = string[0]  # Initialize the result with the first character

for i in range(1, len(string)):
    if string[i] != string[i-1]:
        result += string[i]

print(result)   
