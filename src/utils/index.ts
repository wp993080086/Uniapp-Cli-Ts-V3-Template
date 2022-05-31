/**
 * 睡眠
 * @param  {Number} ms 等待
 */
export const sleep = (ms = 500) => {
  return new Promise(res => {
    setTimeout(res, ms)
  })
}
/**
 * 获取设备信息
 * @return  {Object} 设备信息
 */
export const getSystemInfo = () => {
  return new Promise((resolve, reject) => {
    uni.getSystemInfo({
      success(res) {
        resolve(res)
      },
      fail(error) {
        reject(error)
      }
    })
  })
}
/**
 * 设置缓存
 * @param  {String} keys key
 * @param  {any} datas 缓存的数据
 */
export const setStorage = (keys: string, datas: TAnyObject) => {
  return new Promise((resolve, reject) => {
    uni.setStorage({
      key: keys,
      data: datas,
      success() {
        resolve(true)
      },
      fail(error) {
        reject(error)
      }
    })
  })
}
/**
 * 获取缓存
 * @param  {String} keys key
 */
export const getStorage = (keys: string) => {
  return new Promise((resolve, reject) => {
    uni.getStorage({
      key: keys,
      success(res) {
        resolve(res.data)
      },
      fail(error) {
        reject(error)
      }
    })
  })
}
/**
 * 删除缓存
 * @param  {String} keys key
 */
export const deleteStorage = (keys: string) => {
  return new Promise((resolve, reject) => {
    uni.removeStorage({
      key: keys,
      success(res) {
        resolve(res.data)
      },
      fail(error) {
        reject(error)
      }
    })
  })
}
/**
 * 判断变量的类型
 * @param {object} value 变量值
 * @return {String} 变量类型
 */
export const checkType = (value: TAny) => {
  return Object.prototype.toString.call(value).slice(8, -1)
}
/**
 * 深拷贝（递归）
 * @param {*} sourceValue 需要拷贝的值
 */
export const deepClone = (sourceValue: TAnyObject | TAnyArray | TAny) => {
  // 如果传入的数据是简单类型（不是 {} & []），直接返回即可
  if (typeof sourceValue !== 'object') {
    return sourceValue
  }
  // 判断 传入参数的数据类型(object or array)
  const targetType = checkType(sourceValue)
  // 根据传入参数的数据类型，创建 初始存储结果的变量类型 {} or []
  const result: TAny = targetType === 'Object' ? {} : []
  // 遍历 sourceValue (for...in可以遍历数据和对象)
  // 避免数组内有自定义属性，遍历数组使用 for...of，遍历对象 for...in
  if (targetType === 'Array') {
    // 传入参数是数组时，次数使用的是 for...of 遍历，当然，也可以使用 数组的其他遍历方法
    for (const [key, value] of sourceValue.entries()) {
      const itemType = checkType(value)
      // 如果 value 是 数组 或 对象，则继续遍历
      if (itemType === 'Object' || itemType === 'Array') {
        result[key] = deepClone(value)
      } else {
        // 如果 value 是 基本数据类型 或者 函数，直接赋值即可
        result[key] = value
      }
    }
  } else {
    // 传入参数是对象时
    for (const key in sourceValue) {
      // 遍历数组时，key 为数组的 下标
      // 遍历对象时，key 为对象的 key
      // hasOwnProperty 只能检验对象自身的属性，不能检验继承属性，也不能检验原型链上的属性
      if (Object.prototype.hasOwnProperty.call(sourceValue, key)) {
        const item = sourceValue[key]
        const itemType = checkType(item)
        // 如果 value 是 数组 或 对象，则继续遍历
        if (itemType === 'Object' || itemType === 'Array') {
          result[key] = deepClone(item)
        } else {
          // 如果 value 是 基本数据类型 或者 函数，直接赋值即可
          result[key] = item
        }
      }
    }
  }
  return result
}
// 手机号码校验
export const validateMobile = (value: string, callback: TAnyFunc) => {
  const RegExp = /^1(3[0-9]|4[01456879]|5[0-35-9]|6[2567]|7[0-8]|8[0-9]|9[0-35-9])\d{8}$/
  if (value === '') {
    callback(new Error('请填写联系电话'))
  } else if (!RegExp.test(value)) {
    callback(new Error('手机号码格式有误'))
  } else {
    callback()
  }
}
/**
 * 节流
 * @param {Function} fn 事件
 * @param {Number} limit 触发间隔
 */
export const throttle = (fn: TAnyFunc, limit = 200) => {
  let wait = false
  // eslint-disable-next-line
  const _this = this
  // eslint-disable-next-line
  return function (_this: TAny, ...args: TAnyArray) {
    if (wait === false) {
      wait = true
      setTimeout(() => {
        wait = false
      }, limit)
      return fn.apply(_this, args)
    }
    return null
  }
}
/**
 * 防抖
 * @param {Function} fn 事件
 * @param {Number} wait 触发间隔
 * @param {Number} immediate 是否立即触发一次
 */
export const debounce = (wait: number, fn: TAnyFunc, immediate = false) => {
  let timeout: TAny
  // eslint-disable-next-line
  const _this = this
  // eslint-disable-next-line
  const debounced = function (_this: TAny, ...args: TAnyArray) {
    const later = () => {
      timeout
      if (immediate !== true) {
        fn.apply(_this, args)
      }
    }
    clearTimeout(timeout)
    if (immediate === true && timeout === undefined) {
      fn.apply(_this, args)
    }
    timeout = setTimeout(later, wait)
  }
  debounced.cancel = () => {
    clearTimeout(timeout)
  }
  return debounced
}
