"""
API Demo 1 — Multiple API Calls
================================
A short conversation about why to learn the Claude API. Each call sends the
growing `messages` list back to Claude, so it remembers earlier turns.

Setup:
    pip install anthropic
    export ANTHROPIC_API_KEY=sk-ant-...
    python api-demo01.py
"""

import os
import sys

import anthropic

MODEL = "claude-haiku-4-5"

if not os.environ.get("ANTHROPIC_API_KEY"):
    sys.exit("Set your API key first:  export ANTHROPIC_API_KEY=sk-ant-...")

client = anthropic.Anthropic()  # reads ANTHROPIC_API_KEY from the environment
messages = []

questions = [
    "In one sentence, why should a developer learn the Claude API instead of just using the Claude app?",
    "Give one concrete example of that.",
]

for question in questions:
    messages.append({"role": "user", "content": question})

    response = client.messages.create(
        model=MODEL,
        max_tokens=50,
        messages=messages,
    )
    answer = response.content[0].text
    messages.append({"role": "assistant", "content": answer})  # keep it in history

    print(f"you> {question}")
    print(f"claude> {answer}\n")
