import { Toast } from '../utils/toast.js'
import { THeaderOption, TPatamOption } from './request-type'

const baseURL = ''
const headerOption: THeaderOption = {
  contentType: 'application/json;charset=utf-8'
}

/**
 * Get参数处理
 * @param {String} url 接口地址
 * @param {Object} param 参数
 * @return {String} 处理后的接口地址
 */
const getParamDispose = (url: string, param: TAnyObject) => {
  const keyArr = Object.keys(param)
  const valueArr = Object.values(param)
  const leng = keyArr.length
  let newUrl = url
  for (let i = 0; i < leng; i++) {
    if (i === 0) {
      newUrl += `?${keyArr[i]}=${valueArr[i]}`
    } else {
      newUrl += `&${keyArr[i]}=${valueArr[i]}`
    }
  }
  return newUrl
}

const Request = {
  /**
   * Post请求
   * @param {String} module 接口模块
   * @param {String} api 接口地址
   * @param {Object} param 参数
   * @param {Object} option 配置
   * @return {Promise}
   */
  post: (
    module: string,
    api: string,
    param: TAnyObject = {},
    option: TPatamOption = { isToken: true }
  ) => {
    const url = `${baseURL}${module}${api}`
    if (option.isToken) headerOption.token = ''
    return new Promise((resolve, reject) => {
      uni.request({
        url,
        data: { ...param },
        method: 'POST',
        timeout: 30000,
        header: headerOption,
        success: res => {
          if (res.statusCode === 200) {
            reject(res)
          } else {
            reject(res)
          }
        },
        fail: res => {
          reject(res)
          setTimeout(() => {
            Toast('服务器内部错误，请稍后重试 !')
          }, 0)
        }
      })
    })
  },
  /**
   * Get请求
   * @param {String} module 接口模块
   * @param {String} api 接口地址
   * @param {Object} param 参数
   * @param {Object} option 配置
   * @return {Promise}
   */
  get: (
    module: string,
    api: string,
    param: TAnyObject = {},
    option: TPatamOption = { isToken: true }
  ) => {
    const url = getParamDispose(`${baseURL}${module}${api}`, param)
    if (option.isToken) headerOption.token = ''
    return new Promise((resolve, reject) => {
      uni.request({
        url,
        data: {},
        method: 'GET',
        timeout: 30000,
        header: headerOption,
        success: res => {
          if (res.statusCode === 200) {
            resolve(res.data)
          } else {
            reject(res)
          }
        },
        fail: res => {
          reject(res)
          setTimeout(() => {
            Toast('服务繁忙，请稍后重试 !')
          }, 0)
        }
      })
    })
  }
}

export default Request
