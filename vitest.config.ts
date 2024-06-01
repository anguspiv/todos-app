import { defineConfig } from 'vite';
import { configDefaults } from 'vitest/config';
import react from '@vitejs/plugin-react';

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
  plugins: [react()],
  build: {
    target: 'esnext',
  },
});
