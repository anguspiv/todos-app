import { defineConfig } from 'vite';
import { configDefaults } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

const exclude = [...(configDefaults.coverage.exclude as string[]), '*.config.js'];

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./test/setup.ts'],
    coverage: {
      provider: 'v8',
      exclude,
      all: true,
    },
  },
  plugins: [react(), tsconfigPaths()],
  build: {
    target: 'esnext',
  },
});
