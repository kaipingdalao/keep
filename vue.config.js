const path = require("path");
function resolve(dir){
    return path.join(__dirname,dir)//path.join(__dirname)设置绝对路径
}
module.exports={

    chainWebpack:(config)=>{
        config.resolve.alias
            .set('@',resolve('./src'))
            .set('static', resolve('./public/static'))
            .set('components',resolve('./src/components'))
        //set第一个参数：设置的别名，第二个参数：设置的路径
        config.optimization.runtimeChunk("single");

    },
    configureWebpack: config => {
        Object.assign(config, {
            // 开发生产共同配置

            // externals: {
            //   'vue': 'Vue',
            //   'element-ui': 'ELEMENT',
            //   'vue-router': 'VueRouter',
            //   'vuex': 'Vuex'
            // } // 防止将某些 import 的包(package)打包到 bundle 中，而是在运行时(runtime)再去从外部获取这些扩展依赖(用于csdn引入)
            resolve: {
                extensions: [".js", ".vue", ".json"], //文件优先解析后缀名顺序
                alias: {
                    "@": path.resolve(__dirname, "./src"),
                    "@c": path.resolve(__dirname, "./src/components"),
                    "@v": path.resolve(__dirname, "./src/views"),
                    "@u": path.resolve(__dirname, "./src/utils"),
                    "@s": path.resolve(__dirname, "./src/service")
                }, // 别名配置
                plugins: []
            }
        });

    }
}
