//开启严格模式
"use strict"

//在全局作用域
function fn(){
    //在函数作用域
    function n(){}
}

////在严格模式下，函数的定义只能在全局作用域与函数作用域(不能在块级作用域定义函数)
for (var i=0;i<10;i++){
    // ECMAScript 6新增 - 存在着块级作用域
    var v = 100
    //开启严格模式，报错
    function f(){
        console.log('111')
    }
}
console.log(v)//100
f()