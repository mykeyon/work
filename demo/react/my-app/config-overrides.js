// module.exports = function override(config, env){
//     return config;
// }
const { override, fixBabelImports, addLessLoader } = require('customize-cra');
module.exports = override(
    fixBabelImports('import',{
        libraryName: 'antd-mobile',
        style: 'css'
    }),
    //使用less-loader对源码的less的变量制定
    addLessLoader({
        javascriptEnable: true,
        modifyVars: { 'primary-color': '#248aff' }
    })
)