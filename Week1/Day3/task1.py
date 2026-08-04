# create a dictionary students

dic = {
    'name': 'Rogerio',
    'lastname': 'Froiman',
    'age': 54,
    'program': 'Full Time',
    'courses': ['Full Stack & AI', 'Data Analyst', 'GenAI & Machine Learn'],
}

print (f"My name is: {dic['name']} {dic['lastname']}")
print (dic.items())

dic['name'] = 'Mary'
dic['age']  = 30

print (f"My name is: {dic['name']} {dic['lastname']} {dic['age']}")

dic['height'] = 170

print (f"My name is: {dic['name']} {dic['lastname']} {dic['age']} {dic['height']}")

del dic['height']
print (dic.items())

print ('height' in dic)

for key in dic:
    print (f"The Key is: {key} and the value is {dic[key]}")

print (dic.keys())
print (dic.values())

my_string_numbers = '12345'
my_list = []
my_list2 = []

my_list = [num for num in my_string_numbers]
print (my_list)

my_list2 = [num *2 for num in range(2,5)]
print (my_list2)
