import Request from '../request.js'
import Module from '../module.js'

const Interface = {
  /**
   * 获取设备类目列表
   * @param {Number} classifyLeve 设备类型级别
   * @param {Number} parentClassifyNo 设备父类型编号
   */
  getDeviceTypeList(param) {
    return Request.post(Module.Device, '/classify/getList', { ...param })
  },
  /**
   * 绑定设备
   * @param {String} deviceName 设备名
   * @param {String} wkorderId 工单ID
   * @param {String} roomId 房间ID
   * @param {String} spaceName 安装位置
   * @param {String} storeId 门店ID
   * @param {String} typeId 设备类型ID
   * @param {String} typeName 设备类型名称
   * @param {String} deviceNumber 设备SN
   * @param {String} isCurrentDevice 是否当前设备 0 否 1是
   */
  bindDevice(param) {
    return Request.post(Module.Work, '/operation/bindDevice', { ...param })
  }
}

export default Interface
