// 直接量方式定义一个对象
var proto = {
  sayMe: function () {}
}

// 定义一个数组: 其实就是Array类型的对象
var arr = []
// console.log(arr instanceof Array)

function createObject() {
  this.name = '李雷'
  this.sayMe = function () {}
}
// 构造函数的原型属性 -> 其实是一个空对象 -> 利用最简形式实现继承
createObject.prototype = new Array()
// 结构上是一个, 自定义的一个对象 -> 类数组对象
var newObj = new createObject()

console.log(newObj)
newObj.push('xxx')
console.log(newObj)