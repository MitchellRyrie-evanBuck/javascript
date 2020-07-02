/*
    接口：食物
    接口地址：/food
    请求方式：get
    参数：无
    返回：json
*/

// 导入模块
const http = require('http') 
const path = require('path')
const fs = require("fs")
const express = require('express')

// 创建一个服务器
const app = express()

// 设置返回给用户看的内容
app.get('/food', (req, res) => {
    res.send({
        fondname : "红烧肉",
        price : "666",
        description : "好吃不上头 雷霆嘎巴"
    })
})

// 启动服务器
app.listen(4399,()=>{
    console.log("fuwuqikaiqi")
})
