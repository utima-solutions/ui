# @utima/ui

Collection of **React components** based on [shadcn/ui](https://ui.shadcn.com/) and [Radix Primitives](https://www.radix-ui.com/primitives/docs/overview/introduction) with some modifications. It is essentially a growing collection of components which try to provide higher level API, while still being customizable and composable.

All components are styled using [Tailwind CSS](https://tailwindcss.com/). They are theemable through custom tailwind colors + override functionality. Which allows you to add custom styles to the components without the need of wrapping and styling them in your application.

## Features

- 💪 **Accessible**: All components are built with accessibility in mind (thanks to the great work of [Radix Primitives](https://www.radix-ui.com/primitives/docs/overview/introduction)).
- 🧱 **Composable**: Components are built to be composable and customizable.
- 🖼️ **Themeable**: We use custom css classes which allow **theeming**, there's also capability to override the default styles entirely.
- 🛠️ **TypeScript**: All components are written in TypeScript.
- 🪓 **Tree-shakable**: Imports are tree-shakable in all major bundlers, so you only bundle what you use.

## Documentation

Visit https://utima-solutions.github.io/ui/ storybook, which is automatically generated from the source code. It serves as a documentation and playground for all components.

## Installation

First init tailwindcss in your project, follow instructions on [tailwindcss.com](https://tailwindcss.com/docs/installation) and install the **@utima/ui** package and its peer dependencies.

```bash
npm install @utima/ui lucide-react tailwindcss-animate
```

### `tailwind.config.js`

In your tailwind config file, add the following:

```js
import path from 'node:path';

import tailwindcssAnimate from 'tailwindcss-animate';
import utimaUi from '@utima/ui/plugin';

export default {
  content: [
    // This makes sure tailwind can scan the utima ui component classes
    `${path.dirname(require.resolve('@utima/ui'))}/**/*.js`,
  ],
  /**
   * Init the utima ui plugin and tailwindcss-animate, with optional
   * customizations.
   */
  plugins: [tailwindcssAnimate, utimaUi({
    colors: {
      primary: {
        bg: '#cc0000',
        fg: '#ffffff',
      },
    }
  })],
};
```

## Usage

All imports are available from `@utima/ui` package. Feel free to browse through [public Storybook](https://utima-solutions.github.io/ui/) to see all available components and their props.

```jsx
import { Button } from '@utima/ui';

function App() {
  return (
    <Button variant='primary' outline>Click me</Button>
  );
}
```
