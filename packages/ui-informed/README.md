# @utima/ui-informed

[@utima/ui](https://github.com/utima-solutions/ui) **components** that are wrapped with [informed](https://joepuzzo.github.io/informed/) library for form handling and can be used directly in `Form` component from informed.

## Installation

**Make sure to first install the `@utima/ui` library first, [follow instructions here](https://www.npmjs.com/package/@utima/ui).**

```bash
npm install @utima/ui-informed informed
```

### `tailwind.config.js`

In your tailwind config file, add informed components to the content array:

```js
import path from 'node:path';

export default {
  content: [
    // This should be here from @utima/ui initialization ->
    `${path.dirname(require.resolve('@utima/ui'))}/**/*.js`,
    // This is the new line for informed components ->
    `${path.dirname(require.resolve('@utima/ui-informed'))}/**/*.js`,
  ],
};
```

## Usage

There are some default translations. If you want to replace them you need to wrap your application (or form) with `FormTranslationsContext.Provider` with value that will replace default translations, f.e.:

```javascript
const translations = {
  errors: {
    required: 'Tento údaj je povinný',
  },
  labels: {
    optional: 'volitelné',
  },
};

function App() {
  return (
    <FormTranslationsContext.Provider value={translations}>
      ...
    </FormTranslationsContext.Provider>
  );
}
```

### Devtools

Informed already provides `<Debug />` component. We have been inspired by this and created more user friendly UI around it.

You can use it by importing `DevTools` component from `@utima/ui-informed/devtools` package and placing it in your application (it should be placed inside `Form` component since it's bound to it's state):

```javascript
import { Suspense, lazy } from 'react';

// Use lazy to ensure code splitting
const UIFormDevtools = lazy(() =>
  import('@utima/ui-informed/devtools').then(res => {
    return {
      default: res.Devtools,
    };
  }),
);

function App() {
  return (
    <Form>
      <Suspense fallback={null}>
        <UIFormDevtools />
      </Suspense>
      ...
    </Form>
  );
}
```
