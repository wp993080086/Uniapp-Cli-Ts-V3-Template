/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, TAny>
  export default component
}

declare module 'vk-uview-ui'

interface ImportMetaEnv {
  readonly VITE_TITLE: string
  readonly VITE_ENV_CONFIG: string
  readonly VITE_BASE_URL: string
  readonly VITE_CDN: string
  readonly VITE_BASE_API: string
  readonly VITE_WEBSOCKET: string
}
interface ImportMeta {
  readonly env: ImportMetaEnv
}
