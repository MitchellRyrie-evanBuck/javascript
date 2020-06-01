(function fn(v){
    let x = 100
    console.log("aaaaaaa" + x)
})();


/*
    自调函数
    ----作用---用于执行一次性的逻辑
    ----应用---作为整体逻辑代码外层结构
    结构---
        第一个括号--定义函数
        第二个括号--调用函数
*/


(function fn(v){
    let x = 100
    console.log("aaaaaaa" + x + v)
})("aiDeity")











