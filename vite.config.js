import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [uni()],
	resolve: {
		alias: [{ find: '@', replacement: './src' }]
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@import "./src/static/styles/common.scss";'
			}
		}
	}
})
