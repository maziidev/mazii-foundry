"""
Write a program that:

1. Has a dictionary of 5 students with names and scores — use your student_db from before
2. Loops through and adds the grade to each student's data using calculate_grade
3. Saves the result to a JSON file called student_report.json
4. Then reads it back and prints each student's name, score and grade using format_student_report

"""
import json


def calculate_grade(score):
    if score >= 70:
        grade = "A"
    elif score >= 50:
        grade = "B"
    else:
        grade = "F"

    return grade

student = {
    "Emmanuel": 50,
    "Jessica": 70,
    "Mazii": 95,
    "Chinelo": 80,
    "Emeka": 40
}

def format_student_report(name, score, grade):
    return f"{'Name':<10} {name}\n{'Score':<10} {score:.2f}\n{'Grade':<10} {grade}\n"


for key, value in student.items():
    grade = calculate_grade(value)
    student[key] = {"score": value, "grade": grade}

with open("student_db.json", "w") as file:
    json.dump(student, file, indent=4)

with open("student_db.json", "r") as file:
    data = json.load(file)
    for name, info in data.items():
        print(format_student_report(name, info["score"], info["grade"]))

