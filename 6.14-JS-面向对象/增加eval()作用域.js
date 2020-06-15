//开启严格模式
"use strict"

//在严格模式下， 增加eval作用域 - eval()函数定义的变量只能在当前eval()函数中使用
eval('var v = 100')

//在全局作用域中调用变量 - 报错
console.log(v)//100