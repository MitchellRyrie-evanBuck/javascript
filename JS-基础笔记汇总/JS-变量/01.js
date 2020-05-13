// const MY_CONSTANT = '这是一个常量'

// if (MY_CONSTANT) {
//     console.log(MY_CONSTANT);

// }

// console.log(isNaN(10)) //输出false（10是一个数值）
// console.log(isNaN("10")) //输出false（可以被转换成数值 10）
// console.log(isNaN("blue")) //输出true（不能转换成数值）
// console.log(isNaN(true)) //输出false（可以被转换成数值 1）

// console.log(typeof(MY_CONSTANT))

// var bool = new Boolean('这是一个测试内容')
// console.log(bool)

// var bool = new Boolean(false)
// var result = new Boolean(bool)
// console.log(result)

// var num = new Number('123')
// console.log(num)
// console.log(typeof(num))
// var num = new Number('这是一个测试内容.')
// console.log(num)

var str = new String('这是一个测试内容.')
console.log(str instanceof String)

console.log(Object.prototype.toString.call(null))  //准确得到null的类型








