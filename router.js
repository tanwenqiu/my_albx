const express = require('express');
const pagesController = require('./controllers/pagesController.js');

//创建路由模块对象
const router = express.Router();

router.get('/',pagesController.getIndexPage)
      .get('/detail',pagesController.getDetailPage)
      .get('/list',pagesController.getListPage)


// 暴露
module.exports = router;