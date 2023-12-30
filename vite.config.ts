import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import EnvironmentPlugin from 'vite-plugin-environment';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tsconfigPaths(),
    EnvironmentPlugin('all', { prefix: 'VITE_' }),
  ],

  server: {
    port: 8000,
  },
});
