
from mcp.server.fastmcp import FastMCP

# Create the MCP server
mcp = FastMCP("Demo")


# Register a tool that adds two integers
@mcp.tool()
def add(a: int, b: int) -> int:
    """Return the sum of two integers."""
    return a + b


# Register a dynamic greeting resource
@mcp.resource("greeting://{name}")
def greet(name: str) -> str:
    """Return a personalized greeting."""
    return f"Hello, {name}!"


# Start the MCP server using STDIO
if __name__ == "__main__":
    mcp.run(transport="stdio")
