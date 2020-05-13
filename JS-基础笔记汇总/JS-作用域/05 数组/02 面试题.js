// 1.字面量/直接量
var arr1 = []
// 2.构造函数方式
var arr2 = new Array()
// JavaScript语言中的数组无论哪一种方式定义，都是引用类型
console.log(typeof arr1, typeof arr2)
console.log(arr1 instanceof Array, arr2 instanceof Array)

/*
  面试题: 以下写法的区别
  var num1 = 100;var num2 = new Number(100)
  var str1 = 'message';var str2 = new String('message')
  var bool1 = true;var bool2 = new Boolean(true)

  var arr1 = [];var arr2 = new Array()
 */