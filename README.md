<img src="https://graphql.org/img/logo.svg" alt="graphql logo" width="96" />

# graphql-template

Template repository for Node.js GraphQL services using [Apollo Server](https://www.apollographql.com/docs/apollo-server).

- [Requirements](#requirements)
- [Getting Started](#getting-started)
- [GraphQL Codegen](#graphql-codegen)

## Requirements

- [docker](https://docs.docker.com/install/)
- [docker-compose](https://docs.docker.com/compose/install/)
- [nodejs](https://nodejs.org/en/)
- [yarn](https://yarnpkg.com/en/docs/install)

## Getting Started

- Run `make start` to start local dev server at http://localhost:4000/graphql
- Run `make stop` to destroy local environment

## GraphQL Codegen

Run `yarn codegen` to generate TypeScript definitions for GraphQL resolvers with [GraphQL Code Generator](https://graphql-code-generator.com).

In [vscode](https://code.visualstudio.com), the codegen script can be run in watch mode as a background task by executing **Tasks: Run Task** and selecting **`graphql-codegen --watch`**.
