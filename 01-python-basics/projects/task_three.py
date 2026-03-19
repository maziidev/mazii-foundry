"""
Write a program that:

1. Creates a list of **5 student names**
2. Creates a dictionary where each student name is a **key** and their score (you pick) is the **value**
3. Loops through the dictionary and prints each student's name, score, and grade using your `calculate_grade` function from the last battle

Expected output:
```
Godswill | Score: 85 | Grade: A
Ada      | Score: 55 | Grade: B
Emeka    | Score: 30 | Grade: F
"""

# student_names =["Emmanuel", "Jessica", "Mazii", "Chinelo", "Emeka"]

# student_db = {
#     "Emmanuel": 50,
#     "Jessica": 70,
#     "Mazii": 95,
#     "Chinelo": 80,
#     "Emeka": 40
# }

# for key, value in student_db.items():
#     if value >= 70:
#         print(f"{key} | Score: {value} | Grade: A")
#     elif value >= 50:
#         print(f"{key} | Score: {value} | Grade: B")
#     else:
#         print(f"{key} | Score: {value} | Grade: F")


# refactoring the code

def calculate_grade(score):
    if score >= 70:
        grade = "A"
    elif score >= 50:
        grade = "B"
    else:
        grade = "F"

    return grade


student_db = {
    "Emmanuel": 20,
    "Jessica": 60,
    "Mazii": 55,
    "Chinelo": 80,
    "Emeka": 40
}

for key, value in student_db.items():
    grade = calculate_grade(value)
    print(f"{key} | Score: {value} | Grade: {grade}")


# STRING FORMATTING TASK
"""
Write a function called `format_student_report` that:

1. Takes `name`, `score`, and `grade` as parameters
2. Returns a **formatted string** that looks exactly like this:
```
╔══════════════════════════╗
║ Name:  Godswill          ║
║ Score: 95.00             ║
║ Grade: A                 ║
╚══════════════════════════╝

"""
def format_student_report(name, score, grade):
    return f"{'Name':<10} {name}\n{'Score':<10} {score:.2f}\n{'Grade':<10} {grade}"


print(format_student_report("Godswill", 95, "A"))