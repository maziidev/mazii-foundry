## STAGE 2:  OOP — Classes & Objects

### Core Concept

A class is a blueprint. An object is an instance built from that blueprint.
Each instance is independent — its own data, its own state.

### Structure

```python
class ClassName:

    def __init__(self, param1, param2):
        self.param1 = param1   # instance attribute
        self.param2 = param2

    def method(self):
        # self refers to the instance itself
        return self.param1
```

### Key Rules

- `__init__` runs automatically when creating an instance
- `self` is mandatory as the first parameter of every method
- `self.attribute` stores data on the specific instance
- Default parameter values go in `__init__` signature

### Creating Instances

```python
obj1 = ClassName("value1", "value2")
obj2 = ClassName("other1", "other2")

obj1.method()   # calls method on obj1
obj2.method()   # calls method on obj2 — completely independent
```

### Vocabulary

| Term | Meaning |
|------|---------|
| Class | The blueprint |
| Instance/Object | Built from the blueprint |
| Attribute | Data stored on the object |
| Method | Function defined inside a class |
| Constructor | `__init__` — runs on creation |
| self | Reference to the current instance |

### Example — BankAccount

```python
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
            self.balance -= amount
            print(f"Withdrawn ${amount} new balance: ${self.balance}")
        else:
            print("Insufficient Funds")

    def get_balance(self):
        print(f"Account owner: {self.owner} | Balance: ${self.balance} {self.currency}")
```

## Inheritance & Polymorphism

### Core Concept

Inheritance lets a child class build on top of a parent class.
The child gets all parent methods and attributes for free.
Use it to avoid repeating code across similar classes.

### Syntax

```python
class Child(Parent):
    def __init__(self, new_param, *parent_params):
        super().__init__(*parent_params)  # always call first
        self.new_param = new_param        # then add new attributes
```

### Rules

- `class Child(Parent)` — inherit everything from Parent
- `super().__init__()` — call parent constructor first
- Child can ADD new attributes and methods
- Child can OVERRIDE existing parent methods
- Always call `super().__init__()` before adding new attributes

### Polymorphism

Same method name — different behaviour per class.

```python
class BankAccount:
    def account_type(self):
        return "Standard Account"

class SavingsAccount(BankAccount):
    def account_type(self):       # overrides parent
        return "Savings Account"

# Same call — different result
for account in accounts:
    print(account.account_type())
```

### Overriding Methods

```python
class LoanAccount(BankAccount):
    def withdraw(self, amount):           # overrides parent withdraw
        if amount <= self.balance + self.credit_limit:
            self.balance -= amount
            print(f"Withdrawn ${amount}. New balance: ${self.balance}")
        else:
            print("Credit limit exceeded")
```

### Example Structure

```
BankAccount          ← parent
├── SavingsAccount   ← child, adds interest_rate, apply_interest()
└── LoanAccount      ← child, adds credit_limit, overrides withdraw()
```

### Key Vocabulary

| Term | Meaning |
|------|---------|
| Parent/Base class | The class being inherited from |
| Child/Derived class | The class that inherits |
| super() | Reference to the parent class |
| Override | Redefine a parent method in the child |
| Polymorphism | Same method name, different behaviour |

## Magic Methods (Dunder Methods)

### What They Are

Special methods Python calls automatically in certain situations.
Marked with double underscores on both sides: `__method__`
Called "dunder methods" — short for double underscore.

### Why They Matter

Without them — your objects are opaque and unusable as types.
With them — your classes behave like built-in Python types.
Critical for the Vector/Matrix project — enables `v1 + v2`, `print(v1)`.

### Display Methods

```python
def __str__(self):
    # called by print() — human readable
    return f"BankAccount({self.owner}, ${self.balance})"

def __repr__(self):
    # called by repr() — developer/debug readable
    # should look like code that recreates the object
    return f"BankAccount(owner='{self.owner}', balance={self.balance})"
```

### Comparison & Truth Methods

```python
def __bool__(self):
    return self.balance > 0      # truthy if balance > 0

def __eq__(self, other):
    return self.balance == other.balance   # ==

def __gt__(self, other):
    return self.balance > other.balance    # >

def __lt__(self, other):
    return self.balance < other.balance    #
```

### Operator Overloading

```python
def __add__(self, other):
    # defines what + means between two objects
    return BankAccount(
        f"{self.owner}+{other.owner}",
        self.balance + other.balance
    )

def __len__(self):
    return int(self.balance)    # defines len(account)
```

### Callable Objects

```python
def __call__(self, amount):
    # makes object callable like a function
    self.deposit(amount)
    return self.balance

account(200)   # calls __call__
```

