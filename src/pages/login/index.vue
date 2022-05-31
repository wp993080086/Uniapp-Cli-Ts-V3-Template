<script setup lang="ts">
import { reactive } from 'vue'

const loginInfo = reactive({
  username: '',
  password: ''
})

//验证码登录
async function onLogin() {
  console.log('去登录')
}
//获取验证码
async function getVerificationCode() {
  console.log('获取验证码')
}
</script>
<template>
  <view class="login-container">
    <input type="text" v-model="loginInfo.username" />
    <input type="password" v-model="loginInfo.password" />
    <button @click="getVerificationCode">获取验证码</button>
    <button @click="onLogin">登录</button>
  </view>
</template>
<style scoped lang="scss">
.login-container {
  width: 100%;
}
</style>
