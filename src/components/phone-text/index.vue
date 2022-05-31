<template>
  <view class="phone_content" @click.stop="handleCall">
    <text :style="{ fontSize: `${size}rpx`, color: color, marginRight: `${space}rpx` }">
      {{ setPhone }}
    </text>
    <uni-icons type="phone" :size="`${size}rpx`" :color="color" v-if="phone" />
  </view>
</template>

<script>
export default {
  name: 'PhoneText',
  props: {
    phone: { default: '', required: true }, // 手机号码
    size: { default: 24 }, // 文字大小
    color: { default: '#1677ff' }, // 颜色
    space: { default: 6 } // 间距
  },
  computed: {
    setPhone() {
      let text = ''
      if (this.phone) {
        const start = this.phone.slice(0, 3)
        const end = this.phone.slice(7, 11)
        text = `${start}****${end}`
      } else {
        text = ''
      }
      return text
    }
  },
  methods: {
    // 拨打电话
    handleCall() {
      if (!this.phone) {
        console.warn('Target is Blank')
        return
      }
      uni.makePhoneCall({
        phoneNumber: this.phone
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.phone_content {
  display: inline;
}
</style>
