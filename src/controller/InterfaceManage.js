const interfaceService = require('../service/InterfaceService')

module.exports = {
    /**
     * 保存接口
     * @param ctx
     */
    store: async ctx => {
        const obj = ctx.request.body
        try {
            let interfaceObj = await interfaceService.store(obj)
            // console.log(interfaceObj);
            if (interfaceObj.affectedRows === 1) {
                ctx.response.status = 200
                ctx.body = {
                    code: 200,
                    msg: "接口保存成功"
                }
            } 
        } catch (error) {
            ctx.body = {
                code: 400,
                msg: "接口保存失败"
            }
            console.log(error)
        }

    },
    /**
     * 删除接口
     * @param ctx
     */
    delete: async ctx => {
        let { interfaceID } = ctx.request.body
        // console.log(interfaceID);
        try {
            let result = await interfaceService.delete(interfaceID)
            // console.log(result);
            if (result.affectedRows === 1) {
                ctx.body = {
                    code: 200,
                    msg: "接口删除成功"
                }
            }
        } catch (error) {
            ctx.body = {
                code: 400,
                msg: "接口删除失败"
            }
            console.log(error);
        }
    },
    /**
     * 展示接口信息
     */
    show: async ctx => {
        const { interfaceID } = ctx.request.body
        try {
            const result = await interfaceService.show(interfaceID)
            // console.log(result);
            ctx.body = {result}
        } catch (error) {
            ctx.body = {
                code: 400,
                msg: "接口信息获取失败"
            }
            console.log(error);
        }
    },
    /**
     * 展示接口名
     */
    showName: async ctx => {
        let { collectionID } = ctx.request.body
        try {
            const result = await interfaceService.showName(collectionID)
            ctx.body = { result }
        } catch (error) {
            ctx.body = {
                code: 400,
                msg: "接口列表获取失败"
            }
        }
    },
    /**
     * 展示历史接口
     */
    showInterfaceByTime: async ctx => {
        const { projectID } = ctx.request.body
        try {
            const result = await interfaceService.showInterfaceByTime(projectID)
            ctx.body = {result}
        } catch (error) {
            ctx.body = {
                code: 400,
                msg: "接口列表获取失败"
            }
        }
    },
    /**
     * 修改接口名
     * @param {obj} ctx 
     */
    updateName: async ctx => {
        const { interfaceID ,newName} = ctx.request.body
        try {
            const result = await interfaceService.updateName(interfaceID, newName)
            if (result.affectedRows === 1) {
                ctx.body = {
                    code: 200,
                    msg: "接口名修改成功"
                }
            }
        } catch (error) {
            ctx.body = {
                code: 400,
                msg: "接口名修改失败"
            }
        }
    },
}