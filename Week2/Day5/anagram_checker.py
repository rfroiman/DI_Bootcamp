import os

class AnagramChecker:

    def __init__(self, file_path=os.path.join(os.path.dirname(__file__), "sowpods.txt")):
            with open(file_path, "r") as file:
                self.words = {
                word.strip().lower()
                for word in file
                if word.strip()
            }

    def is_valid_word(self, word):
        return word.lower() in self.words

    def is_anagram(self, word1, word2):
        return sorted(word1.lower()) == sorted(word2.lower())

    def get_anagrams(self, word):
        anagrams = []

        for current_word in self.words:
            if current_word != word.lower() and self.is_anagram(word, current_word):
                anagrams.append(current_word)

        return anagrams