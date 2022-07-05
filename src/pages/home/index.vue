<script setup lang="ts">
import { computed, CSSProperties, reactive } from 'vue'

const data = reactive({
  bgIndex: 0,
  imageBg: [
    '../../static/images/banner1.png',
    '../../static/images/banner2.png',
    '../../static/images/banner3.png'
  ]
})

const homeBg = computed<CSSProperties>(() => ({
  backgroundImage: `url(${data.imageBg[data.bgIndex]})`
}))

const toLogin = () => {
  uni.navigateTo({
    url: '/pages/login/index'
  })
}
const handleChangeBg = () => {
  data.bgIndex++
  if (data.bgIndex > 2) data.bgIndex = 0
}
</script>
<template>
  <view class="home" :style="homeBg">
    <button @click="toLogin">前往登录</button>
    <button @click="handleChangeBg">更换背景</button>
  </view>
</template>

<style scoped lang="scss">
.home {
  @include flex_center();
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
