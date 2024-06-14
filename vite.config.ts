import { vitePlugin as remix } from '@remix-run/dev';
import { defineConfig } from 'vite';
import { baseConfig } from './vite.base.config';

export default defineConfig({
  ...baseConfig,
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
    }),
    ...baseConfig.plugins,
  ],
});
