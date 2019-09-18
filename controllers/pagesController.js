// 这个文件的作用是处理所有的页面请求

module.exports = {
  // 1.返回前台首页
  getIndexPage(req, res) {
    res.render("index.ejs");
  },
  // 2.返回详情页
  getDetailPage(req, res) {
    res.render("detail.ejs");
  },
  // 3.返回列表页
  getListPage(req, res) {
    res.render("list.ejs");
  }
};
