const baseConfig = require('@utima/eslint-config');
const { tailwind } = require('@utima/eslint-config/configs');

module.exports = [
  ...baseConfig,
  ...tailwind,
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      'react/no-multi-comp': 'off',
    },
  },
];
