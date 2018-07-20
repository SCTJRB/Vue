# Vue-Test
## 相关：
* Vue
* Vue-router
* VueX
* Axios
* YAPI-Mock数据
* webpack
## 介绍
 <br>
  这个项目做的是一个单页应用的商城，由于没有数据源，我使用的是YAPI自己写的一些模拟数据，数据之间并没有关联性（所以刷新页面之后返回的数据全都是随机，
并不是项目问题哦，只是起一个展示和Axios调用的实例给大家看）。
 <br>
  项目全都是单文件组件，依靠创建实例挂载根元素，里面的分类页面和公共头部搜索交互都使用vuex做了
缓存处理，只要不刷新页面，或者不退出分类页面，无论点击哪个分类都不会再次发起Request请求，有效的减少不必要的服务器消耗,缓存相关逻辑store文件里面.

webpack.config配置文件里面都写了相应的注释，虽然使用官方提供的cli方便快捷，但是我更倾向于自己构建，有兴趣的同学自行Start~~~

## Start
* 克隆项目地址：https://github.com/SCTJRB/Vue.git
* 安装相关依赖：npm install  // cnpm install 推荐使用taobao镜像
* 打包文件：npm run webpack
* 运行：npm run dev  如8080端口被占用 可使用npm run server
