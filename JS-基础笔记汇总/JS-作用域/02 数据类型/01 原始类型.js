/*
  问题: JavaScript的浮点类型的计算可能出现误差的
  解决: 把浮点数换算成整数进行计算，计算完成后再换算成浮点数
 */
var x = .3 - .2
var y = .2 - .1
// x和y是不相等的
console.log(x == y) //false
console.log(x, y)
// NaN表示不是一个数字，但是它是number类型
console.log(NaN == NaN) //false