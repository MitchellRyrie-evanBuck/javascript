// 1. 形参与实参的个数相同
function fn(a, b) {
  console.log(a, b)
}

fn(1, 2) // 1 2

// 2. 形参的个数多于实参的个数, 多余的形参值为 undefined
function fn(a, b, c) {
  if (c === undefined) {
    console.log('函数在调用时,参数c没有传递')
    // 利用这样的特性完成一些巧妙的设计
  }
  console.log(a, b, c)
}

fn(1, 2) // 1 2

// 3. 形参的个数少于实参的个数, 多余的实参在函数体内接收不到
function fn(a, b) {
  console.log(a, b)
}

fn(1, 2, 3) // 1 2

// 解决第三情况的方法(ES5)
function fn() {
  // 函数体内部存在一个arguments对象, length属性值为实参的个数
  console.log(arguments.length)
}

fn(1, 2, 3)

// JavaScript语言中的函数不存在函数重载现象(覆盖)