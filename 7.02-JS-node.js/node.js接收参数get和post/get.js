/*
    前端传参
        get 传参 拼接在url上面 
        post传参 不是拼接在url上面---请求体中传递
*/

// 导入模块
const http = require('http') 
const path = require('path')
const fs = require("fs")
const url = require("url")

// 2. 创建一个服务器           request---请求    response--re's
const server = http.createServer((request,response)=>{
    // 读文件并返回    取决于请求的哪个文件
    let urlobj = url.parse(request.url,true)
    // 这里urlobj返回一个对象        urlobj.query返回的是数据信息
    console.log(urlobj.query)

    // 打印路径地址
    console.log(request.url)

    // 这里拿到id 对应的英雄的详细信息就可以返回了
    response.end(JSON.stringify(urlobj.query))
}) 
// 4.开启服务器

server.listen(8070,()=>{
    console.log('服务器开启了 : 8070')
})