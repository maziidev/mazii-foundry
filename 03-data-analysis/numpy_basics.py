import numpy as np

print("Numpy version:", np.__version__)

# Array creation

a = np.array([1, 2, 3, 4, 5])

matrix = np.array([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
])

print("ID Array:", a)
print("Shape:", a.shape)
print("2D Matrix:\n", matrix)
print("Matrix shape:", matrix.shape)
print("Dimensions:", matrix.ndim)
print("Total elements:", matrix.size)
print("Data type:", matrix.dtype)


# --- BUILT-IN ARRAY CREATION ---
print("\n-- Built-in Creators --")
print(np.zeros((3, 3)))           # 3x3 all zeros
print(np.ones((2, 4)))            # 2x4 all ones
print(np.arange(0, 10, 2))        # [0, 2, 4, 6, 8]
print(np.linspace(0, 1, 5))       # 5 evenly spaced from 0 to 1
print(np.eye(3))                  # 3x3 identity matrix

# --- RANDOM ARRAYS ---
print("\n-- Random --")
np.random.seed(42)
print(np.random.randint(0, 100, (3, 3)))  # random integers
print(np.random.randn(3, 3))              # standard normal distribution