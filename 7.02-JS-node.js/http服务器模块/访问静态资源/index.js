// 导入模块
const http = require('http') 
const path = require('path')
const fs = require("fs")



// 2. 创建一个服务器           request---请求    response--re's
const server = http.createServer((request,response)=>{
    // 3. 设置返回用户看的内容 ---读文件   
    const fullpath = path.join(__dirname,"index.html")
    fs.readFile(fullpath,"utf-8",(err,data)=>{
        if(err == null){
            response.end(data)
            // response.setHeader("Content-Type","text/html;charset=utf-8")
    
        }else{
            console.log("404")
        }
    })
})


// 4.开启服务器

server.listen(8087,()=>{
    console.log('服务器开启了 : 8087')
})


