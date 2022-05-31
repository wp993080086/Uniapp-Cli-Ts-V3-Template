<template>
  <view class="copy_content" @click.stop="handleClipboard">
    <text :style="{ fontSize: `${size}rpx`, color: color, marginRight: `${space}rpx` }">
      {{ text || '-' }}
    </text>
    <uni-icons type="paperclip" :size="`${size}rpx`" :color="color" v-if="text" />
  </view>
</template>

<script>
export default {
  name: 'CopyText',
  props: {
    text: { default: '', required: true }, // 文本信息
    size: { default: 24 }, // 文字大小
    color: { default: '#1677ff' }, // 颜色
    space: { default: 6 } // 间距
  },
  data() {
    return {}
  },
  methods: {
    // 操作粘贴板
    handleClipboard() {
      if (!this.text) {
        console.warn('Target is Blank')
        return
      }
      uni.setClipboardData({
        data: this.text,
        success() {
          console.log('复制成功 !')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.copy_content {
  display: inline;
}
</style>
