import {
	createSSRApp
} from 'vue'
import App from './App.vue'
import uView from 'vk-uview-ui'
import { createPinia } from 'pinia'
export function createApp() {
	const app = createSSRApp(App)
	app.use(createPinia())
	app.use(uView)
	return {
		app
	}
}
