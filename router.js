const express = require('express');
const pagesController = require('./controllers/pagesController.js');

//创建路由模块对象
const router = express.Router();

router.get('/',pagesController.getIndexPage)
      .get('/detail',pagesController.getDetailPage)
      .get('/list',pagesController.getListPage)




      .get('/login',pagesController.getLoginPage)
       // 读取后台首页：约定后台页都以/admin开头
      .get('/admin',pagesController.getAdminIndexPage)
      .get('/admin/categories',pagesController.getAdminCategoriesPage)
      .get('/admin/comments',pagesController.getCommentsPage)
      .get('/admin/login',pagesController.getLoginPage)
      .get('/admin/nav-menus',pagesController.getNavMenusPage)
      .get('/admin/password-reset',pagesController.getPasswordResetPage)
      .get('/admin/post-add',pagesController.getPostAddPage)
      .get('/admin/posts',pagesController.getPostsPage)
      .get('/admin/profile',pagesController.getProfilePage)
      .get('/admin/settings',pagesController.getSettingsPage)
      .get('/admin/slides',pagesController.getSlidesPage)
      .get('/admin/users',pagesController.getUsersPage)
// 暴露
module.exports = router;