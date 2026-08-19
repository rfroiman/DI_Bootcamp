import anthropic

client = anthropic.Anthropic()
MODEL="claude-haiku-4-5"
PROMPT="Classify the ticket into exactly one category: BILLING, SHIPPING, PRODUCT or OTHER. Reply with the category word only. \n\nTicket: {t}"
        

tickets= [
    ("My card was charged 3 times for the order #123", "BILLING"),
    ("Package was delivered to the wrong address", "SHIPPING"),
    ("My product doesn't work", "PRODUCT"),
    ("Do you have a discount for soldiers?", "OTHER")
]

correct = 0

for ticket, expected in tickets:
    message = client.messages.create(
       model=MODEL,
       max_tokens=10,
       temperature=0.0,
       messages=[{"role": "user", "content": PROMPT.format(t=ticket)}]
    )

    got = message.content[0].text.strip().upper()
    if got == expected:
        correct += 1
    print(f"{got:8} expected {expected:8} | {ticket}")

print(f"score: {correct}/{len(tickets)}")