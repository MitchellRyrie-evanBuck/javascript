// 转换为 boolean 类型
console.log(typeof Boolean('this is message')) // boolean
console.log(typeof Boolean(100)) // boolean

// 转换为 number 类型
console.log(typeof Number('100')) // number
console.log(typeof Number(true)) // number
/*
 * parseInt()函数: 将数据转换为 number 类型的整数
 * parseFloat()函数: 将数据转换为 number 类型的浮点数
 */
var str1 = '100'
var str2 = '100.1'
console.log(typeof parseInt(str1)) // number
console.log(typeof parseInt(str2)) // number
console.log(typeof parseFloat(str1)) // number
console.log(typeof parseFloat(str2)) // number

console.log(parseInt(str1)) // 100
// 如果使用 parseInt() 方法转换一个 string 类型的浮点数，转换后的结果为取整数部分
console.log(parseInt(str2)) // 100
console.log(parseFloat(str1)) // 100
console.log(parseFloat(str2)) // 100.1

// 转换为 string 类型
console.log(typeof String(100)) // string
console.log(typeof String(true)) // string
// toString()方法
var num = 100
var bool = true
console.log(typeof num.toString()) // string
console.log(typeof bool.toString()) // string

/*
  隐式类型转换和显式类型转换的区别:
  * 隐式类型转换
    * 并不是JavaScript官方规范中的内容
    * 执行的效率更高/性能更好
    * 不易于使用(语法不明确)
  * 显式类型转换
    * 是JavaScript官方规范中的内容
    * 执行的效率不高/性能不太好
    * 易于使用(语法明确)
 */