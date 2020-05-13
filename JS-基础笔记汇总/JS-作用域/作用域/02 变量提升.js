// 变量提升 - 变量的声明被提升

// 先调用，后声明
console.log(msg)
// 必须先声明变量，再调用变量
var msg = 100
console.log(msg)

// 约等价于以下写法
var msg
console.log(msg)
msg = 100
console.log(msg)