import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/my_portfolio/', // Replace 'my_portfolio' with your repository name
  build: {
    outDir: 'dist', // Default build directory
  },
});
