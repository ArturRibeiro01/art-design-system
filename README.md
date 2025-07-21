# Art Design System

Bem-vindo ao **Art Design System**, um sistema de design desenvolvido para criar componentes reutilizáveis, escaláveis e estilizados para interfaces de usuário modernas. Este repositório foi estruturado como um monorepo, utilizando diversas bibliotecas e ferramentas para facilitar o desenvolvimento, documentação e publicação dos pacotes.

## Estrutura do Projeto

O projeto utiliza um modelo baseado em **workspaces** do npm para gerenciar múltiplos pacotes. A estrutura principal contém:


## Pacotes Principais

1. **Docs (`packages/docs`)**  
   Diretório destinado à documentação e ao desenvolvimento visual interativo dos componentes utilizando **Storybook**. Aqui você pode visualizar e testar os componentes criados no pacote `react-components`.

2. **React Components (`packages/react-components`)**  
   Biblioteca de componentes React reutilizáveis. Este é o coração do sistema de design, onde os componentes estilizados e funcionais são desenvolvidos e exportados.

3. **Tokens (`packages/tokens`)**  
   Armazena os tokens de design (como paletas de cores, tamanhos, fontes, espaçamentos, entre outros). Estes tokens são baseados em **vanilla-extract** para garantir consistência no design do sistema.

4. **TSConfig (`packages/tsconfig`)**  
   Configurações compartilhadas de TypeScript para unificar os padrões de compilação entre os pacotes.

5. **ESLint Config (`packages/eslint-config`)**  
   Configurações de linting padronizadas, usadas para garantir a consistência e qualidade do código em todo o monorepo.

## Tecnologias Utilizadas

- **React**: Framework principal para o desenvolvimento de interfaces.
- **TypeScript**: Suporte a tipagem estática para melhorar a segurança e manutenção do código.
- **Storybook**: Ferramenta para desenvolvimento e visualização de componentes de forma isolada.
- **Vanilla Extract**: Biblioteca para gerenciamento de estilos com suporte a tipagem e escalabilidade.
- **TurboRepo**: Gerenciador de monorepos que otimiza a execução de tarefas (build, lint, etc.).
- **Vite**: Empacotador voltado para performance, utilizado no desenvolvimento.
- **ESLint**: Ferramenta de linting para manter um código uniforme e livre de erros.
- **Changesets**: Ferramenta para controle de versionamento e geração automática de changelogs.

## Scripts Disponíveis

Os scripts principais estão definidos no arquivo raiz `package.json`:

- **`npm install`**  
  Instala todas as dependências e sincroniza os pacotes no monorepo.

- **`npm run dev`**  
  Executa os processos de desenvolvimento em paralelo.

- **`npm run build`**  
  Realiza a build de todos os pacotes do projeto.

- **`npm run changeset`**  
  Cria um novo changeset para controle de mudanças e versionamento.

- **`npm run release`**  
  Faz o build do projeto, aplica o versionamento e publica os pacotes.

- **`npm run storybook -w packages/docs`**  
  Inicia o Storybook para visualizar os componentes desenvolvidos.

## Configuração Inicial

1. **Clonando o Repositório**
   ```bash
   git clone <url-do-repositorio>
   cd art-design-systems
   ```

2. **Instalando Dependências**
   Certifique-se de ter o Node.js instalado (recomendado: v18 ou superior) e execute:
   ```bash
   npm install
   ```

3. **Executando o Storybook**
   Para visualizar os componentes no Storybook:
   ```bash
   npm run storybook -w packages/docs
   ```

4. **Build do Projeto**
   Caso necessário, faça o build de toda a stack:
   ```bash
   npm run build
   ```

## Filosofia de Design

O **Art Design System** foi desenvolvido para oferecer:
- **Coerência**: Garantir que componentes e estilos sejam consistentes em todas as aplicações.
- **Reutilização**: Facilitar o reaproveitamento de componentes e estilos.
- **Escalabilidade**: Tornar o projeto preparado para crescer sem comprometer sua qualidade.
- **Performance**: Utilizar ferramentas modernas como Vite, TurboRepo e Vanilla Extract para garantir aplicações rápidas e responsivas.

## Problemas Comuns

- **Erro ao rodar Storybook**: Certifique-se de que o pacote `react-components` foi corretamente construído (utilize `npm run build` antes de iniciar o Storybook).
- **Paths ou Imports Quebrados**: Verifique as configurações em `vite.config.ts` e `tsconfig.json` para corrigir aliases configurados erroneamente.
- **Ferramentas de Build**: Certifique-se de usar a versão correta do Node.js e de todas as dependências do projeto.

## Contribuindo

Se você deseja contribuir com este projeto:
1. Crie uma branch para sua alteração.
2. Certifique-se de rodar os linters e testes antes de submeter.
3. Abra um pull request quando suas alterações estiverem prontas.

---

Obrigado por conferir o **Art Design System**. Feliz desenvolvimento! 🚀



























# Art Design System

[![Production](https://img.shields.io/badge/Production-online-22c55e?style=flat&logo=vercel&logoColor=white)](https://art-design-system.vercel.app)
[![Preview (develop)](https://img.shields.io/badge/Preview-develop-facc15?style=flat&logo=vercel&logoColor=black)](https://art-design-system-develop.vercel.app)
[![CI – Build Status](https://github.com/arturribeiro01/art-design-system/actions/workflows/ci.yml/badge.svg)](https://github.com/arturribeiro01/art-design-system/actions/workflows/ci.yml)

Este projeto é um design system para uso em aplicações pessoais e boilerplates.