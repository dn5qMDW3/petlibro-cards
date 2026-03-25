import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/petlibro-card.ts',
  output: {
    file: 'dist/petlibro-cards.js',
    format: 'es',
    sourcemap: !production,
    inlineDynamicImports: true,
  },
  plugins: [
    resolve(),
    typescript(),
    production && terser({
      ecma: 2022,
      module: true,
    }),
  ],
};
