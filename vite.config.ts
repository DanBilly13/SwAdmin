import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import type { OutputAsset } from 'rollup'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/SwAdmin/' : '/',
  build: {
    outDir: 'docs',
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo: { name?: string } & OutputAsset) => {
          const name = assetInfo.name || '';
          if (name.endsWith('.jpg') || name.endsWith('.png')) {
            return 'images/[name][extname]'
          }
          return 'assets/[name][extname]'
        }
      }
    }
  },
  esbuild: {
    target: 'es2017'
  }
})
