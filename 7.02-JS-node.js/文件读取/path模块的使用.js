
// 避免少些斜杠错误的出现


const path = require('path')
const fs = require("fs")
// 使用方法          ----拼接路径片段
const fullpath = path.join(__dirname,"text.txt")

console.log(fullpath)


fs.readFile(fullpath,"utf-8",(data,err) =>{
    if(err == null){
        console.log(data)
    }else{
        console.log(err)
    }
})


















