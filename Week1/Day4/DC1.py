MATRIX_STR = '''
7ir
Tsi
h%x
i ?
sM#
$a 
#t%
'''

# Step 1: Transform the string into a 2D list
matrix = []

rows = MATRIX_STR.strip().split("\n")

#print(rows)

for row in rows:
    matrix.append(list(row))

#print(matrix)

# Step 2, 3 and 4:
decoded_message = ""
symbol_found = False

rows_count = len(matrix)
cols_count = len(matrix[0])

for col in range(cols_count):
    for row in range(rows_count):

        char = matrix[row][col]
        #print (char)

        if char.isalpha():
            if symbol_found and decoded_message != "":
                decoded_message += " "
            decoded_message += char
            #print(decoded_message)
            symbol_found = False
        else:
            if decoded_message != "":
                symbol_found = True

# Step 5: Print the decoded message
print(decoded_message)