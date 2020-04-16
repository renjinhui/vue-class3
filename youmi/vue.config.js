module.exports = {
  devServer: {
    // 相当于 把前端的 8080请求  使用node  转接到 3000
    // 只在本地开发时起作用；
    proxy: 'http://localhost:3000'
  }
}