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

### CREATE  ---------------------------------------------------------------------- 

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

### READ  ----------------------------------------------------------------------

# print(vijay)
# print(type(vijay))
# print(ajay["class"]) # Output => ERROR
# print(ajay.get("class")) # Output => None

# print(ajay.get("class", 1)) # Output => 1

### UPDATE  ----------------------------------------------------------------------

# vijay["name"] = "Vijay Kumar"

# CREATE NEW KEY ******************************************

# vijay["class"] = "1st"


### DELETE KEYs ----------------------------------------------------------------------

# del vijay["roll"] # It will remove the 'roll' key from vijay dict. 

# print(vijay) # Output => {'name': 'Vijay', 'age': 25}


### clear -----------------------------------------------------------------------

# vijay.clear()

### deep copy dictionary ----------------------------------------------------------

# sanjay = vijay
# sanjay["name"] = "Sanjay"

### shallow copy ------------------------------------------------------------

# sanjay = vijay.copy()
# sanjay["name"] = "Sanjay"
# print("SANJAY => ", sanjay)

### in ( Membership ) operator ---------------------------------------------------------------

# print("name" in vijay) # Output => TRUE / FALSE

### len operator  -----------------------------------------------------

# print(len(vijay))


### Iteration --------------------------------------------------
##### value() method

# print(vijay.values())

# for item in vijay.values():
#    print(item)


##### keys()

# print(vijay.keys())

# for item in vijay.keys():
#   print(item)


##### Key value both => items()

# print(vijay.items())

# for x,y in vijay.items():
#   print(x, y)


##### pop method => del alternative 

# data = vijay.pop("roll")
# data = vijay.popitem()
# data,value = vijay.popitem()

# print(data, value)

# print("VIJAY => ", vijay)

### fromkeys ---------------------------------------------------------------------

# ls = ["name","age","roll", "class", "address"]

# name = dict.fromkeys(ls,None)
# print(name)


''' Questions -------------------------------------------------------------------

Q.1.  
 sentence = "The rock lives in mountains . The mountains lives is new york . " 

 


sentence = "The rock lives in mountains . The mountains lives in new york ." 
ls = sentence.split(" ")
data = {}

for x in ls:
    data[x] = data.get(x, 0) + 1  # {"The" : 1}


# for x in ls:
#   data[x] = data.get(x, 0) + 1


print(data)

'''
'''
Q.2. 
values = [-2,5,-3,5,0,1,-5,9]


output: 
0 => -2 => Negative
1 => 5 => Positive
2 => -3 => Negative



Q.3.

marks = {
neha: 80,
sanjay: 85,
shruti: 20,
vijay: 60,
arun: 65,
pankaj: 10
}


output: 

passed students ( Greater than 50 ): 
neha: 80
sanjay: 85,
vijay: 60,
arun: 65,


Q.4. 

numbers = [10, 23, 5, 29, 18, 7, 11, 35]

find Prime Numbers and Print in ascending order: 
 
the prime numbers are: 
5
7
11
23
29

Total Count: 5
Total Sum: 75
Average: 15

'''


