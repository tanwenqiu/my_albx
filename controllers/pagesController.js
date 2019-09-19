// 这个文件的作用是处理所有的页面请求

module.exports = {
  // 返回前台首页
  getIndexPage(req, res) {
    res.render("index.ejs");
  },
  // 返回详情页
  getDetailPage(req, res) {
    res.render("detail.ejs");
  },
  // 返回列表页
  getListPage(req, res) {
    res.render("list.ejs");
  },

  // 获取登陆页面
  getLoginPage(req, res) {
    res.render("admin/login.ejs");
  },

  // 返回后台页面,做为约定,在后台页面请求之前添加前缀:/admin
  // 返回后台首页
  getAdminIndexPage(req, res) {
    res.render("admin/index.ejs");
  },
  // 返回后台分类页面
  getAdminCategoriesPage(req, res) {
    res.render("admin/categories.ejs");
  },
  // 返回后台评论页面
  getCommentsPage(req, res) {
    res.render("admin/comments.ejs");
  },
  //返回后台登录页面
  getLoginPage(req, res) {
    res.render("admin/login.ejs");
  },
  //返回后台导航菜单页面
  getNavMenusPage(req, res) {
    res.render("admin/nav-menus.ejs");
  },
  //返回修改密码页面
  getPasswordResetPage(req, res) {
    res.render("admin/password-reset.ejs");
  },
  //返回后台写文章页面
  getPostAddPage(req, res) {
    res.render("admin/post-add.ejs");
  },
  //返回后台所有文章页面
  getPostsPage(req, res) {
    res.render("admin/posts.ejs");
  },
  //返回个人中心页面
  getProfilePage(req, res) {
    res.render("admin/profile.ejs");
  },
  //返回后台网站设置页面
  getSettingsPage(req, res) {
    res.render("admin/settings.ejs");
  },
  //返回后台图片轮播页面
  getSlidesPage(req, res) {
    res.render("admin/slides.ejs");
  },
  //返回后台用户页面
  getUsersPage(req, res) {
    res.render("admin/users.ejs");
  }
};
