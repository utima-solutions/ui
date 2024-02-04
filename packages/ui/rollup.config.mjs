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
