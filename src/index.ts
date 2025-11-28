import { Server, StdioServerTransport } from "@modelcontextprotocol/sdk";

console.log("MCP server: starting");

const server = new Server(
  {
    name: "test-server",
    version: "1.0.0"
  },
  {}
);

server.connect(new StdioServerTransport());

console.log("MCP server: ready");
