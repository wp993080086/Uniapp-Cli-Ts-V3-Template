<script lang="ts" setup>
import { computed } from 'vue'

interface Props {
  phone: string
  size?: number
  color?: string
  space?: number
}

const props = withDefaults(defineProps<Props>(), {
  phone: '',
  size: 24,
  color: '#1677ff',
  space: 6
})
const setPhone = computed(() => {
  let text = ''
  if (props.phone) {
    const start = props.phone.slice(0, 3)
    const end = props.phone.slice(7, 11)
    text = `${start}****${end}`
  } else {
    text = ''
  }
  return text
})
const handleCall = () => {
  if (!props.phone) {
    console.warn('Target is Blank')
    return
  }
  uni.makePhoneCall({
    phoneNumber: props.phone
  })
}
</script>

<template>
  <view class="phone_content" @click.stop="handleCall">
    <text :style="{ fontSize: `${size}rpx`, color: color, marginRight: `${space}rpx` }">
      {{ setPhone }}
    </text>
    <uni-icons type="phone" :size="`${size}rpx`" :color="color" v-if="phone" />
  </view>
</template>

<style lang="scss" scoped>
.phone_content {
  display: inline;
}
</style>
