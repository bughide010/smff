import {
  Server,
  StdioServerTransport
} from "@modelcontextprotocol/sdk/dist/cjs/index.cjs";

console.log("MCP server: starting");

const server = new Server(
  {
    name: "test-server",
    version: "1.0.0",
  },
  {
    // no tools
  }
);

const transport = new StdioServerTransport();
server.connect(transport);

console.log("MCP server: ready");
