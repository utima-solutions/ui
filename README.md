# Utima UI

Monorepository for all packages that are based around **Utima UI Ecosystem**.

## Packages

- [@utima/ui](./packages/ui/README.md) - Collection of **React components** based on [shadcn/ui](https://ui.shadcn.com/) and [Radix Primitives](https://www.radix-ui.com/primitives/docs/overview/introduction) with some modifications. It is essentially a growing collection of components which try to provide higher level API, while still being customizable and composable.
- [@utima/ui-informed](./packages/ui-informed/README.md) - Collection of **React components** based on [@utima/ui](./packages/ui/README.md) and [informed](https://informed.dev/). It provides higher level API for forms and form fields.

## Development guide

We use [pnpm](https://pnpm.io/) as package manager for this repository. Make sure you have it installed before running any commands.

We recommend using `corepack` to install `pnpm` globally:

```bash
corepack enable
```

Install dependencies:

```
pnpm i --frozen-lockfile
```

Now you can start working on the packages. Each package has it's own `README.md` file with some additional instructions. Most of the packages contain `dev` package.json script and storybook which can be used to develop and test components.

You can also use `playground` Vite application to test components in real world scenario. It's located in `apps/playground` directory.

## Contribution guide

Every PR implementing new feature should include [changeset](https://github.com/changesets/changesets). Use `npm run changeset` from the root of the repository to generate new changeset and include it with your PR.

### Release

Make sure all new features are merged to `main` and you are on `main` branch including their changesets. and run:

```bash
npm run release
```

#### RC Versions

To enter RC mode, run:

```bash
npm run release:rc:exit
```

when in RC mode, all version releases will have `-rc` suffix. To exit RC mode, run:

```bash
npm run release:rc:exit
```
