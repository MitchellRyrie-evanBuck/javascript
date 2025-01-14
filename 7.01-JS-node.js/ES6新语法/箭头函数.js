/*
*
*
* 箭头函数
*   匿名函数的一个简写
*
* 简写规则:
    a. function 改成=> = >可以读成goesto
    b.如果只有一个形参，那就可以省略形参小括号.
    c.如果不是一个形参，0个或者多个形参， 那就不能省略这个形参小括号了
    d.如果函数体只有一句话,那就可以省略函数体的大括号
    e.如果函数体只有一句话, 并且这一句话是return 返回值,那return也要省略.
    f.如果函数体不是一句话， 那就不能省略这个大括号.

  箭头函数的this和以前说的函数的this有些不一样.
* */

//----------------------------------------------
//普通的匿名
// let fn = function(name){
//     console. log( '我的名字是' +name );
// }
// fn('111')

//箭头函数
// let fn = name => console. log('我的名字是' +name)
// fn('111')
//----------------------------------------------

//
// let fn1 = function (name) {
//     return name+'111'
// }
// let fn1 = name => name+'111'
// console.log(fn1('222'));

//----------------------------------------------

// let fn2 = function (num1,num2) {
//     console.log(num1+num2)
//     return num1+num2+30
// }
//
// let fn2 = (num1,num2) => {
//     console.log(num1+num2)
//     return num1+num2+30
// }
//
// console.log(fn2(1, 2));

//----------------------------------------------

// setTimeout(function () {
//
// },1000)
//
// setTimeout(() => {
//
// },1000)

//----------------------------------------------







