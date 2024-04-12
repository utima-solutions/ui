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
