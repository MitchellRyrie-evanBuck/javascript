
// 导入模块
const http = require('http') 

// 2. 创建一个服务器           request---请求    response--re's
const server = http.createServer((request,response)=>{
    // 3. 设置返回用户看的内容
    response.setHeader("Content-Type","text/html;charset=utf-8")
    response.end('nihao嗯嗯嗯额')
})



// 4.开启服务器

server.listen(8087,()=>{
    console.log('服务器开启了 : 8087')
})







