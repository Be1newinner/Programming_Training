"""
## Simple if Conditions
"""

if 7 < 6:
    print("Vijay")

if 8 < 5:
  print("Kumar")

"""## if else conditions"""

if 7 < 6:
    print("Vijay")
    print("Vijay")
    print("Vijay")
else:
    print("kumar")
    print("kumar")
    print("kumar")

"""else if ladder"""

day = 4

if day == 1:
  print("it is monday!")
elif day == 2:
  print("it is Tuesday!")
elif day == 3:
  print("it is wednesday!")
else:
  print("it is other day!")

# nested if else

name = "Vijaya"
age = 20

if name == "Vijay":
  if age > 18:
    print("Access Granted!")
  else:
    print("Your Age is less than 19")
else:
  print("Name is Invalid")

# nested if else

name = input("What is your name!")
age = input("What is your age!")

if name == "Vijay":
  if int(age) > 18:
    print("Access Granted!")
  else:
    print("Your Age is less than 19")
else:
  print("Name is Invalid")

# Convert types

name = "Vijay"
age = "25"
marks = 25.23

age_int = float(age)
marks_int = int(marks)
marks_str = str(marks)

print(type(name))
print(type(age_int), age_int)
print(type(marks), marks_int)
print(type(marks_str), marks_str)