### Common Magic Methods Reference

| Method | Triggered by |
|--------|-------------|
| `__init__` | `ClassName()` |
| `__str__` | `print(obj)`, `str(obj)` |
| `__repr__` | `repr(obj)`, REPL display |
| `__bool__` | `bool(obj)`, `if obj:` |
| `__len__` | `len(obj)` |
| `__add__` | `obj1 + obj2` |
| `__eq__` | `obj1 == obj2` |
| `__gt__` | `obj1 > obj2` |
| `__call__` | `obj()` |

## Advanced Python Concepts

---

### Decorators

A function that wraps another function to add behaviour.

```python
from functools import wraps

def logger(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        print(f"Calling: {func.__name__}")
        result = func(*args, **kwargs)
        print(f"{func.__name__} returned: {result}")
        return result
    return wrapper

@logger
def calculate_grade(score: float) -> str:
    if score >= 70:
        return "A"
    elif score >= 50:
        return "B"
    else:
        return "F"
```

---

### Generators & yield

Produce values one at a time — never all at once.
Critical for large ML datasets.

```python
def generate_batches(data, batch_size):
    for i in range(0, len(data), batch_size):
        yield data[i:i + batch_size]

# Generator expression
squares = (x ** 2 for x in range(1000000))  # no memory explosion
```

---

### Iterators & Iterables

- Iterable: anything you can loop over
- Iterator: produces values one at a time via next()
- for loop = iter() + repeated next() + catches StopIteration

```python
class CountUp:
    def __init__(self, limit):
        self.limit = limit
        self.current = 0

    def __iter__(self):
        return self

    def __next__(self):
        if self.current >= self.limit:
            raise StopIteration
        value = self.current
        self.current += 1
        return value
```

---

### Custom Context Managers

```python
class DatabaseConnection:
    def __enter__(self):
        print("Connecting...")
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        print("Closing connection")
        return False   # don't suppress exceptions

with DatabaseConnection() as conn:
    pass   # connection closes automatically
```

---

### Type Hints

```python
from typing import Optional, Union, List, Dict

def calculate_grade(score: float) -> str: ...
def find_student(name: str) -> Optional[dict]: ...
def process(value: Union[int, float]) -> float: ...
```

---

### collections Module

```python
from collections import defaultdict, Counter, deque, namedtuple

# defaultdict — no KeyError on missing keys
word_count = defaultdict(int)
word_count["python"] += 1

# Counter — count occurrences automatically
counts = Counter([1, 2, 1, 3, 1, 2])  # Counter({1:3, 2:2, 3:1})
counts.most_common(2)                  # [(1,3), (2,2)]

# deque — fast append/pop from both ends O(1)
q = deque([1, 2, 3])
q.appendleft(0)
q.popleft()

# namedtuple — tuple with named fields
Point = namedtuple("Point", ["x", "y"])
p = Point(10, 20)
p.x   # 10
```

---

### itertools Module

```python
import itertools

itertools.count(1, 2)              # infinite: 1, 3, 5, 7...
itertools.chain([1,2], [3,4])      # 1, 2, 3, 4
itertools.combinations("ABC", 2)   # (A,B), (A,C), (B,C)
itertools.permutations("ABC", 2)   # all orderings of 2
```

---

### functools Module

```python
from functools import partial, reduce, lru_cache

# partial — pre-fill arguments
square = partial(pow, exp=2)

# reduce — collapse list to single value
total = reduce(lambda acc, x: acc + x, [1,2,3,4,5])  # 15

# lru_cache — cache results, avoid recalculation
@lru_cache(maxsize=128)
def fibonacci(n):
    if n < 2: return n
    return fibonacci(n-1) + fibonacci(n-2)
```

---

### Memory Management

```python
import sys, gc

# Reference counting
a = [1, 2, 3]
sys.getrefcount(a)   # how many references exist

# Manual garbage collection
gc.collect()
```

---

### The GIL

CPython allows only ONE thread to execute at a time.

| Task Type | Use |
|-----------|-----|
| CPU-bound (ML training, math) | multiprocessing |
| I/O-bound (files, APIs, DB) | threading or asyncio |

---

### Concurrency

```python
# Threading — I/O bound
import threading
t = threading.Thread(target=func, args=(arg,))
t.start()
t.join()

# Multiprocessing — CPU bound
from multiprocessing import Pool
with Pool(4) as p:
    results = p.map(func, data)

# asyncio — async I/O
import asyncio
async def main():
    await asyncio.gather(task1(), task2())
asyncio.run(main())
```
