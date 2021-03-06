const path = require('path');

const resolve = dir => {
    return path.join(__dirname, dir)
};

// baseUrl: process.env.NODE_ENV === 'production'
//   ? '/production-sub-path/'
//   : '/'

module.exports = {
    lintOnSave: false,
    baseUrl: './',
    outputDir: 'dist',
    assetsDir: "static",
    runtimeCompiler: true,  // 是否使用包含运行时编译器的 Vue 构建版本, 设置为true你就可以在 Vue 组件中使用 template 选项
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
    },
    productionSourceMap: false,     // 打包时不生成.map文件
};
