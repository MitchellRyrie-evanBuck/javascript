//开启严格模式
"use strict"

//在严格模式下，arguments对象无法调用callee()方法
function fn(){
    // return arguments.callee
    console.log(arguments.length)//0
}

fn()