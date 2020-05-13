// 变量与函数(函数声明方式)同名时，函数的提升比变量的提升优先级更高
console.log(fn) // 函数

var fn = 100

function fn() {
  console.log('this is function.')
}