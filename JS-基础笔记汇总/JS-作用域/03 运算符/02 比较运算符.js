// 相等运算符和不相等运算符: 比较的是值
console.log(2 == '2') // true
// 全等运算符和不全等运算符: 比较的是值和类型
console.log(2 === '2') // false

var result = Number('this is message')
console.log(isNaN(result)) // true: 表示当前变量的值为 NaN