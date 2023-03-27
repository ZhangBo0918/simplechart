/* eslint-disable import/no-extraneous-dependencies */
import { babel } from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'lib/aibochart.js',
      format: 'cjs',
    },
    {
      file: 'esm/aibochart.js',
      format: 'es',
    },
    {
      file: 'dist/aibochart.min.js',
      name: 'act',
      format: 'umd',
    },
  ],
  plugins: [
    resolve(),
    babel(),
  ],
};
