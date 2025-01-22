"""
## Initialise Variables
"""

age  = 30
age2 = 30
age3 = 0

"""## 1. Arithmetic Operators"""

# Add Operator
ages = age + 1
print(ages)

# Decrease Operator
ages = age - 1
print(ages)

# Multiply Operator
ages = age * 3
print(ages)

# Power Operator
ages = age ** 3
print(ages)

# Divide Operator
ages = age / 2
print(ages)

# Floor Division Operator
ages = age // 4
print(ages)

# Modulo or Modulus or Remainder Operator
ages = age % 4
print(ages)

"""## 2. comparison Operators"""

# Check if both are equal
print(age == age2)

# Less than
print(age < age2)

# Greater than
print(age > age2)

# Greater than or equal to
print(age >= age2)

# less than or equal to
print(age <= age2)

"""## 3. Logical Operators"""

# Logical And Operator
print( age < 50 and age2 > 20  )

# Logical Or Operator
print( age < 20 or age2 > 20  )

# Logical Or + and Operator
print( age < 20 or ( age2 > 40 and age3 == 0 ) )

# Logical not Operator
print( not(age < 20)  )