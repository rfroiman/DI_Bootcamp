#import random

#dogs_actions = [
#    'sleeping', 
#    'eating',
#    'barking'
#]

#while True:
#      action = random.choice(dogs_actions)
#
#      dog_name = input("Enter your dog name: ")
#
#      print(f"Your dogs name is {dog_name}")
#
#      print (f"{dog_name} is {action}")
#
#      if input("Do you want continue?: (yes or no) ").lower() != 'yes':
#          break

class Person:
     def __init__(self, name, last_name, age):
          self.name = name
          self.last_name = last_name
          self.age = age

class Student(Person):
     def __init__ (self, name, last_name, age, program):
        super().__init__(name, last_name, age)
        self.program = program

     def hello(self):
         print (f"Hello, my name is {self.name} and I study at {self.program}")

student1 = Student("Rogério", "Froiman", 54, "Python program")

student1.hello()

