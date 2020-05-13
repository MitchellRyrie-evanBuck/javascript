/* 
  当使用函数声明方式时，变量名与函数名同名 -> 变量覆盖函数
  var fn = 'message'
  // 函数声明方式
  function fn() {
    return 100
  }

  console.log(fn) // 变量

  fn() // 报错
*/

// 变量的重复声明 -> 和声明的顺序有关
var fn = 'message'
// 函数表达式方式
var fn = function () {
  return 100
}

console.log(fn) // 函数

fn() // 正确

/*
  得到的结论:
  1. 函数的声明方式和函数的表达式方式，在内存的存储结构上应该是不同的
  2. 当使用函数声明方式时，变量名与函数名同名 - > 变量覆盖函数
 */