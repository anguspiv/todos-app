import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

export const baseConfig = {
  plugins: [react(), tsconfigPaths(), vanillaExtractPlugin()],
};
