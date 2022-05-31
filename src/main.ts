import { createSSRApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import uView from 'vk-uview-ui'

export function createApp() {
  const app = createSSRApp(App)
  app.use(createPinia())
  app.use(uView)
  return {
    app
  }
}
