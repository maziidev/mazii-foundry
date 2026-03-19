# PYTHON VARIABLES

# name = "Godswill"
# age = 25
# height = 5.11
# is_learning = True

# print("Name:", name)
# print("Age:", age)
# print("Height:", height)
# print("Learning_python:", is_learning)
# print("Type of age:", type(age))


# ------MATH OPERATORS ------
# a = 20
# b = 6


# print("Addition: ", a + b)
# print("Subtraction: ", a - b)
# print("Multiplication: ", a * b)
# print("Division: ", a / b)
# print("Floor Division: ", a // b)
# print("Remainder: ", a % b)
# print("Exponent: ", a ** b)


# number = 7

# print(number % 2)

# ------ TYPE CONVERSION ------
# age_text = "25"
# age_number = int(age_text) # converts the string to a number
# print(age_number + 5)


# ------ if elif else ------
# age = 20
# if age >= 18:
#     print("You are an adult")
# elif age >= 13:
#     print("You are a teenager")
# else:
#     print("You are a child")

# score = 50

# if score >= 70:
#     print("Grade: A")
# elif score >= 50:
#     print("Grade: B")
# else:
#     print("Grade: F")

# # Add logical operators
# score2 = 85

# if score2 >= 70 and score2 <= 100:
#     print("Valid Grade: A")

# if score2 < 0 or score2 > 100:
#     print("Invalid score")

# if not score2 == 100:
#     print("Not a perfect score")


# ------ LOOPS ------

# for loop
# for i in range(5):
#     print(i)

# # while loop

# count = 0
# while count < 5:
#     print(count)
#     count += 1


# Break and continue
# for i in range(10):
#     if i == 5:
#         break
#     print(i)

# for i in range(5):
#     if i == 2:
#         continue
#     print(i)

# ---- FUNCTIONS ----
# function is a named block of code that only runs when you call it

# def greet():
#     print("Hello Godswill")

# greet()

# functions with parameters
# def greetings(name):
#     print("Hello " + name + "!")

# greetings("Emmanuel")
# greetings("Mazii Dev")

# functions with return values

# def add(a, b):
#     result = a + b
#     return result

# total = add(10, 5)
# print(total)

# function with default parameters

# def greet(name, greeting ="Hello"):
#     print(greeting +" " + name)

# greet("Maziidev")
# greet("Godswill", "Hey")


# *args, **kwargs
# *args collects them into a tuple, **kwargs collects them into a dictionary

# def add(*args):
#     print(args)
#     total = 0
#     for num in args:
#         total += num
#     return total

# print(add(1, 2, 3))
# print(add(1, 2, 3, 4))
# print(add(1, 2, 3, 4, 10))

# def display_info(**kwargs):
#     print(kwargs)
#     for key, value in kwargs.items():
#         print(f"{key}: {value}")

# display_info(name="Godswill", age=25, city="Port Harcourt")

# lambda function
# this is a one line function

# regular function
# def square(x):
#     return x * x
# print(square(6))

# square = lambda x: x *x

# print(square(5))


#---- COLLECTIONS ----
# list, set, dictionary, tuples

# list

# fruits = ["Apple", "Banana", "Mango", "Orange"]

# print(fruits[0])
# print(fruits[1])
# print(fruits[2])
# print(fruits[-1])


# # changing an item
# fruits[1] = "grape"

# print(fruits)

# # adding items
# fruits.append("pineapple")
# fruits.insert(1, "lemon")

# print(fruits)
# # removing items
# fruits.remove("Mango")
# fruits.pop(0)
# fruits.pop()

# print(fruits)
# # length
# print(len(fruits))


# tuples

# coordinates = (40.7128, -74.0060)
# print(coordinates)

# sets

# tags = {"python", "backend", "python", "ml", "backend"}
# print(tags)

# tags.add("devops")
# tags.remove("ml")

# backend_devs = {"Godswill", "Ada", "Emeka"}
# ml_devs = {"Ada", "Chidi", "Godswill"}

# print(backend_devs & ml_devs) #intersection - in both
# print(backend_devs | ml_devs) #union - in either
# print(backend_devs - ml_devs) #difference - in backend but not ml


# dictionaries

user ={
    "name": "Godswill",
    "age": 25,
    "city": "Enugu",
    "is_active": True
}

print(user.get("age"))
print(user["name"])

# Adding and updating
user["email"] = "god@mail.com"   # adds new key
user["age"] = 26                  # updates existing key

# Removing
del user["city"]
user.pop("is_active")

# Looping through
for key, value in user.items():
    print(f"{key}: {value}")

# Just keys or just values
print(user.keys())
print(user.values())