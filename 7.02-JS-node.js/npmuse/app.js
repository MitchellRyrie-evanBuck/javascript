var Crawler = require("crawler")
const http = require('http') 
const path = require('path')
const fs = require("fs")
const url = require("url")
const querystring = require("querystring")


var c = new Crawler({
    maxConnections : 10,
    callback : function(error, res, done){
        if(error){
            console.log(error)
        }else{
            var $ = res.$;
            // console.log($("title").text())

            // 爬取丁香园数据
            fs.writeFile("./temp/1.txt",$("body").text(),(err)=>{
                if(err == null){
                    console.log("爬取成功")
                }
            })
        }
        done()
    }
});
// c.queue("http://www.amazon.com")

c.queue("http://ncov.dxy.cn/ncovh5/view/pneumonia")













