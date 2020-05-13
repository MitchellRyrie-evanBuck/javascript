// 当声明变量，但不初始化时，变量的默认值为 undefined
var msg
console.log(msg)
// 当声明变量，将变量的值初始化为 undefined
var msg2 = undefined
console.log(msg2)

// undefined既是类型也是值
console.log(typeof msg) // undefined
// JavaScript语言中没有 Undefined 类型
// console.log(msg instanceof Undefined)

// null 表示为空
var str = null
console.log(str)
/*
  null 是 5 个基本类型种的一个，但是得到的类型是 object
  * JavaScript语言的历史遗留问题/当初设计的纰漏
 */
console.log(typeof str) // object
// 可以准确的判断 null 的类型
console.log(Object.prototype.toString.call(null))
// null 的应用: 当一个变量的值为 null 时，表示该变量不指向任何内存地址(将原本的内存地址销毁) -> 释放资源

// undefined和null之间存在关系吗? 实际上undefined是派生于null

// 说明undefined和null的值相等
console.log(undefined == null) // true
// 说明undefined和null的类型不等
console.log(undefined === null) // false