// 得到 undefined 值的情况

// 1. 声明变量，但不初始化
var msg

// 2. 声明变量同时初始化值为 undefined
var str = undefined

// 3. 函数默认的return语句所返回的值为 undefined
function fn() {
  console.log('函数执行了...')
}

var result = fn() // undefined

// 4. 函数设置return语句的返回值为 undefined
function fn() {
  console.log('函数执行了...')
  return undefined
}

// 5. 访问一个对象中不存在的属性，结果为 undefined
var obj = {
  name: "李雷",
  age: 18
}
console.log(obj.job) // undefined