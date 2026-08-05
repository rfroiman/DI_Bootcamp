import random


# Starter code
wordslist = [
    'correction',
    'childish',
    'beach',
    'python',
    'assertive',
    'interference',
    'complete',
    'share',
    'credit card',
    'rush',
    'south'
]

word = random.choice(wordslist)


# Create hidden word

hidden_word = []

for letter in word:
    if letter == " ":
        hidden_word.append(" ")
    else:
        hidden_word.append("*")


# Hangman drawing

hangman_parts = [
    "HEAD",
    "BODY",
    "LEFT ARM",
    "RIGHT ARM",
    "LEFT LEG",
    "RIGHT LEG"
]


wrong_guesses = []
correct_guesses = []


# Display current game status

def display_game():

    print("\nWord:", "".join(hidden_word))

    print("Wrong guesses:", wrong_guesses)

    print("Missing parts:", 
          6 - len(wrong_guesses))


# Update the word after correct guess

def update_word(letter):

    for index in range(len(word)):

        if word[index].lower() == letter:
            hidden_word[index] = word[index]


# Check if player won

def check_win():

    return "*" not in hidden_word


# Main game loop

print("Welcome to Hangman!")

while True:

    display_game()

    guess = input("Guess a letter: ").lower()


    # Validate input

    if len(guess) != 1 or not guess.isalpha():

        print("Please enter only one letter.")

        continue


    # Check repeated letters

    if guess in correct_guesses or guess in wrong_guesses:

        print("You already guessed this letter.")

        continue


    # Correct guess

    if guess in word.lower():

        print("Correct!")

        correct_guesses.append(guess)

        update_word(guess)


    # Wrong guess

    else:

        print("Wrong!")

        wrong_guesses.append(guess)

        print("The gallows gets:", 
              hangman_parts[len(wrong_guesses)-1])


    # Check victory

    if check_win():

        display_game()

        print("\nCongratulations! You guessed the word:", word)

        break


    # Check defeat

    if len(wrong_guesses) == 6:

        print("\nGame Over!")

        print("The word was:", word)

        break