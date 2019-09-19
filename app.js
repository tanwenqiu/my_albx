//搭建服务器
const express = require("express");
const router = require("./router.js");
var bodyParser = require('body-parser');

const app = express();
app.listen(4444, () => {
  console.log("http://127.0.0.1:4444");
});

// 静态资源托管
app.use('/assets',express.static('assets'));
app.use('/uploads',express.static('uploads'));

// 配置body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// //配置ejs
app.set("view engine", "ejs");
app.set("views", "views");

// //使用路由
app.use(router);
