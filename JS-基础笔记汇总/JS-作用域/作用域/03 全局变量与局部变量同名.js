// 全局变量
var msg = 100
// 全局变量与局部变量同名时，在函数作用域中只能访问局部变量
function fn() {
  // 变量提升引起的结果
  console.log(msg) // undefined

  // 局部变量
  var msg = 200

  console.log(msg) // 200 
}

fn()

console.log(msg) // 100