import { defineConfig, loadEnv } from 'vite';
import { baseConfig } from '../vite.base.config';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    ...baseConfig,
    define: {
      ...baseConfig.define,
      'process.env': env,
    },
  };
});
