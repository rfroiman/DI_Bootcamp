# Daily Challenge 2: Remove Consecutive Duplicate Letters

string = input("Enter a string: ")
result = string[0]  # Initialize the result with the first character

for i in range(1, len(string)):
    if string[i] != string[i-1]:
        result += string[i]

print(result)   
