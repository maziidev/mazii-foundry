"""
Write a function called `calculate_grade` that:

1. Takes a `score` as a parameter
2. **Returns** the grade as a string — `"A"`, `"B"`, or `"F"`
3. Uses your grading logic from the conditionals battle
4. Then call it 3 times with different scores and print the results like this:
```
Score 85: A
Score 55: B
Score 30: F
"""


# def calculate_grade(score):
#     if score >= 70:
#         grade = "A"
#     elif score >= 50:
#         grade = "B"
#     else:
#         grade = "F"

#     return grade


# obi = calculate_grade(90)
# ada = calculate_grade(60)
# emeka = calculate_grade(30)


# print(f"Score 85: {obi}")
# print(f"Score 55: {ada}")
# print(f"Score 30: {emeka}")


"""
Write a function called `apply_operation` that:

1. Takes three arguments — `a`, `b`, and `operation`
2. `operation` will be a **function** passed in by the caller
3. It should apply the operation to `a` and `b` and return the result

Then call it **three times** using `lambda` functions for:
- Addition
- Multiplication
- Finding the maximum of the two numbers

Expected output:
```
Addition: 15
Multiplication: 50
Maximum: 10

"""


# def apply_operation(a, b, operation):
#     return operation(a, b)

# print("Addition:", apply_operation(10, 5, lambda z, y: z +y))
# print("Multiplication:", apply_operation(10, 5, lambda z, y: z *y))
# print("Maximum:", apply_operation(10, 5, lambda z, y: max(z, y)))
