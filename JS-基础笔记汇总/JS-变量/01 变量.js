// 调用一个未声明的变量，结果报错
// console.log(message)

// var message
// console.log(message) //undefined

// (非严格模式)JavaScript声明变量允许不使用 var 关键字
// 'use strict'
// message = 100

var msg = 'this is message' // 值为 this is message
var msg = 100 // 值为 100
console.log(msg)