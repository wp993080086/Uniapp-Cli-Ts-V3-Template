<template>
  <view class="pinia_box">
    <p>{{ userInfo }}</p>
    <u-calendar v-model="show" mode="date"></u-calendar>
		<u-button @click="show = true">打开日历</u-button>
  </view>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { userInfoStore } from '../../store/index'

const textColor = ref('red')
const userStore = userInfoStore()
const userInfo = computed(() => {
  return userStore.getUserInfo().userName
})
const show = ref(false)
</script>

<style scoped lang="scss">
.pinia_box {
  @include flex_center();
  @include set_w_h(fill, fill);
  color: v-bind('textColor');
}
</style>
