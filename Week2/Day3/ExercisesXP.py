# =========================
# EXERCISE 1 - CURRENCIES
# =========================

class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    def __str__(self):
        return f"{self.amount} {self.currency}s"

    def __repr__(self):
        return f"{self.amount} {self.currency}s"

    def __int__(self):
        return self.amount

    def __add__(self, other):
        if isinstance(other, Currency):
            if self.currency != other.currency:
                raise TypeError(
                    f"Cannot add between Currency type <{self.currency}> "
                    f"and <{other.currency}>"
                )
            return self.amount + other.amount

        return self.amount + other

    def __iadd__(self, other):
        if isinstance(other, Currency):
            if self.currency != other.currency:
                raise TypeError(
                    f"Cannot add between Currency type <{self.currency}> "
                    f"and <{other.currency}>"
                )
            self.amount += other.amount
        else:
            self.amount += other

        return self


c1 = Currency("dollar", 5)
c2 = Currency("dollar", 10)
c3 = Currency("shekel", 1)
c4 = Currency("shekel", 10)

print(c1)
print(int(c1))
print(repr(c1))
print(c1 + 5)
print(c1 + c2)
print(c1)

c1 += 5
print(c1)

c1 += c2
print(c1)

#print(c1 + c3)

# =========================
# EXERCISE 3 - STRING MODULE
# =========================

import string
import random

letters = string.ascii_letters

random_string = ""

for i in range(5):
    random_string += random.choice(letters)

print(random_string)


# =========================
# EXERCISE 4 - CURRENT DATE
# =========================

from datetime import datetime

def current_date():
    today = datetime.now()
    print(today.date())

current_date()


# =========================
# EXERCISE 5 - TIME UNTIL JANUARY 1ST
# =========================

from datetime import datetime

def time_until_new_year():
    now = datetime.now()
    next_year = now.year + 1

    january_first = datetime(next_year, 1, 1)

    time_left = january_first - now

    print(f"Time left until January 1st: {time_left}")

time_until_new_year()


# =========================
# EXERCISE 6 - BIRTHDAY AND MINUTES
# =========================

from datetime import datetime

def minutes_lived(birthdate):
    birth_date = datetime.strptime(birthdate, "%Y-%m-%d")
    now = datetime.now()

    difference = now - birth_date
    minutes = difference.total_seconds() / 60

    print(f"You have lived approximately {int(minutes)} minutes.")

minutes_lived("1972-01-01")


# =========================
# EXERCISE 7 - FAKER MODULE
# =========================

from faker import Faker

fake = Faker()

users = []


def add_users(number):
    for i in range(number):
        user = {
            "name": fake.name(),
            "address": fake.address(),
            "language_code": fake.language_code()
        }

        users.append(user)


add_users(5)

print(users)