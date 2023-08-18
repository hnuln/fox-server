const mysql = require('mysql')

const conn = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    database: 'interface_sys',
    user: 'root',
    password: '20020610ln'
})

// conn.connect()
// const sql = 'select * from sys_user;'


// conn.query(sql, function (err, results,) {
//     if (err) throw err
//     console.log("results", results)
// })
