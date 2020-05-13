// 转换为 boolean 类型
console.log(typeof !!'this is message') // boolean
console.log(typeof !!100) // boolean

// 转换为 number 类型
console.log(typeof + 'this is message') // number
console.log(typeof + true) // number
// NaN 是 number 类型
console.log(+'this is message') // NaN

// 转换为 string 类型
console.log(typeof ('' + 100)) // string
console.log(typeof ('' + true)) // string

console.log(typeof (100 + '')) // string
console.log(typeof (true + '')) // string

/* 
  在计算中
  * 如果存在字符串的话，按照字符串的拼接操作
  * 没有字符串，而存在数字值的话，按照算数运算操作
 */