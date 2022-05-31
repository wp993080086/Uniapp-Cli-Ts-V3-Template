import { reactive, toRefs } from 'vue'
import { defineStore } from 'pinia'
import { IuserInfo } from './base'

// 使用setup模式定义
const userModule = defineStore('base', () => {
  const data = reactive({
    name: 'user',
    userInfo: {
      userName: '卡卡罗特',
      userId: '100'
    }
  })

  const getUserInfo = () => {
    return data.userInfo
  }

  const setUserInfo = (obj: IuserInfo) => {
    data.userInfo = obj
  }

  return {
    ...toRefs(data),
    getUserInfo,
    setUserInfo
  }
})

export default userModule
