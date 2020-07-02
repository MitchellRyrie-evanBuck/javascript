const express = require('express')

// 创建一个服务器
const app = express()

// 设置返回给用户看的内容
app.post('/sb', (req, res) => {
    res.send("sb ,    此乃post接口")
})

// 启动服务器
app.listen(4399,()=>{
    console.log("fuwuqikaiqi")
})
