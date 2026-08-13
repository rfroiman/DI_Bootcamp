from anagram_checker import AnagramChecker


def main():
    checker = AnagramChecker()

    while True:
        print("\n*** ANAGRAM CHECKER ***")
        print("Enter a word to find its anagrams.")
        print("Enter 'exit' to quit.")

        word = input("Your word: ").strip()

        if word.lower() == "exit":
            print("Goodbye!")
            break

        if not word.isalpha():
            print("Error: Please enter a word containing letters only.")
            continue

        if not checker.is_valid_word(word):
            print(f"\nYour word: {word}")
            print("This is not a valid word.")
            continue

        anagrams = checker.get_anagrams(word)

        print(f"\nYour word: {word}")
        print("This is a valid word.")

        if anagrams:
            print(f"Anagrams for your word: {', '.join(anagrams)}")
        else:
            print("No anagrams found.")


if __name__ == "__main__":
    main()