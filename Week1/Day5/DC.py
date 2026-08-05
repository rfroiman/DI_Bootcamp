# ==========================================
# Challenge 1: Sorting
# ==========================================

# Step 1: Get Input
words = input("Enter words separated by commas: ")

# Step 2: Split the String
word_list = words.split(",")

# Step 3: Sort the List
word_list.sort()

# Step 4: Join the Sorted List
sorted_words = ",".join(word_list)

# Step 5: Print the Result
print("Sorted words:", sorted_words)


# ==========================================
# Challenge 2: Longest Word
# ==========================================

# Step 1: Define the Function
def longest_word(sentence):

    # Step 2: Split the Sentence into Words
    words = sentence.split()

    # Step 3: Initialize Variables
    longest = words[0]

    # Step 4: Iterate Through the Words
    for word in words:

        # Step 5: Compare Word Lengths
        if len(word) > len(longest):
            longest = word

    # Step 6: Return the Longest Word
    return longest


# Tests
print(longest_word("Margaret's toy is a pretty doll."))
print(longest_word("A thing of beauty is a joy forever."))
print(longest_word("Forgetfulness is by all means powerless!"))