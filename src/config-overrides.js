const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
    //针对antd 按需打包，根据import打包
    fixBabelImports ('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true // 自动打包相关样式
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: {'@primary-color': '#1DA57A'}
    })
)