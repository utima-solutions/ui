import { nodeExternals } from 'rollup-plugin-node-externals';
import typescript from 'rollup-plugin-typescript2';

/**
 * @returns {import('rollup').RollupOptions[]}
 */
export function createRollupConfig(input = 'src/index.ts', output = './dist') {
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
          dir: `${output}/esm`,
          format: 'es',
          sourcemap: true,
          preserveModules: true,
        },
        {
          dir: `${output}/cjs`,
          format: 'cjs',
          sourcemap: true,
          preserveModules: true,
        },
      ],
    },
  ];
}
