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
const querystring = require("querystring")


// 2. 创建一个服务器           request---请求    response--re's
const server = http.createServer((request,response)=>{
    // 一小块一小块的拿
    let postDate = ""

    // 给request一个data事件
    // 事件处理程序  参数是当前这次传递过来的这一小块内容
    request.on("data",(chunk)=>{
        postDate += chunk
    })
    request.on("end",()=>{
        console.log(postDate)

        // 解析传递过来的参数
        let postobj = querystring.parse(postDate)
        console.log(postobj)
    
        // 这里拿到id 对应的英雄的详细信息就可以返回了
        response.end("sbsbsb")
    })
}) 
// 4.开启服务器

server.listen(8070,()=>{
    console.log('服务器开启了 : 8070')
})