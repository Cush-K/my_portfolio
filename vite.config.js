import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '.', // Place the output directly in the root directory
    emptyOutDir: false, // Prevents clearing other files in the root
  },
});
