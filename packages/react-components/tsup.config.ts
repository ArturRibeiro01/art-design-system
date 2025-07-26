import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  splitting: false,
  clean: true,
  external: ['react', 'react-dom'],
  tsconfig: 'tsconfig.build.json',
  loader: {
    '.css.ts': 'ts'
  }
});