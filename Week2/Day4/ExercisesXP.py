# ==========================================
# EXERCISE 1 - RANDOM SENTENCE GENERATOR
# ==========================================

import random
import os


def get_words_from_file(file_path):
    with open(file_path, "r") as file:
        content = file.read()

    words = content.split()
    return words


def get_random_sentence(sentence_length):
    file_path = os.path.join(os.path.dirname(__file__), "words.txt")

    words = get_words_from_file(file_path)

    selected_words = []

    for i in range(sentence_length):
        word = random.choice(words)
        selected_words.append(word)

    sentence = " ".join(selected_words).lower()

    return sentence


def main():
    print("This program generates a random sentence.")
    print("The sentence will contain between 2 and 20 words.")

    try:
        sentence_length = int(
            input("How many words should the sentence contain? ")
        )

        if sentence_length < 2 or sentence_length > 20:
            print("Error: Please enter a number between 2 and 20.")
            return

        sentence = get_random_sentence(sentence_length)

        print("\nRandom sentence:")
        print(sentence)

    except ValueError:
        print("Error: Please enter a valid integer.")


if __name__ == "__main__":
    main()


# ==========================================
# EXERCISE 2 - WORKING WITH JSON
# ==========================================

import json


sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""


# Load the JSON string
data = json.loads(sampleJson)


# Access the nested salary key
salary = data["company"]["employee"]["payable"]["salary"]

print("\nSalary:", salary)


# Add birth_date to the employee dictionary
data["company"]["employee"]["birth_date"] = "1995-06-15"


# Save the modified JSON
file_path = os.path.join(
    os.path.dirname(__file__),
    "modified_employee.json"
)

with open(file_path, "w") as file:
    json.dump(data, file, indent=4)


print("Modified JSON saved successfully.")