var Crawler = require("crawler");
var fs = require('fs');
 
var c = new Crawler({
    encoding:null,
    jQuery:false,// set false to suppress warning message.
    callback:function(err, res, done){
        if(err){
            console.error(err.stack);
        }else{
            fs.createWriteStream(res.options.filename).write(res.body);
        }
        
        done();
    }
});
// 爬取知乎图片
// c.queue({
//     uri:"https://pic4.zhimg.com/80/v2-4b2d717613ec8d55debddddca1b93001_720w.jpg",
//     filename:"./temp/1.png"
// });



// 爬取哔哩哔哩视频
/*
    反扒机制   ----把服务器伪装成客户端
*/

c.queue({
    uri:"https://upos-sz-mirrorkodo.bilivideo.com/upgcxcode/52/92/23889252/23889252_da3-1-16.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1593688314&gen=playurl&os=kodobv&oi=465258842&trid=7fad084b65934a41907533492d9ce785h&platform=html5&upsig=a5ebbbc9f88e94515a338af67f809717&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=352020555&logo=80000000",
    filename:"./temp/girls.avi"
});