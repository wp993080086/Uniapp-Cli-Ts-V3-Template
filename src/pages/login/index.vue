<template>
  <view class="login_box">
    <view class="ipt_box">
      <u-input v-model="loginInfo.username" type="text" :border="true" />
      <uni-easyinput type="password" v-model="loginInfo.password" placeholder="请输入密码" />
    </view>
  </view>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const loginInfo = reactive({
  username: '',
  password: ''
})
</script>

<style scoped lang="scss">
.login_box {
  @include flex_center;
  width: 100%;
  height: 100vh;
  .ipt_box {
    width: 80%;
    height: 100rpx;
  }
}
</style>
