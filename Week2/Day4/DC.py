import string
import re


class Text:
    def __init__(self, text):
        self.text = text

    def word_frequency(self, word):
        words = self.text.split()
        count = words.count(word)

        if count == 0:
            return None

        return count

    def most_common_word(self):
        words = self.text.split()
        word_count = {}

        for word in words:
            word_count[word] = word_count.get(word, 0) + 1

        if not word_count:
            return None

        return max(word_count, key=word_count.get)

    def unique_words(self):
        words = self.text.split()
        return list(set(words))

    @classmethod
    def from_file(cls, file_path):
        with open(file_path, "r") as file:
            text = file.read()

        return cls(text)


class TextModification(Text):
    def remove_punctuation(self):
        translator = str.maketrans("", "", string.punctuation)
        return self.text.translate(translator)

    def remove_stop_words(self):
        stop_words = {
            "a", "an", "the", "and", "or", "but", "is", "are",
            "am", "be", "been", "being", "to", "of", "in", "on",
            "for", "with", "as", "at", "by", "from", "this",
            "that", "these", "those", "it", "its", "was", "were",
            "i", "you", "he", "she", "we", "they", "my", "your",
            "his", "her", "our", "their"
        }

        words = self.text.split()

        filtered_words = [
            word for word in words
            if word.lower() not in stop_words
        ]

        return " ".join(filtered_words)

    def remove_special_characters(self):
        return re.sub(r"[^a-zA-Z0-9\s]", "", self.text)


# =========================
# TEST
# =========================

text = Text(
    "This is a simple text. This text contains several words, "
    "and this is an example."
)

print("Word frequency:")
print(text.word_frequency("text"))

print("\nMost common word:")
print(text.most_common_word())

print("\nUnique words:")
print(text.unique_words())


# TextModification
modified_text = TextModification(
    "Hello! This is a simple text, with special characters @#$%."
)

print("\nWithout punctuation:")
print(modified_text.remove_punctuation())

print("\nWithout stop words:")
print(modified_text.remove_stop_words())

print("\nWithout special characters:")
print(modified_text.remove_special_characters())


# =========================
# FROM FILE
# =========================

import os

file_path = os.path.join(os.path.dirname(__file__), 'sample.txt')

file_text = Text.from_file(file_path)
print(file_text.text)
print(file_text.most_common_word())