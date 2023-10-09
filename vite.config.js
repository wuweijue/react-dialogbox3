import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
const path = require('path');
// import mdPlugin from 'vite-plugin-markdown';
export default defineConfig({
    plugins: [
        react(),
        // mdPlugin({
        //     mode: ['react']
        // })
    ],
    server: {
        port: 5002,
        open: true,
        headers: {
            'Access-Control-Allow-Origin': '*', // 允许来自任何源的请求  
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS', // 允许的 HTTP 方法  
        },
    },
    build: {
        rollupOptions: {
            output: {
                // manualChunks: (id) => {
                //     // 这里可以编写自定义的逻辑来判断哪些文件需要被保留在“dist”目录中
                //     if (id.includes('react-dialogbox')) {
                //         return 'keep';
                //     }
                // }
            }
        }
    },
    resolve: {
        alias: {
            // 'useTranslate': '/src/utils/useTranslate',
            // '@utils': '/src/utils',
            // '@store': '/src/store'
        }
    }
})