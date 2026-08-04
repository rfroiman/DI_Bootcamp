# Challenge 1: Letter Index Dictionary

my_word = input("Enter a word: ")

dic = {}

for index, letter in enumerate(my_word):
    if letter in dic:
        dic[letter].append(index)
    else:
        dic[letter] = [index]

print(dic)

#Challenge 2: Affordable Items

items_purchase = {
    "Water": "$1",
    "Bread": "$3",
    "TV": "$1,000",
    "Fertilizer": "$20"
}

wallet = "$300"

# remove dollar sign and the commas
wallet = int(wallet.replace("$", "").replace(",", ""))

basket = []

for item, price in items_purchase.items():
    price = int(price.replace("$", "").replace(",", ""))
    if wallet >= price:
        basket.append(item)
        wallet -= price

if basket == []:
    print("Nothing")
else:
    print(sorted(basket))