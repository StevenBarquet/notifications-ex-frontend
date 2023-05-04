import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export const PORT = 3001;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: PORT,
  },
  resolve: {
    alias: [{ find: 'src', replacement: path.resolve(__dirname, 'src') }],
  },
});
