const Router = require('koa-router')
const interfaceRouter = new Router()
const interfaceCtl = require('../controller/InterfaceManage')

// 创建接口(修改)，为了方便历史回溯，每次都新创建一个表项
interfaceRouter.post('/interface/store', interfaceCtl.store)
// 删除接口
interfaceRouter.post('/interface/delete', interfaceCtl.delete)
// 展示接口信息
interfaceRouter.post('/interface/show', interfaceCtl.show)
// 展示接口名
interfaceRouter.post('/interface/showName', interfaceCtl.showName)
// 展示历史接口
interfaceRouter.post('/interface/showInterfaceByTime', interfaceCtl.showInterfaceByTime)
// 修改接口名
interfaceRouter.post('/interface/updateName', interfaceCtl.updateName)

module.exports = interfaceRouter