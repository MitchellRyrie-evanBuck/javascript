// 算数的基本运算: 注意变量的数据类型(可能发生自动类型转换)
var result1 = 100 + '100'
console.log(result1)

/*
   求余运算符的结果
   * 当左边的操作数为正数时，那么结果也为正数
   * 当左边的操作数为负数时，那么结果也为负数
 */
console.log(10 % 3) //输出1
console.log(-10 % 3) //输出-1
console.log(10 % -3) //输出1
console.log(-10 % -3) //输出-1

/*
  自增运算符和自减运算符 -> 前置和后置
  * 前置自增/自减运算符: 运算符是在变量的左边
  * 后置自增/自减运算符: 运算符是在变量的右边
 */
var num = 100
// var result2 = num++ // 后置自增
// console.log(result2, num)
var result2 = ++num // 前置自增
console.log(result2, num)