import { defineConfig } from 'vite';
import { configDefaults } from 'vitest/config';
import { baseConfig } from './vite.base.config';

const exclude = [...(configDefaults.coverage.exclude as string[]), '*.config.js'];

export default defineConfig({
  ...baseConfig,
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
  build: {
    target: 'esnext',
  },
});
