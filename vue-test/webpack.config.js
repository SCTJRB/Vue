const path = require('path'); // 引入路径插件
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin'); // 引入模板渲染插件
const CleanWebpackPlugin = require("clean-webpack-plugin"); //去除build文件中的残余文件
module.exports = {
    //指定文件入口
    entry:__dirname +"/main.js",
    //指定打包后文件输出路径和输出文件名
    output:{
        path: __dirname +"/dist",
        filename: 'build-[hash].js'    //去除缓存使用哈希值 打包后的JS文件带有哈希值
    },
    //构建本地服务器 npm install --save-dev webpack-dev-server   之后就可以在package.json里面的script中配置命令了 如：server
    devServer:{
        contentBase:"./dist", //当前目录提供本地服务器
        port:"8090",    //监听端口
        inline:true,    //源文件改变是自动刷新页面
        historyApiFallback:true //在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
    },
    module: {
        rules:[
            {
                test:/(\.jsx|\.js)$/,  //一个用以匹配loaders所处理文件的拓展名的正则表达式
                loader:"babel-loader",  //loaders加载器的名称
                options: {              //babel规则配置
                    presets: ['es2015'],
                    plugins: ['transform-runtime']
                },
                exclude: /node_modules/  //屏蔽不需要处理的目录
            },
            {
                test:/\.css$/,
                loader:'style-loader!css-loader!autoprefixer-loader'
            },
            {
                test:/\.less$/,
                loader:'style-loader!css-loader!autoprefixer-loader!less-loader'
            },
            {
                test: /\.(jpg|ttf|svg|png)$/,
                loader: 'url-loader?limit=4096'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'),  //打包后JS文件开头的版权信息
        new htmlWebpackPlugin({   //一个自动引用你打包后的JS文件的新index.html   npm install --save-dev html-webpack-plugin
            template: './index.html',
        }),
        new CleanWebpackPlugin('dist/*.*', {   //每次打包去除build文件中的残余文件
            root: __dirname,
            verbose: true,
            dry: false
        })
    ],
};
