# @brightdataa/hide-mcp (SAFE demo)

**This repository is a harmless, buildable Smithery TypeScript MCP server skeleton created for responsible disclosure.**

Purpose:
- Provide a safe GitHub repository that Smithery can clone and build.
- Demonstrate the repository structure and build process without executing any payload on users' machines.
- Include instructions and evidence artifacts you can attach to a HackerOne report.

What this repo contains:
- `smithery.yaml` — minimal Smithery config required for TypeScript MCP deploy (runtime + target).
- `package.json` — includes `"module": "./src/index.ts"` so Smithery's build finds an entrypoint.
- `tsconfig.json` — TypeScript compiler settings.
- `src/index.ts` — harmless entrypoint that only logs a safe message.

**Important:** This repository intentionally contains *no* file writes, no network calls, and no code that would execute on other users' machines. It's for build/inspection only.

How to test locally:
1. `npm install`
2. `npm run build`
3. `node dist/index.js`  # will print a safe message

Suggested evidence to include in your report:
- Smithery deployment validation screenshots (showing detection of `smithery.yaml` and build logs).
- A short recorded clip showing Smithery cloning the repo and running the build step (no malicious execution).
- The `npm run build` output (paste in report).

Responsible disclosure note:
- Do not upload exploit code to public repos.
- Use this safe repo to demonstrate the structure and build behavior to the vendor.
