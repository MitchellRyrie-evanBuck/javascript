
"use strict"

var v = 100
console.log(v)

function fn(){
    var w = 200    //非严格模式下 不使用var变量定义关键字  变量将提升为全局变量
    console.log(w)
}
fn()
console.log(w)









