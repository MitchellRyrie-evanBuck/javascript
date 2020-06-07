// 结论: 函数即对象
function fn() {
  console.log('this is function.')
  // 局部变量
  var obj = new Object()
  return obj
}

/*
  当做是一个函数: 普通函数和构造函数
  * 普通函数: 定义局部变量和内部函数
    var xxx = value
    var xxx = function(){}
  * 构造函数: 定义属性和方法
    this.xxx = value
    this.xxx = function(){}
    * 构造函数具有原型: 原型默认是一个空对象(指向另一个对象)
 */
console.log(fn instanceof Function) //true
// 函数调用后, 返回一个对象
console.log(fn()) // object
// 当做是一个对象
console.log(fn instanceof Object) //true

fn.sayMe = function () {
  console.log('this is lilei.')
}

fn.sayMe()