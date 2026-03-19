# Stage 1 — Variables & Data Types

## What is a Variable?

A variable is a named label that stores a value in memory.
Python creates the value as an object, and the variable points to it.

## Core Data Types

| Type  | Description          | Example         |
|-------|----------------------|-----------------|
| int   | Whole numbers        | 42, -7          |
| float | Decimal numbers      | 3.14, -0.5      |
| str   | Text                 | "hello"         |
| bool  | True or False        | True, False     |

## Checking a Type

```python
print(type(42))      # <class 'int'>
print(type("hello")) # <class 'str'>
```

## Operators & Expressions

An expression is any code that produces a value.

### Math Operators

| Operator | Name            | Example   | Result  |
|----------|-----------------|-----------|---------|
| +        | Addition        | 20 + 6    | 26      |
| -        | Subtraction     | 20 - 6    | 14      |
| *        | Multiplication  | 20 * 6    | 120     |
| /        | Division        | 20 / 6    | 3.3333  |
| //       | Floor Division  | 20 // 6   | 3       |
| %        | Modulo          | 20 % 6    | 2       |
| **       | Exponent        | 20 ** 6   | 64000000|

### Key Concepts

- `/` always returns a float, even if the result is whole (e.g. 10/2 = 5.0)
- `//` truncates the decimal (does NOT round)
- `%` returns the remainder — used for even/odd checks, cycling, pagination
- `+` on strings = concatenation: "Hello" + " " + "World" = "Hello World"
- `*` on strings = repetition: "Ha" * 3 = "HaHaHa"

## Type Conversion

Python data sometimes arrives in the wrong type.
Use built-in functions to convert between types.

### Conversion Functions

| Function | What it does            | Example            | Result   |
|----------|-------------------------|--------------------|----------|
| int()    | Converts to integer     | int("25")          | 25       |
| float()  | Converts to decimal     | float(3)           | 3.0      |
| str()    | Converts to string      | str(100)           | "100"    |
| bool()   | Converts to True/False  | bool(0)            | False    |

### Key Rules

- input() ALWAYS returns a string — convert before doing math
- bool(0) = False, bool(anything else) = True
- bool("") = False, bool(any non-empty string) = True

## Strong Typing Rule

Python will NOT automatically convert types for you.
You must convert explicitly before mixing types in operations.

# This crashes

"Score: " + 100        # TypeError — str + int

# This works

"Score: " + str(100)   # "Score: 100"

## Conditionals — if, elif, else

Conditionals let your program make decisions based on whether
something is True or False.

### Structure

```python
if condition:
    # runs if condition is True
elif another_condition:
    # runs if first was False, this is True
else:
    # runs if ALL above were False
```

### Rules

- Always put the most specific/highest condition first
- Colon `:` at the end of every if/elif/else line is mandatory
- Indentation (4 spaces) is syntax — not optional
- Python stops at the FIRST condition that is True

### Comparison Operators

| Operator | Meaning           |
|----------|-------------------|
| ==       | Equal to          |
| !=       | Not equal to      |
| >        | Greater than      |
| <        | Less than         |
| >=       | Greater or equal  |
| <=       | Less or equal     |

### Logical Operators

| Keyword | Meaning                        |
|---------|--------------------------------|
| and     | Both conditions must be True   |
| or      | At least one must be True      |
| not     | Flips True to False            |

## Loops — for, while, break, continue

Loops let you repeat code without writing it multiple times.

### for Loop

Use when you know how many times to repeat.

```python
for i in range(5):
    print(i)  # 0, 1, 2, 3, 4
```

### range() forms

```python
range(5)        # 0 to 4
range(2, 6)     # 2 to 5
range(0, 10, 2) # 0, 2, 4, 6, 8 (step by 2)
```

⚠️ range(start, stop) goes UP TO but NOT INCLUDING stop.
So range(1, 10) = 1 to 9. Use range(1, 11) to include 10.

### while Loop

Use when you repeat until a condition becomes False.

```python
count = 0
while count < 5:
    print(count)
    count += 1  # count = count + 1
```

⚠️ Always update your condition variable or you get an infinite loop.
Kill infinite loops with Ctrl + C.

### break — exit the loop immediately

```python
for i in range(10):
    if i == 5:
        break   # stops at 4
```

