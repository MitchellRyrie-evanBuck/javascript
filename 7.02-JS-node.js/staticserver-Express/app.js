// 自己配置静态资源服务器   所有资源都要向本地接收


// 导入模块
const http = require('http') 
const path = require('path')
const fs = require("fs")
const express = require('express')

// 创建一个服务器
const app = express()

// 将 WWW 目录下的图片、CSS 文件、JavaScript 文件对外开放访问
app.use(express.static('WWW'))

// 设置返回给用户看的内容
// app.get('/', (req, res) => {
//     // 内置模块用end返回  
//     // express 用send返回
//     res.send('Hello World')
// })

// 启动服务器
app.listen(3090,()=>{
    console.log("fuwuqikaiqi")
})


// npm 切换淘宝镜像    npm config set registry https://registry.npm.taobao.org/

// 不想用 切换回来   npm config set registry https://registry.npmjs.org

// 安装 cnpm   npm install -g cnpm --registry=https://registry.npm.taobao.org 