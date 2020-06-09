/*
  创建一个构造函数 -> 作用: 创建对象
  * 具有显式原型 -> prototype -> 默认是一个空对象(独立于Foo的)
  * 具有构造器 -> constructor
 */
function Foo() {}
// 验证prototype确实是Foo的属性
console.log('Foo.prototype: ' + Foo.prototype)
// 发现Foo.constructor指向Function
console.log('Foo.constructor: ' + Foo.constructor)
// 发现Foo.prototype指向的对象的constructor是Foo自身
console.log('Foo.prototype.constructor: ' + Foo.prototype.constructor)
// 得到结果: Object
console.log('Foo.prototype.__proto__: ' + Foo.prototype.__proto__)

console.log('Foo.__proto__: ' + Foo.__proto__)

/*
  创建Foo类型的对象:
  * 具有隐式原型 -> __proto__
 */
var f1 = new Foo()
var f2 = new Foo()

// 验证创建的对象(f1/f2)是否存在constructor
console.log('f1.constructor: ' + f1.constructor)
// 测试结果: Object
console.log('f1.__proto__' + f1.__proto__)

// Function是一个构造函数

console.log(Function.prototype)
// Function的constructor指向自身
console.log(Function.constructor)
// Function.prototype的constructor指向自身
console.log(Function.prototype.constructor)

console.log(Function.__proto__)

console.log(Object.prototype)
// Object的constructor指向Function
console.log(Object.constructor)
// Object.prototype的constructor指向自身
console.log(Object.prototype.constructor)

console.log(Object.prototype.__proto__)

/*
  1.(构造)函数 -> 函数即对象
    * constructor: 指向Function
      * 创建(构造)函数 -> new Function()
    * prototype: 指向一个constructor为自身的空对象
  2.对象
    * constructor: 指向创建该对象的构造函数
    * __proto__: 源于创建该对象的构造函数的显式原型
  3.Function -> 是所有构造器的源头
    * constructor: 指向自身
    * prototype: 对象的constructor指向自身
  4.Object -> Object.prototype是所有原型的源头
    * constructor: 指向Function
    * prototype: 是一个constructor指向自身的空对象
  JavaScript面向对象的继承: 
  * 是基于对象的原型实现 -> object.__proto__ -> 指向一个对象
  * 是基于构造函数的原型实现 -> Object.prototype -> 指向一个空对象
 */