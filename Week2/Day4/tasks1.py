# number = int(input("Enter a number: (0-10) "))
# multi = 1 
# for i in range(2, number + 1):
#     multi *= i

# f = open("result.txt", "w")
# f.write("My result is: " + str(multi))
# f.close()

import requests

response = requests.get('http://api.open-notify.org/iss-now.json')

print(response)