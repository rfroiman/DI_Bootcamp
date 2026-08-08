import random

# Generate list of 20000 random numbers
list_of_numbers = [random.randint(0, 10000) for _ in range(20000)]

# Target number
target_number = 3728

# Function to find pairs
def find_pairs(numbers, target):

    pairs = set()
    seen = set()

    for number in numbers:

        complement = target - number

        # Check if the complement was already found
        if complement in seen:
            pairs.add((min(number, complement), max(number, complement)))

        # Add current number to seen numbers
        seen.add(number)

    return pairs


# Find and print pairs
result = find_pairs(list_of_numbers, target_number)

print("Pairs that sum to", target_number, ":")

for pair in result:
    print(pair[0], "and", pair[1], "sum to", target_number)