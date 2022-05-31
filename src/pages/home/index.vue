<script setup lang="ts">
import { computed, CSSProperties, reactive } from 'vue'
import { images } from '@/utils/mock'

const theme = {
  color: 'red',
  bgImg: images[0]
}

const data = reactive({
  show: false,
  mode: 'date'
})

const homeStyle = computed<CSSProperties>(() => ({
  backgroundImage: `url(${theme.bgImg})`
}))
const goAddress = () => {
  uni.navigateTo({
    url: '/pages/login/index'
  })
}
</script>
<template>
  <view class="home" :style="homeStyle">
    <uni-nav-bar statusBar :border="false" backgroundColor="rgba(255, 255, 255, 0)" title="首页" />
    <button @click="goAddress">打开地址</button>
    <u-calendar v-model="data.show" :mode="data.mode" />
    <u-button @click="data.show = true">打开</u-button>
  </view>
</template>

<style scoped lang="scss">
.home {
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  ::v-deep {
    .uni-navbar {
      width: 100vw;
    }
  }
}

.realname {
  @include center();
  color: v-bind('theme.color');
}

.text-area {
  display: flex;
  justify-content: center;
  flex-direction: column;
  .title {
    font-size: 36rpx;
    color: $uni-text-color-grey;
  }
}
</style>
