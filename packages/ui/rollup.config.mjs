import typescript from 'rollup-plugin-typescript2';

/**
 * @type {import('rollup').RollupOptions[]}
 */
export default [
  {
    input: `src/index.ts`,
    plugins: [
      typescript({
        rollupCommonJSResolveHack: false,
        useTsconfigDeclarationDir: true,
        tsconfig: 'tsconfig.build.json',
      }),
    ],
    external: ['zod', 'type-fest'],
    output: [
      {
        file: './dist/index.mjs',
        format: 'es',
        sourcemap: true,
      },
      {
        file: './dist/index.cjs',
        format: 'cjs',
        sourcemap: true,
      },
    ],
  },
];
