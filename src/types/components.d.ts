import LazyImage from '@/components/lazy-image/lazy-image.vue'
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    LazyImage: typeof LazyImage
  }
}
