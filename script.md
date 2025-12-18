# Instruções para Prompts Reutilizáveis

### Este arquivo contém exemplos que você pode utilizar durante a hora do hands on. Explore as opções e utilize a que preferir (uma, ou todas ^^). Você também pode criar seu proprio prompt reutilizavel se tiver tempo e uma ideia boa. Segue aqui o Awesome Copilot, um repositório cheio de exemplos que você pode utilizar de prompts reutilzaveis. [Awesome Copilot] (https://github.com/github/awesome-copilot)
---

## 1. Adicionar nova funcionalidade: alterar a cor do texto através de um botão

### Modelo de Prompt

```markdown
---
mode: 'agent'
description: 'Adicionar funcionalidade: alterar a cor do texto via botão'
tools: ['changes', 'codebase', 'editFiles', 'runCommands', 'runTasks', 'search', 'githubRepo', 'github']
---

Por favor, adicione uma nova funcionalidade na aplicação que permita alterar a cor do texto exibido na interface através de um botão. O usuário deve selecionar a cor desejada, e o texto na tela deve refletir essa mudança automaticamente.

**Critérios de aceitação:**
- Botão visível para o usuário.
- Ao clicar, oferece opções de cores.
- Cor do texto muda imediatamente após a seleção.
```

---

## 2. Adicionar testes unitários para funções atuais da aplicação

### Modelo de Prompt

```markdown
---
mode: 'agent'
description: 'Adicionar testes unitários para funções atuais'
tools: ['changes', 'codebase', 'editFiles', 'runCommands', 'findTestFiles', 'search', 'githubRepo', 'terminalLastCommand', 'github']
---

Adicione testes unitários para todas as funções principais atualmente implementadas na aplicação. Garanta cobertura mínima de 80% e utilize a ferramenta de teste padrão do projeto (por exemplo: Jest, Vitest, etc).

Inclua exemplos de testes para casos de sucesso e falha.
```

---

## 3. Adicionar documentação ao projeto

### Modelo de Prompt

```markdown
---
mode: 'agent'
description: 'Adicionar documentação ao projeto'
tools: ['changes', 'editFiles', 'runCommands', 'search', 'githubRepo', 'github']
---

Crie ou melhore a documentação do projeto, incluindo:
- Introdução e objetivos.
- Instruções de instalação e execução.
- Exemplos de uso básico.
- Seções para desenvolvedores (estrutura do código, padrões de contribuição).

Utilize Markdown e links internos quando necessário.
```

---


## Bonus

### Faça ainda mais com o MCP Server

Crie um arquivo mcp.json dentro do diretorio .vscode do seu repositorio com o conteudo abaixo e use o MCP Server da GitHub para delegar tarefas ao GitHub Copilot Coding Agent.

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





Após criar o arquivo, inicie o MCP Server e explore as diversas ferramentas disponiveis nele em seus prompts e no GitHub Copilot Chat.#