### continue — skip current iteration, keep going

```python
for i in range(5):
    if i == 2:
        continue  # skips 2, continues to 3, 4
```

### Key Rules

- Python starts counting from 0
- Indentation is mandatory inside loops
- for = known count, while = unknown count

## Functions

A function is a named, reusable block of code.
Write logic once — call it anywhere.

### Structure

```python
def function_name(parameter1, parameter2):
    # logic here
    return value
```

### Key Concepts

- `def` defines the function — it does NOT run it
- Call a function by writing its name with ()
- Parameters = variables that receive incoming data
- Arguments = actual values passed when calling
- `return` sends data back out and STOPS the function

### Default Parameters

```python
def greet(name, greeting="Hello"):
    print(greeting + " " + name)

greet("Godswill")         # Hello Godswill
greet("Godswill", "Hey")  # Hey Godswill
```

### Scope

- Local variable: defined inside a function, dies when function ends
- Global variable: defined outside all functions, exists everywhere
- A local variable with the same name as a global does NOT affect the global

### Best Practice

Return values directly instead of storing in unnecessary variables:

```python
# Instead of this:
def get_grade(score):
    grade = "A"
    return grade

# Do this:
def get_grade(score):
    return "A"
```

## Advanced Functions — *args, **kwargs, lambda, First-Class Functions

### *args — variable positional arguments

Collects unlimited positional arguments into a tuple.

```python
def add(*args):
    return sum(args)

add(1, 2, 3)    # 6
add(1, 2, 3, 4) # 10
```

### **kwargs — variable keyword arguments

Collects unlimited keyword arguments into a dictionary.

```python
def display(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

display(name="Godswill", age=25)
```

### Argument order rule

```python
def func(required, *args, **kwargs)
```

### lambda — anonymous one-line functions

Use when passing throwaway logic as an argument.
DO NOT assign to a variable — use def instead.

```python
# Wrong — triggers Ruff E731
add = lambda x, y: x + y

# Right — pass directly
apply_operation(10, 5, lambda x, y: x + y)
```

### First-Class Functions

Functions are objects in Python.
You can pass them as arguments to other functions.

```python
def apply_operation(a, b, operation):
    return operation(a, b)

# Pass a named function
def double(x):
    return x * 2

apply_operation(10, 5, double)

# Or pass a lambda directly
apply_operation(10, 5, lambda x, y: x + y)
```

### Higher-Order Functions

A function that takes another function as an argument.
Core pattern in ML pipelines, sorting, middleware, and APIs.

## Data Structures — List, Tuple, Set, Dictionary

### Choosing the Right Structure

| Structure | Use When |
|-----------|----------|
| list      | Ordered collection, duplicates allowed, needs to change |
| tuple     | Ordered collection that must NOT change |
| set       | Unique values only, order doesn't matter |
| dict      | Key-value pairs, lookup by name |

### List

```python
fruits = ["apple", "banana", "mango"]
fruits[0]           # access by index — starts at 0
fruits[-1]          # last item
fruits.append("x")  # add to end
fruits.insert(1,"x")# add at position
fruits.remove("x")  # remove by value
fruits.pop()        # remove last
fruits.pop(0)       # remove by index
len(fruits)         # length
```

### Tuple — immutable list

```python
coords = (40.7128, -74.0060)
coords[0]     # access fine
coords[0] = 1 # 💥 TypeError — cannot modify
```

### Set — unique values only

```python
tags = {"python", "ml", "python"}  # {"python", "ml"}
tags.add("devops")
tags.remove("ml")

# Set operations
a & b   # intersection — in BOTH
a | b   # union — in EITHER
a - b   # difference — in a but NOT b
```

### Dictionary — key-value pairs

```python
user = {"name": "Godswill", "age": 25}
user["name"]          # access by key
user.get("age")       # safer access — won't crash if missing
user["email"] = "x"   # add new key
user["age"] = 26      # update existing
del user["age"]       # remove key
user.pop("age")       # remove and return value

# Looping
for key, value in user.items():
    print(f"{key}: {value}")

user.keys()    # all keys
user.values()  # all values
```

### DRY Principle — Don't Repeat Yourself

If logic already exists in a function, call the function.
Never copy-paste logic — refactor into reusable functions.

