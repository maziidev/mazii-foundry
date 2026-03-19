"""
Create a class called BankAccount that:

Has three attributes — owner, balance, currency
currency should default to "USD" if not provided
Has three methods:

deposit(amount) — adds to balance, prints "Deposited $100. New balance: $600"
withdraw(amount) — subtracts from balance, prints "Withdrawn $50. New balance: $550" — but if amount is more than balance print "Insufficient funds"
get_balance() — prints "Account owner: Godswill | Balance: $500 USD"
"""


class BankAccount:

    def __init__(self, owner, balance, currency="USD"):
        self.owner = owner
        self.balance = balance
        self.currency = currency

    def deposit(self, amount):
        self.balance += amount
        print(f"Deposited ${amount} new balance: ${self.balance}")

    def withdraw(self, amount):
        if amount <= self.balance:
            self.balance -=amount
            print(f"Withdrawn ${amount} new balance: ${self.balance}")
        else:
            print("Insufficient Funds")

    def __str__(self):
        return f"Account owner: {self.owner} | Balance: ${self.balance} {self.currency}"

    def account_type(self):
        return "Standard Account"

# inheritance

class SavingsAccount(BankAccount):
    def __init__(self, owner, balance, interest_rate, currency="USD"):
        super().__init__(owner, balance, currency)
        self.interest_rate = interest_rate

    def apply_interest(self):
        interest = self.balance * self.interest_rate
        self.balance += interest
        print(f"Interest applied: ${interest:.2f}. New balance: ${self.balance:.2f}")

    def account_type(self):
        return "Savings Account"

class LoanAccount(BankAccount):
    def __init__(self, owner, balance, credit_limit, currency="USD"):
        super().__init__(owner, balance, currency)
        self.credit_limit = credit_limit

    def withdraw(self, amount):
        if amount <= self.balance + self.credit_limit:
            self.balance -= amount
            print(f"Withdrawn ${amount}. New balance: ${self.balance}")
        else:
            print("Credit limit exceeded")


    def account_type(self):
        return "Loan Account"

# Test SavingsAccount
ada = SavingsAccount("Ada", 1000, 0.05)
ada.deposit(500)
ada.apply_interest()
print(ada)

# Test LoanAccount
emeka = LoanAccount("Emeka", 200, 1000)
emeka.withdraw(500)   # should work — within credit limit
emeka.withdraw(2000)  # should fail — exceeds credit limit
print(emeka)