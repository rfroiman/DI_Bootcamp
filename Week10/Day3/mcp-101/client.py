
import asyncio

from mcp import ClientSession, StdioServerParameters
from mcp.client.stdio import stdio_client
from pydantic import AnyUrl


# Configure the MCP server process
server_params = StdioServerParameters(
    command="mcp",
    args=["run", "server.py"],
    env=None,
)


async def run():
    # Start the server using STDIO
    async with stdio_client(server_params) as (read, write):

        # Create and initialize the client session
        async with ClientSession(read, write) as session:
            await session.initialize()

            # List available tools
            tools = await session.list_tools()
            print("Available tools:")
            for tool in tools.tools:
                print(f" - {tool.name}")

            # List available resources
            resources = await session.list_resources()
            print("\nAvailable resources:")
            for resource in resources.resources:
                print(f" - {resource.uri}")

            # List resource templates
            templates = await session.list_resource_templates()
            print("\nResource templates:")
            for template in templates.resourceTemplates:
                print(f" - {template.uriTemplate}")

            # Read the greeting resource
            greeting = await session.read_resource(
                AnyUrl("greeting://hello")
            )

            print("\nGreeting result:")
            for content in greeting.contents:
                print(content.text)

            # Call the add tool
            result = await session.call_tool(
                "add",
                arguments={"a": 1, "b": 7},
            )

            print("\nAdd tool result:")
            for content in result.content:
                if content.type == "text":
                    print(content.text)


if __name__ == "__main__":
    asyncio.run(run())
