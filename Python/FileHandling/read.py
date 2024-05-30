# Reference File
# r for reading
# w for writing from 
# a for appening at the end of file
# x for creating

f = open("file.txt", "r")

# ############################# Reading File ###################

# Reading Complete File
# print(f.read())

# Reading a Line
# print(f.readline())
# print(f.readline())
# print(f.readline())

# Reading file till a limit
# print(f.read(2))

# Looping File
# for x in f:
#   print(x)


# ############################# Writing File ###################

# Writign from scracth
# f = open("file.txt", "w")
# f.write("Now the file has New content!")

# appending from end
# f = open("file.txt", "a")
# f.write("Now the file has more content!")


################################## Creating new File ########

# f = open("demofile.txt", "x")

################################## Removing File ########

# import os
# os.remove("demofile.txt")

