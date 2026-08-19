"""
API Demo 2b — Temperature Is Deprecated on the Newest Models
==============================================================
Note: as of late 2026, Anthropic's newest flagship models (Claude Sonnet 5,
Claude Opus 5 and later) have DEPRECATED `temperature` — they manage output
variability internally via "adaptive thinking" instead.

This demo shows both halves of that story on claude-sonnet-5:
  1. Passing `temperature` fails with a 400 error (proof, not just a claim).
  2. The current alternative: adaptive thinking + the `effort` parameter,
     which steers how much the model reasons before answering — "low" for
     quick answers, "high" for deeper, more considered ones.

Setup:
    pip install anthropic
    export ANTHROPIC_API_KEY=sk-ant-...
    python api-demo02b.py
"""

import os
import sys

import anthropic

MODEL = "claude-sonnet-5"
PROMPT = "Give a catchy 5-word slogan for a coffee shop."

if not os.environ.get("ANTHROPIC_API_KEY"):
    sys.exit("Set your API key first:  export ANTHROPIC_API_KEY=sk-ant-...")

client = anthropic.Anthropic()  # reads ANTHROPIC_API_KEY from the environment


# 1. Prove the deprecation: `temperature` now raises a 400 error on this model.
print("=== 1. Trying temperature on claude-sonnet-5 (expected to fail) ===")
try:
    client.messages.create(
        model=MODEL,
        max_tokens=30,
        temperature=1.0,
        messages=[{"role": "user", "content": PROMPT}],
    )
except anthropic.BadRequestError as e:
    print(f"Got the expected error: {e.message}\n")


# 2. The replacement: adaptive thinking, steered by `effort` (low vs high).
print("=== 2. Using adaptive thinking + effort instead ===")
for effort in ["low", "high"]:
    response = client.messages.create(
        model=MODEL,
        max_tokens=1024,
        thinking={"type": "adaptive"},
        output_config={"effort": effort},
        messages=[{"role": "user", "content": PROMPT}],
    )

    thinking_tokens = response.usage.output_tokens_details.thinking_tokens
    answer = next(block.text for block in response.content if block.type == "text")

    print(f"--- effort={effort} (thinking_tokens={thinking_tokens}) ---")
    print(answer.strip(), "\n")
