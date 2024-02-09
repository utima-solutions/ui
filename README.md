# @utima/ui

Collection of react components based on [shadcn/ui](https://ui.shadcn.com/) and [Radix Primitives](https://www.radix-ui.com/primitives/docs/overview/introduction) with some modifications. It is essentially growing collection of components which try to provide higher level API, while still being customizable and composable.

All components are styled using [Tailwind CSS](https://tailwindcss.com/). They are theemable through custom tailwind colors + override functionality. Which allows you to add custom styles to the components without the need of wrapping and styling them in your application.

## Documentation

Visit https://utima-solutions.github.io/ui/ storybook, which is automatically generated from the source code. It serves as a documentation and playground for all components.

## Installation

Init tailwindcss in your project, follow instructions on [tailwindcss.com](https://tailwindcss.com/docs/installation).

Install the @utima/ui package and its peer dependencies.

```bash
npm install @utima/ui lucide-react tailwindcss-animate
```

### `tailwind.config.js`

In your tailwind config file, add the following:

```js
import path from 'node:path';

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
  plugins: [require('tailwindcss-animate'), utimaUi({
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
