import Request from '../request.js'
import Module from '../module.js'

const Interface = {
  /**
   * 同步系统配置
   * @param {String} userName 手机号码
   */
  syncConfig(param) {
    return Request.post(
      Module.Auth,
      '/login/provider/syncServiceConfig',
      { ...param },
      { isToken: false }
    )
  },
  /**
   * 登录
   * @param {String} userName 手机号码
   * @param {String} password 密码 先md5，再加salt后md5，再rsa
   */
  login(param) {
    return Request.post(Module.Auth, '/login/provider/dologin', { ...param }, { isToken: false })
  },
  // 登出
  logout() {
    return Request.post(Module.Auth, '/provider/user/dologout')
  },
  /**
   * 获取用户详情
   * @param {String} userId 用户ID
   * @param {String} userType 用户类型 1 门店；2 厂商； 3 交付团队； 4 安装师傅
   */
  getUserInfo(param) {
    return Request.post(Module.Auth, '/provider/user/info', { ...param })
  },
  /**
   * 修改密码
   * @param {String} newPassword 新密码
   * @param {String} oldPassword 旧密码
   * @param {String} userName 登录账号
   */
  changePwd(param) {
    return Request.post(Module.Auth, '/provider/updatePassword', { ...param })
  }
}

export default Interface
