
//   npm 清除命令   npm cache clean -f

// 导入模块
const express = require('express')
// 创建一个服务器
const app = express()
// 设置返回给用户看的内容
app.get('/', (req, res) => {
    // 内置模块用end返回  
    // express 用send返回
    res.send('Hello World')
})

// 启动服务器
app.listen(3000,()=>{
    console.log("fuwuqikaiqi")
})




