# simple list

names = ["Vijay", "Ajay", "Sanjay", "Arjun", "Ajay"]
ages = [15,12,19,18,20,25, 1, 100]

### Remove data from an List
# popped = names.pop() # remove element based on index number
# popped = names.pop(1)
# print(popped)
# names.remove("Ajay") # Remove element based on element name
# print(names)



### Adding data to List
# names.append("Karan") # Last me data ko add krta hai
# names.insert(1, "Karan") # kisi bhi index pe add krne k liye



### Update Data on an index number
# names[1] = "Ajay Kumar"



### Read element of an index number
# print(names[1])



### find length of the list
# length_list = len(names)
# print(length_list)
# or
# print(len(names))


### List slicing
# new_list = names[1:3]
# new_list = names[1:]
# new_list = names[:3]
# new_list = names[:]
# new_list = names[::2]
# print(new_list)



#### count number of occurence of an element
# print(names.count("Arjun"))



### find the index of an element
# print(names.index("Sanjay"))



### sort the List in Assending order based on alphanumeric casing
# names.sort()
# ages.sort()
# print(names, ages)



### Reverse the List 
# names.reverse()
# print(names)



### sort the List in Descending order based on alphanumeric casing
# names.sort()
# names.reverse()
# ages.sort()
# ages.reverse()
# print(names, ages)



### Empty the List
# names.clear()
# print(names)



### find minimum or maximum in a List
# minimum = min(ages)
# maximum = max(ages)
# print(minimum, maximum)



### Add all items in List
# total_sum = sum(ages)
# print(total_sum)



### Loop through List
# manual method
# names[0] += " Kumar" 

# for i in names:
#    print(i)

# for i in range(len(names)):
#   names[i] += " Kumar"

# print(names)



### List Comprehensions
# names2 = [x + " Kumar" for x in names]
# print(names2)

# 1. build a lsit of quare of items from 1 to 10
# squared_list = [1,4,9,16,25,36,49,64,81,100]
# squared_list = []

# for x in range(1,10):
#    squared_list.append(x**2)

# squared_list = [x**2 for x in range(1,10)]

# 2. build a lsit of quare of items from 1 to 10, where the number is even

# squared_list = []
# for x in range(1,10):
#   if(x % 2 == 0):
#       squared_list.append(x**2)


# squared_list = [x**2 for x in range(2,10,2)]
squared_list = [x**2 for x in range(1,10) if x % 2 == 0]
print(squared_list)
