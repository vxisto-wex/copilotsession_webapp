# Instruções para Prompts Reutilizáveis

Este arquivo contém instruções passo a passo, exemplos de prompts reutilizáveis e modelos prontos para automação via Coding Agent. Use estes exemplos para agilizar tarefas como pedido de features, adição de testes e documentação.

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

## Dicas de Uso

- Use ou adapte cada bloco acima para prompting direto ou automação com Coding Agent.
- Personalize os campos `description`, `tools`, etc., conforme o contexto.
- Ajuste as etapas conforme o fluxo necessário.

---
