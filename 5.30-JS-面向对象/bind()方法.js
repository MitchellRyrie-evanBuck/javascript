//定义函数
// function fn(){
//     console.log('this is function')
// }
var fn = function(v,w){
    console.log('this is function' + v + w)
}
/*
    bind(thisArg, arg1, arg2, ...)方法-用于创建一个 新的函数(复制)
        参数
            thisArg - 用于指定this的值
            arg1, arg2,... - 用于接收函数的实参
                新创建的函数的调用时，传递的实参无效
        返回值 - 返回新创建的函数
        作用 - 实现函数的深复制
*/ 
fn('111')
var f = fn.bind(null,'222')//参数的默认值
// console.log(f)
f('333')

fn = function(){
    console.log('this is function too')
}
fn()


var a = function(){
    console.log('this is a')
}

var b = a
b()//this is a

a = function(){
    console.log('this is new a')
}
b()//this is a

