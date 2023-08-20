const mysql = require('mysql')

let pool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    database: 'interface_sys',
    user: 'root',
    password: '20020610ln',
    multipleStatements: true
});
let query = (sql, values) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                reject(err)
            } else {
                connection.query(sql, values, (err, rows) => {
                    if (err) {
                        reject(err)
                    } else {
                        // console.log(rows);
                        resolve(rows)
                    }
                    connection.release()
                })
            }
        })
    })
};
module.exports = {
    query
}