## String Manipulation

### Strings are sequences — index like a list

```python
name = "Godswill"
name[0]      # G
name[-1]     # l (last character)
name[0:3]    # God
name[::-1]   # lliwsdoG (reversed)
```

### Common String Methods

```python
text.strip()          # remove whitespace from both ends
text.upper()          # ALL CAPS
text.lower()          # all lowercase
text.title()          # Title Case
text.replace(a, b)    # replace a with b
text.split(" ")       # string → list
" ".join(list)        # list → string
text.startswith("x")  # True/False
text.endswith("x")    # True/False
text.find("x")        # index of first match
text.count("x")       # how many times x appears
"x" in text           # True/False
```

### F-String Formatting

```python
f"{value:.2f}"      # 2 decimal places → 95.00
f"{value:,}"        # comma separator → 1,000,000
f"{value:,.2f}"     # both → 1,000,000.00
f"{value:<10}"      # left align in 10 char field
f"{value:>10}"      # right align in 10 char field
```

### Split and Join

```python
# String → List
"Port Harcourt".split(" ")     # ["Port", "Harcourt"]

# List → String
" ".join(["Port", "Harcourt"]) # "Port Harcourt"
"-".join(["Port", "Harcourt"]) # "Port-Harcourt"
```

### Key Rule

Functions should do ONE job.
Pass data in as parameters — don't reach outside for it.

## File I/O & Context Managers

### Why `with` is Non-Negotiable

Opening a file gives your program a file descriptor.
Forgetting to close it = resource leak = server crashes in production.
`with` closes the file automatically — even if your code crashes.

```python
# ❌ Wrong — easy to forget close()
file = open("data.txt", "r")
content = file.read()
file.close()

# ✅ Right — closes automatically
with open("data.txt", "r") as file:
    content = file.read()
```

### File Modes

| Mode | Meaning                        |
|------|--------------------------------|
| "r"  | Read — file must exist         |
| "w"  | Write — creates or overwrites  |
| "a"  | Append — adds to end           |
| "rb" | Read binary                    |
| "wb" | Write binary                   |

### Three Ways to Read

```python
file.read()       # entire file as one string
file.readlines()  # entire file as list of lines
for line in file  # one line at a time — memory efficient
    line.strip()  # removes \n from each line
```

### JSON Files

Use json for structured data — APIs, configs, persistence.

```python
import json

# Write — dict to JSON file
with open("data.json", "w") as file:
    json.dump(data, file, indent=4)

# Read — JSON file to dict
with open("data.json", "r") as file:
    data = json.load(file)
```

### Nested Dictionaries

Store related data together as values:

```python
students = {
    "Godswill": {"score": 95, "grade": "A"},
    "Ada":      {"score": 55, "grade": "B"}
}

# Access nested values
students["Godswill"]["score"]  # 95
students["Godswill"]["grade"]  # A
```

### Key Rules

- Always use `with` for file handling — no exceptions
- `"w"` destroys existing content — use `"a"` to preserve
- JSON only serializes: dict, list, str, int, float, bool
- Sets cannot be serialized to JSON

---

### 🔨 Practical Example — Student Report System

```python
"""
Build a student report system that:
1. Stores 5 students with scores in a dictionary
2. Calculates grades and builds nested structure
3. Saves to JSON file
4. Reads back and prints formatted report
"""
import json


def calculate_grade(score):
    if score >= 70:
        return "A"
    elif score >= 50:
        return "B"
    else:
        return "F"


def format_student_report(name, score, grade):
    return f"{'Name':<10} {name}\n{'Score':<10} {score:.2f}\n{'Grade':<10} {grade}\n"


student = {
    "Emmanuel": 50,
    "Jessica":  70,
    "Mazii":    95,
    "Chinelo":  80,
    "Emeka":    40
}

# Build nested structure with grades
for key, value in student.items():
    grade = calculate_grade(value)
    student[key] = {"score": value, "grade": grade}

# Write to JSON
with open("student_db.json", "w") as file:
    json.dump(student, file, indent=4)

# Read back and print
with open("student_db.json", "r") as file:
    data = json.load(file)
    for name, info in data.items():
        print(format_student_report(name, info["score"], info["grade"]))
```
