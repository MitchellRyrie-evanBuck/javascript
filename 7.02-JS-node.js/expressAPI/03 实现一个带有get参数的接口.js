/*
    接口：查询英雄外号
    接口地址：/getNickName
    请求方式：get
    参数： heroName
    返回：英雄外号
*/



// 导入模块
const http = require('http') 
const path = require('path')
const fs = require("fs")
const express = require('express')

// 创建一个服务器
const app = express()

// 设置返回给用户看的内容
app.get('/getNickName', (req, res) => {
    console.log(req.query)

    // 处理
    let heroNickName = ""
    switch (req.query.heroName){
        case "提莫":
            heroNickName = "迅捷斥候";
            break;
        case "李青":
            heroNickName = "盲僧";
            break;
        case "盖伦":
            heroNickName = "银河之力";
            break;
        case "亚索":
            heroNickName = "疾风剑豪";
            break;
        case "阿狸":
            heroNickName = "九尾妖狐";
            break;
        default:
            heroNickName = "不存在";
            break;
    }

    res.send(heroNickName)
})

// 启动服务器
app.listen(4399,()=>{
    console.log("fuwuqikaiqi")
})
