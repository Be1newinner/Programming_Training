is_prime = True
to_find = int(input("enter a number to check!"))

for i in range(2,to_find):
    if(to_find % i == 0):
        is_prime = False
        break;
                
print(is_prime)
