import { defineConfig } from 'vite';
const path = require('path');
export default defineConfig({
    base: './',
    plugins: [

    ],
    build: {
        lib: {
            'entry': './src/index.tsx',
            "name": 'dialogbox'
        }
    }
})