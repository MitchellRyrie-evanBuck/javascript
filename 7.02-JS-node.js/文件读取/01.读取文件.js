

// 导包
const fs = require("fs")

fs.readFile("./7.02-JS-JQuery/text.txt","utf-8",(data,err) =>{
    if(err == null){
        console.log(data)
    }else{
        console.log(err)
    }
})