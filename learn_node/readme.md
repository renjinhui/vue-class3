### node
  - node 是提供了一种 JS的运行环境；JS只能在浏览器端运行，想让JS在服务器上运行 node给我们提供了这种环境
  -      node 在服务器上创造了一个 浏览器 让JS可以在那个上边运行；
  - 下载  http://nodejs.cn/download/   进行傻瓜式安装   自带 npm

  node模块 大概分为三类： 内置模块（安装node时自带的包）  三方模块
  （npm yarn cnpm 安装的包） 自定义模块
   遵循 commonJS 规范  导入使用 require   导出使用module.exports
   es6的 模块导入和导出 导入 import  导出 export; 

   内置模块 或者 三方模块导入的时候 我们直接 require('包名')
    需要用的内置模块： fs文件操作模块（读写文件）
                      path 路径处理模块
                      url 处理路径参数
                      http: 服务模块

    --查找路劲  先在本文件夹下的node_modules查找对应的包，有的话直接引入
                没有的话 会向上层文件夹下 的node_modules中接着查，。。。
                一直找到全局环境， 若还没有就报错了；

   怎么使用node执行js文件 ？  node 后跟 js文件路径