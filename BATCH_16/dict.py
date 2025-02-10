# Dictionary, Object

"""
name = "Vijay"
age = 25
roll = 1

name1 = "Ajay"
age1 = 30
roll1 = 2

name2 = "Ajay"
age2 = 30
roll2 = 2


"""

##### CRUD OPERATIONS OF DICTIONARY

### CREATE 

vijay = {
   "name": "Vijay",
   "age": 25,
   "roll": 1
}

ajay = {
   "name": "Ajay",
   "age": 30,
   "roll": 2
}

### READ

print(vijay)
print(type(vijay))
# print(ajay["class"]) # Output => ERROR
# print(ajay.get("class")) # Output => None

print(ajay.get("class", 1)) # Output => 1

### UPDATE

# vijay["name"] = "Vijay Kumar"

# CREATE NEW KEY

vijay["class"] = "1st"


### DELETE KEYs

del vijay["roll"]

print(vijay)
