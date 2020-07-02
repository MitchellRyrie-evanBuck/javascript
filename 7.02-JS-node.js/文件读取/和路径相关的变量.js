


console.log(__dirname)                  // 文件夹的绝对路径

console.log(__filename)                 // ------文件决定路径


let file = __dirname + "/text.txt"
// 导包
const fs = require("fs")
console.log(file)

fs.readFile(file,"utf-8",(data,err) =>{
    if(err == null){
        console.log(data)
    }else{
        console.log(err)
    }
})











