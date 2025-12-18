## Instructions for Reusable Prompts

This file contains examples that can be used during the hands-on session. Feel free to explore the options and use whichever you prefer — one, several, or all of them 😊.

If you have time and a good idea, you can also create your own reusable prompt.

As an additional reference, we recommend Awesome Copilot, a repository with several examples of reusable prompts that may serve as inspiration:
👉 [Awesome Copilot] (https://github.com/github/awesome-copilot)

## 1. Add new feature: change text color via a button

### Prompt Template

```markdown
---
mode: 'agent'
description: 'Add feature: change text color via button'
tools: ['changes', 'codebase', 'editFiles', 'runCommands', 'runTasks', 'search', 'githubRepo', 'github']
---

Please add a new feature to the application that allows changing the color of the text displayed in the interface via a button. The user must be able to select the desired color, and the text on the screen should update immediately after selection.

**Acceptance criteria:**
- Button visible to the user.
- On click, offers color options.
- Text color changes immediately after selection.
```

---

## 2. Add unit tests for current application functions

### Prompt Template

```markdown
---
mode: 'agent'
description: 'Add unit tests for current functions'
tools: ['changes', 'codebase', 'editFiles', 'runCommands', 'findTestFiles', 'search', 'githubRepo', 'terminalLastCommand', 'github']
---

Add unit tests for all main functions currently implemented in the application. Ensure at least 80% coverage and use the project's default testing tool (for example: Jest, unittest, pytest, etc.).

Include example tests for both success and failure cases.
```

---

## 3. Add documentation to the project

### Prompt Template

```markdown
---
mode: 'agent'
description: 'Add documentation to the project'
tools: ['changes', 'editFiles', 'runCommands', 'search', 'githubRepo', 'github']
---

Create or improve the project's documentation, including:
- Introduction and objectives.
- Installation and running instructions.
- Basic usage examples.
- Sections for developers (code structure, contribution guidelines).

Use Markdown and internal links when necessary.
```

---


## Bonus

### Do even more with the MCP Server

Create a file named mcp.json inside the .vscode directory of your repository with the following content and use the GitHub's MCP Server to delegate tasks to the GitHub Copilot Coding Agent.

```json
{
  "servers": {
    "github-remote": {
      "type": "http",
      "url": "https://api.githubcopilot.com/mcp/",
      "headers": {
        "X-MCP-Toolsets": "actions, code_security, dependabot, discussions, issues, orgs, projects, pull_requests, repos, secret_protection, security_advisories, copilot, copilot_spaces"
      }
    }
  }
}
```

After creating the file, start the MCP Server and explore the various tools available in it through your prompts and in GitHub Copilot Chat.

```
