<script setup lang="ts">
import { ref, computed } from 'vue'
import { userInfoStore } from '../../store/index'

const textColor = ref('red')
const userStore = userInfoStore()
const userInfo = computed(() => {
  return userStore.getUserInfo().userName
})
</script>

<template>
  <view class="pinia_box">
    <p>{{ userInfo }}</p>
  </view>
</template>

<style scoped lang="scss">
.pinia_box {
  @include center();
  color: v-bind('textColor');
}
</style>
