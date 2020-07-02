// 自己配置静态资源服务器   所有资源都要向本地接收


// 导入模块
const http = require('http') 
const path = require('path')
const fs = require("fs")

// 2. 创建一个服务器           request---请求    response--re's
const server = http.createServer((request,response)=>{
    // 读文件并返回    取决于请求的哪个文件

    console.log(request.url)
    const fullpath = path.join(__dirname,"WWW",request.url)
    fs.readFile(fullpath,(err,data)=>{
        if(err == null){
            response.end(data)
        }else{
            console.log("404")
        }
    }) 
}) 
// 4.开启服务器

server.listen(8090,()=>{
    console.log('服务器开启了 : 8090')
})
