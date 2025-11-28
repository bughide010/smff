import {
  Server,
  StdioServerTransport
} from "@modelcontextprotocol/sdk";

console.log("MCP server: starting");

const server = new Server(
  {
    name: "test-server",
    version: "1.0.0",
  },
  {}
);

const transport = new StdioServerTransport();
server.connect(transport);

console.log("MCP server: ready");
