/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import { resolve } from 'path'
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: './',
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: resolve(__dirname, 'index.html')
        }
    },
    plugins: [react()],
    server: {
        port:3000,
    },
    test: {
        environment: 'jsdom',
        setupFiles: ['./src/test/setupTests.ts']
    }
});