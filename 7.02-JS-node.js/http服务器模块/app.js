// 导入模块
const http = require('http') 
const path = require('path')
const fs = require("fs")



// 2. 创建一个服务器           request---请求    response--re's
const server = http.createServer((request,response)=>{
    // 3. 设置返回用户看的内容 ---读文件   
    const fullpath = path.join(__dirname,"web",request.url)

    // 服务器有嗅探功能
    // 根据你请求资源的名字，能够知道你请求的是什么类型的资源
    // 知道喽什么类型的资源就可以根据这种类型的资源进行返回内容
    fs.readFile(fullpath,(err,data)=>{
        if(err == null){
            response.end(data)
            // response.setHeader("Content-Type","text/html;charset=utf-8")
    
        }else{
            console.log("404")
        }
    }) 

}) 
// 4.开启服务器

server.listen(8090,()=>{
    console.log('服务器开启了 : 8090')
})
