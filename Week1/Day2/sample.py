#Sample 1 input a string and print it in reverse order  

string = input("Enter a string: ")
reversed_string = string[::-1]
# 
#reversed_string = ''.join(reversed(string))  
print(reversed_string)

#Sample 2 create a list with odd numbers from 1 to 21

odd_numbers = [num for num in range(1, 22) if num % 2 != 0]
print(odd_numbers)

#sample 3 ask user to input a length of the list and input a list with that length with only numbers and print the list

length = int(input("Enter the length of the list: "))
numbers = []
for i in range(length):
    num = input(f"Enter only integer numbers {i + 1}: ")
    if not num.isdigit():
        print("It's not a valid integer number!!!")
    else:
        numbers.append(int(num))
print(numbers)