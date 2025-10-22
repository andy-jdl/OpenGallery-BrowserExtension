import { defineConfig } from 'vite';
import { resolve } from 'path'
import react from '@vitejs/plugin-react';
import { copyFileSync } from 'fs';

export default defineConfig({
    base: './',
    plugins: [react()],
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: resolve(__dirname, 'index.html')
        }
    },
    server: {
        port:3000,
    }
});