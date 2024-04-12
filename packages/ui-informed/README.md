# @utima/ui-informed

Combination of components from Utima/ui and form library Informed.

## Installation

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

## Development

For this package to be working locally for you, you need to have have @utima/ui package built.

## Usage

There are some default translations. If you want to replace them you need to wrap your application (or form) with `FormTranslationsContext.Provider` with value that will replace default translations, f.e.:

```javascript
const translations = {
  actions: {
    success: {
      title: 'Úspěch',
      message: 'Položka byla úspěšně uložena.',
    },
    fail: {
      title: 'Neúspěch',
      message: 'Položka nebyla uložena.',
    },
  },
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

Informed already provides debug component. We have been inspired by this component and provided more UI friendly version of it.

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
