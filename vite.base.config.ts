import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { UserConfig } from 'vite';

export const baseConfig: UserConfig = {
  plugins: [react(), tsconfigPaths(), vanillaExtractPlugin()],
};
