// 这个文件专门用于处理与users表相关的数据操作
const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "root",
  database: "baixiu"
});

module.exports = {
  login(email, callback) {

    //实现登录验证查询:根据email查询用户数据
    let sql = `select * from users where email = '${email}' `;
    connection.query(sql, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results[0]); //results是一个数组,当前查询要么有数据,要么只有一条数据
      }
    });
  }
};
