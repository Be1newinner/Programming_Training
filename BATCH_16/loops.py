# Range 0 to 9
"""
for i in range(10):
   print(i)

# Range 2 to 9
for i in range(2,10):
   print(i)

# Range 2 to 30 with step 3
for i in range(2,30,3):
   print(i)
   


#while loop
isRun = False
i = 0

while isRun == False:
   print("Vijay")
   i += 1
   if(i > 5):
      isRun = True



# nested for loop

for i in range(10):
    for j in range(5):
        print(i,j)
                
outer loop => 0 => 5 inner loop
outer loop => 1 => 5 inner loop
outer loop => 2 => 5 inner loop


*
**
***
****
*****
"""

for i in range(1,6):
    for j in range(i):
        print("*", end="")
    print("")
    


print("Hello", end="")
print("Hello")
print("Hello")
print("Hello")
print("Hello")
print("Hello")

