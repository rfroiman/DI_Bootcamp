"""
API Demo 2 — Temperature
=========================
Asks the same question twice at a low and a high temperature, so you can see
how much the answers vary.

  temperature=0.0 -> more consistent, repeatable answers
  temperature=1.0 -> more varied, "creative" answers

Note: as of late 2026, Anthropic's newest flagship models (Claude Sonnet 5,
Claude Opus 5 and later) have DEPRECATED `temperature` — they manage output
variability internally via "adaptive thinking" instead, and reject any
non-default temperature with a 400 error. `temperature` still works
normally on Claude Haiku 4.5 and earlier models, so this demo uses Haiku 4.5
to keep the classic behavior visible.

Setup:
    pip install anthropic
    export ANTHROPIC_API_KEY=sk-ant-...
    python api-demo02.py
"""

import os
import sys

import anthropic

MODEL = "claude-haiku-4-5"
PROMPT = "Give a catchy 5-word slogan for a coffee shop."

if not os.environ.get("ANTHROPIC_API_KEY"):
    sys.exit("Set your API key first:  export ANTHROPIC_API_KEY=sk-ant-...")

client = anthropic.Anthropic()  # reads ANTHROPIC_API_KEY from the environment

for temperature in [0.0, 0.5, 1.0]:
    print(f"--- temperature={temperature} ---")
    for i in range(5):
        response = client.messages.create(
            model=MODEL,
            max_tokens=30,
            temperature=temperature,
            messages=[{"role": "user", "content": PROMPT}],
        )
        print(response.content[0].text.strip())
    print()
