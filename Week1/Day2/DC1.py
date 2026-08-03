# Daily Challenge 1: Multiples of a number

number = int(input("Enter a number: "))
length = int(input("Enter the length of the list: "))
list=[]

for i in range(length):
    multiple = number * (i + 1)
    list.append(multiple)

print (list)

