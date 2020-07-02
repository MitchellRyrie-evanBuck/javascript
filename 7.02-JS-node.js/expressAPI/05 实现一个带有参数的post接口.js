/*
    接口：用户登录
    接口地址：/login
    请求方式：post
    参数： username     password
        账号           密码
    返回：  成功/失败
*/
const express = require('express')
var bodyParser = require('body-parser')

// 创建一个服务器
const app = express()
// parse application/x-www-form-urlencoded     --转化格式
app.use(bodyParser.urlencoded({ extended: false }))

// 设置返回给用户看的内容
app.post('/login', (req, res) => {

    // console.log(req.query)        ----------------拿不到

    // 要想拿到post传递过来的参数  要使用第三方模块   body-parser
    console.log(req.body)      //--拿到数据

    if(req.body.u == "1" && req.body.p == "2"){
        res.send({
            code : 200,
            msg : "succes"
        })
    }else {
        res.send({
            code : 400,
            msg : "Wrong"
        })
    }

})

// 启动服务器
app.listen(4399,()=>{
    console.log("开启成功")
})
