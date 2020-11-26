// const mysql = require('mysql');
// const pool = mysql.createPool({
//     host:'nodejs-rds.cbn49nh1i8lf.ap-northeast-2.rds.amazonaws.com',
//     port:3306,
//     user:'admin',
//     password:'Tkddnjs1!',
//     database:'sangwon_nodejs'
// });
// exports.pool = pool;

const mysql = require("mysql");
const pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_ROOT_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: process.env.MYSQL_PORT
});
exports.pool = pool;