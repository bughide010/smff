import express from "express";

const app = express();
app.use(express.json());

app.post("/", (req, res) => {
    const { method, id } = req.body;

    // Minimal valid MCP response for scanner
    if (method === "initialize") {
        return res.json({
            jsonrpc: "2.0",
            id,
            result: {
                protocolVersion: "2025-06-18",
                serverInfo: {
                    name: "test-mcp-server",
                    version: "1.0.0"
                },
                capabilities: {}
            }
        });
    }

    return res.json({
        jsonrpc: "2.0",
        id,
        error: {
            code: -32601,
            message: "Method not found"
        }
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("MCP server running on port " + port);
});
