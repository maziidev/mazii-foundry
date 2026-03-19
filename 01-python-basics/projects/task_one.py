# INSTRUCTION
"""
Write a program that:

1. Loops through numbers **1 to 10**
2. If the number is even → print `"X is even"`
3. If the number is odd → print `"X is odd"`
4. But if the number is **6** → skip it entirely using `continue`

Replace `X` with the actual number.

Expected output should look like:
```
1 is odd
2 is even
3 is odd
4 is even
5 is odd
7 is odd
8 is even
9 is odd
10 is even
"""

for i in range(1, 10 + 1):
    if i == 6:
        continue
    if i % 2 == 0:
        print(f'{i} is Even')
    else:
        print(f"{i} is Odd")