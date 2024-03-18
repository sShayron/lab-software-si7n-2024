A client and server using moon application.

## Usage

To begin, install globally the tools:

- [node@20.11.1](https://nodejs.org/en)
- [docker](https://www.docker.com/products/docker-desktop/)
- [moon](https://moonrepo.dev/docs/install)

### Package manager pnpm

`npm install --global pnpm`

## Projects

- [client](apps/client)
- [server](apps/server)

### Install dependencies in the projects folder

`pnpm install`

Once installed, run the following commands for common tasks:

- `moon check --all` - Run _all_ tasks (below).
- `moon run :build` - Build all projects.
- `moon run :lint` - Lint code in all projects.
- `moon run :test` - Run tests in all projects.
- `moon run :format` - Format code in all projects.
- `moon run :typecheck` - Type check code in all projects.

Tasks can also be focused to individual projects. The list of projects can be found in
`.moon/workspace.yml`.

- `moon check <project>`
- `moon run <project>:<task>`
- `moon run <project>:dev` - For applications, starts the application in development mode.

## Client

- `moon run client:dev` - Runs the client in develop mode at localhost:3000
- `moon run client:build` - Creates an production build

## Server

- `moon run server:dev` - Runs the database, proxy and updates database then starts the server at
  localhost:3001
- `moon run server:start-proxy` - Runs only the proxy
- `moon run server:start-db` - Runs only the the database
- `moon run server:db-update` - Aplies [migration](apps/server/src/prisma/migrations/) to database
- `moon run server:db-update` - Aplies [seeders](apps/server/src/prisma/seeders/) to database

## JavaScript

The following tools are configured as moon tasks.

- ESLint
- Jest
- Prettier
- TypeScript

### Frameworks

The following frameworks have been integrated into moon.

- [Next](./apps/nextjs-app/README.md)
