
/*
    接口：得到一条随机笑话
    接口地址：/joke
    请求方式：get
    参数：无
    返回：一条笑话
*/

// 导入模块
const http = require('http') 
const path = require('path')
const fs = require("fs")
const express = require('express')

// 创建一个服务器
const app = express()

// 设置返回给用户看的内容
app.get('/joke', (req, res) => {
    // 实际开发是从数据库拿到数据
    let arr = ["aaaaaaaaa","bbbbbbbbbb","cccccccccc"]
    // Math.floor() === 向下取整
    let index = Math.floor(Math.random()*3)
    // 返回笑话
    res.send(arr[index])
})

// 启动服务器
app.listen(3990,()=>{
    console.log("fuwuqikaiqi")
})
