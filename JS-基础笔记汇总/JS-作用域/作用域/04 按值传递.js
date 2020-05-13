// 按值传递 -> 将全局变量作为实参传递一个函数
var msg = 100

function fn(msg) {
  msg += 100
  return msg
}

var result = fn(msg)

console.log(msg, result) // 100 200