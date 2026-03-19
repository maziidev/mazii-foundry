class Student:

    def __init__(self, name, age, score):
        self.name = name
        self.age = age
        self.score = score

    def get_grade(self):
        if self.score >= 70:
            return "A"
        elif self.score >= 50:
            return "B"
        else:
            return "F"

    def introduce(self):
        print(f"Hi i am {self.name}, i am {self.age} years old")

godswill = Student("Godswill", 25, 95)
print(godswill.name)