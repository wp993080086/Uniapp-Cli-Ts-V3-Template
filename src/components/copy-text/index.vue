<script lang="ts" setup>
interface Props {
  text: string
  size?: number
  color?: string
  space?: number
}

const props = withDefaults(defineProps<Props>(), {
  text: '',
  size: 24,
  color: '#1677ff',
  space: 6
})

const handleClipboard = () => {
  if (!props.text) {
    console.warn('Target is Blank')
    return
  }
  uni.setClipboardData({
    data: props.text,
    success() {
      console.log('复制成功 !')
    }
  })
}
</script>

<template>
  <view class="copy_content" @click.stop="handleClipboard">
    <text :style="{ fontSize: `${size}rpx`, color: color, marginRight: `${space}rpx` }">
      {{ text || '-' }}
    </text>
    <uni-icons type="paperclip" :size="`${size}rpx`" :color="color" v-if="text" />
  </view>
</template>

<style lang="scss" scoped>
.copy_content {
  display: inline;
}
</style>
