import path from 'path';

import type { StorybookConfig } from '@storybook/react-vite';
import tsconfigPaths from 'vite-tsconfig-paths';

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value) {
  return path.dirname(require.resolve(path.join(value, 'package.json')));
}

const config: StorybookConfig = {
  viteFinal: async config => {
    config.plugins?.push(tsconfigPaths());

    return config;
  },
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [getAbsolutePath('@storybook/addon-essentials')],
  framework: {
    name: getAbsolutePath('@storybook/react-vite') as any,
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};

export default config;
