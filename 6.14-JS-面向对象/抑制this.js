//开启严格模式
"use strict"

var v = 100
function fn(){
    console.log(this.v)
}

var obj = {
    v : 200
}
fn.call(obj)//200
//报错
fn.call(null)// this指向全局对象