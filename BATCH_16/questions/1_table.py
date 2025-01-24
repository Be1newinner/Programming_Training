"""
Q.1
Table print krni hai!
output:
2 x 1 = 2
2 x 2 = 4
2 x 3 = 6
2 x 4 = 8
2 x 5 = 10
2 x 6 = 12
2 x 7 = 14
2 x 8 = 16
2 x 9 = 18
2 x 10 = 20
"""

# Simple method using for loop
"""
for i in range(1,11):
    print("2 x " + str(i) + " = " + str(2 * i))
    
"""

# Simple method using for loop and format string method

# 2 x 2 = 4

for i in range(1,11):
    print(f"2 x {i} = {i * 2}")

