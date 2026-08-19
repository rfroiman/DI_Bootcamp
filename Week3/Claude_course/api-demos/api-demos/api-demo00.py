# Your basic setup
import anthropic

client = anthropic.Anthropic() # reads ANTHROPIC_API_KEY from the environment
# client = anthropic.Anthropic(api_key="") - if you didn't add your key as an environment variable

MODEL = "claude-haiku-4-5"

message = client.messages.create(
    model=MODEL,
    max_tokens=10,
    messages=[{"role": "user", "content": "Hello, world"}],
)

# If the only thing you want to print is the text of the Claude's responce
print(message.content[0].text) 
