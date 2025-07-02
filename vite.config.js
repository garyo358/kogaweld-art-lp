import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/kogaweld-art-lp/',
  plugins: [react()],
});
