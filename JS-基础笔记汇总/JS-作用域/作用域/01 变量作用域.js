// 声明全局变量 - 全局作用域
var msg = 100
// 声明局部变量 - 某个函数作用域
function fn() {
  // 局部变量 - 只能在当前函数作用域中访问
  var msg2 = 200
  console.log(msg2, msg)
}

fn()

console.log(msg)