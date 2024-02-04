import baseConfig from '@utima/eslint-config';

export default [
  {
    // FIXME - typescript eslint not working here
    ignores: ['**/.storybook/**'],
  },
  ...baseConfig,
];
