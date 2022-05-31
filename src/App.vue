<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'
import { userInfoStore } from './store/index'

const userInfo = userInfoStore()

onLaunch(() => {
  console.log('App Launch')
  console.log(userInfo)
})
onShow(() => {
  console.log('App Show')
})
onHide(() => {
  console.log('App Hide')
})
</script>

<style lang="scss">
@import 'vk-uview-ui/index.scss';
</style>
