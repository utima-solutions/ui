import { createRollupConfig } from '../../createRollupConfig.mjs';

/**
 * @type {import('rollup').RollupOptions[]}
 */
export default [
  ...createRollupConfig(),
  ...createRollupConfig('src/devtools/devtools.tsx'),
];
