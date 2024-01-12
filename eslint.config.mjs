import stylex from '@stylexjs/eslint-plugin';
import baseConfig from '@utima/eslint-config';

export default [
  ...baseConfig,
  {
    files: ['*.js', '*.ts', '*.jsx', '*.tsx'],
    rules: {
      'stylex/valid-styles': 'error',
    },
    plugins: {
      stylex,
    },
  },
];
