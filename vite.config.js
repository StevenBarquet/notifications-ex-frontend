import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export const PORT = 3001;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: PORT,
  },
});
