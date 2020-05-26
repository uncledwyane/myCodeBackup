const path = require('path')

const htmlWebpackPlugin = require('html-webpack-plugin')

const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: path.resolve(__dirname, './src/main.js'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html'
        }),
        new VueLoaderPlugin({
            template: path.resolve(__dirname, './src/js/index.vue'),
            filename: 'index.vue'
        })
    ],
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }, // 创建处理 css 文件的 loader 匹配规则
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }, // 配置处理less文件的规则
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] }, // 配置 处理 scss 文件的规则
            //{ test: /\.(jpg|png|gif|bmp)$/, use: 'url-loader?limit=7631&name=[hash:8]-[name].[ext]' }, // 配置 处理 样式表中图片的 loader规则
            // 可以使用?给 url-loader传递参数，其中，有一个固定的参数，叫做 limit，表示图片的大小，需要给定一个 数值；
            // limit 给定的这个数值，是 图片的大小，单位是 Byte（字节）
            // 如果指定了 limit 参数，则只有图片的大小，小于给定的 值时候，才会转为base64格式的图片；否则，就不转换；
            //{ test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }, // 添加转换JS文件的loader，其中，必须把 node_modules 目录设置为 排除项，这样，在打包的时候，会忽略node_modules 目录下的所有JS文件；否则项目运行不起来！
            { test: /\.vue$/, use: 'vue-loader' }, // 解析Vue组件的第三方loader
            { test: /\.ttf|woff|woff2|eot|svg$/, use: 'url-loader' }, // 处理 样式中字体文件路径的问题
            { test: /\.(png|jpg|bmp|gif)$/, use: 'url-loader' }
        ]
    },
    resolve: {
        alias: { //修改 vue 被导入时候包的路径
            "vue$": 'vue/dist/vue.js'
        }
    },
    devServer: {
        // 跨域的配置
        proxy: {
            '/toutiao': {
                target: 'http://v.juhe.cn',
                changeOrigin: true
            },
            '/todayOnhistory': {
                target: 'http://v.juhe.cn',
                changeOrigin: true
            },
            '/laohuangli': {
                target: 'http://v.juhe.cn',
                changeOrigin: true
            },
            '/cxdq': {
                target: 'http://apis.juhe.cn',
                changeOrigin: true
            },
            '/simpleWeather': {
                target: 'http://apis.juhe.cn',
                changeOrigin: true
            },
            '/joke':{
                target: 'http://v.juhe.cn',
                changeOrigin: true
            },
            '/news/get': {
                target: 'https://api.binstd.com',
                changeOrigin: true
            },
            '/api': {
                target: 'https://api.ixiaowai.cn',
                changeOrigin: true
            },
            '/news/channel': {
                target: 'https://api.binstd.com',
                changeOrigin: true
            },
            '/mobile': {
                target: 'http://apis.juhe.cn',
                changeOrigin: true
            },
            '/japi': {
                target: 'http://api.juheapi.com',
                changeOrigin: true
            },
        }
    }
}