import { nodeExternals } from 'rollup-plugin-node-externals';
import typescript from 'rollup-plugin-typescript2';

/**
 * @returns {import('rollup').RollupOptions[]}
 */
export function createRollupConfig(input = 'src/index.ts') {
  return [
    {
      input,
      plugins: [
        nodeExternals(),
        typescript({
          rollupCommonJSResolveHack: false,
          useTsconfigDeclarationDir: true,
          tsconfig: 'tsconfig.build.json',
        }),
      ],
      output: [
        {
          dir: './dist/esm',
          format: 'es',
          sourcemap: true,
          preserveModules: true,
        },
        {
          dir: './dist/cjs',
          format: 'cjs',
          sourcemap: true,
          preserveModules: true,
        },
      ],
    },
  ];
}
