'''
# TOPIC : SET

methods:
1. add(): Adds an element to the set.
2. clear(): Removes all elements from the set.
3. copy(): Returns a shallow copy of the set.
4. discard(): Removes an element from the set if it exists. No error is raised if the element is not found.
5. remove(): Removes an element from the set. Raises a KeyError if the element is not present.
6. pop(): Removes and returns a random element from the set. This is an unordered operation, so you can't predict which element will be removed.
7. in operator
8. type operator
'''

## unordered
## Unique Data => No duplicate data 



'''
age_list = [15,12,16,13,12,13,15,16,16,16]

# Convert list to set, to remove duplicate data
age_list_set = set(age_list)

for x in age_list_set:
    print(x)

# Print Type of set
print(type(age)) # output: set

'''

age = {15,12,13,16, 17, 16}

# print(age)

# age.add(11)
# age.add(12)

# age.clear()

age.remove(15) # Return None
# age.remove(18) # KEY ERROR

age.discard(18) # No Error if data doesn't exist

print(age)
