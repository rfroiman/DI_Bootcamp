import anthropic

client = anthropic.Anthropic()
MODEL="claude-haiku-4-5"
#PROMPT="Classify the ticket into exactly one category: BILLING, SHIPPING, PRODUCT or OTHER. Reply with the category word only. \n\nTicket: {t}"

PROMPT="Classify the ticket into exactly one category: BILLING, SHIPPING, PRODUCT or OTHER.Reply with the category word only. \n\nTicket: {t}"
        

tickets= [
    "My card was charged 3 times for the order #123",
    "Package was delivered to the wrong address",
    "My product doesn't work",
    "Do you have a discount for soldiers?"
]

for ticket in tickets:
    message = client.messages.create(
       model=MODEL,
       max_tokens=10,
       temperature=0.0,
       messages=[{"role": "user", "content": PROMPT.format(t=ticket)}]
    )

    print(message.content[0].text)