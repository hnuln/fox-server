const db = require('../utils/database')

module.exports = {
    /**
     * 保存接口
     */
    store: async (obj) => {
        const sql =
            'INSERT INTO sys_interface (project_id, interface_name, method, params, `data`, url, isDelete, time, collection_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?); '
        let time = new Date().toLocaleString()
        // console.log('服务层正常运行')
        return await db.query(sql, [obj.projectID, obj.interfaceName, obj.method, obj.params, obj.data, obj.url, obj.isDelete, time, obj.collectionID])
    },
    /**
     * 删除接口
     */
    delete: async (interfaceID) => {
        const sql = 'UPDATE sys_interface SET isDelete = 1 WHERE interface_id = ?;'
        return await db.query(sql, interfaceID)
    },
    /**
     * 展示接口
     */
    show: async (interfaceID) => {
        const sql = 'SELECT * FROM sys_interface WHERE interface_id = ?;'
        return await db.query(sql, interfaceID)
    },
    /**
     * 展示接口名列表
     */
    showName: async (collectionID) => {
        const sql = 'SELECT interface_name FROM sys_interface WHERE collection_id = ? AND isDelete = 0;'
        return await db.query(sql, collectionID)
    },
    /**
     * 展示历史接口
     */
    showInterfaceByTime: async (projectID) => {
        const sql = 'SELECT interface_name, time FROM sys_interface WHERE project_id = ? AND isDelete = 1 ORDER BY time DESC;'
        return await db.query(sql, projectID)
    },
    /**
     * 修改接口名
     * @param {interfaceID} 
     */
    updateName: async (interfaceID, newName) => {
        const sql = 'UPDATE sys_interface SET interface_name=? WHERE interface_id=?;'
        return await db.query(sql, [newName, interfaceID])
    },
}