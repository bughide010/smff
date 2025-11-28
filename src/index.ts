import { StdioServerTransport } from "@modelcontextprotocol/sdk/node";
import { Server } from "@modelcontextprotocol/sdk/server";

console.log("MCP server: starting");

const server = new Server(
  {
    name: "test-server",
    version: "1.0.0",
  },
  {
    // No tools for now
  }
);

const transport = new StdioServerTransport();

server.connect(transport);

console.log("MCP server: ready");
