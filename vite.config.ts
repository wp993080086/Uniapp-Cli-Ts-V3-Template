import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'

export default defineConfig({
  plugins: [uni()],
  resolve: {
    alias: [{ find: '@', replacement: './src' }]
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "./src/static/styles/mixin.scss";
        `
      }
    }
  }
})
