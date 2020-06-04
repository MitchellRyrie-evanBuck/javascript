"use strict"
var obj = {

}
//  设置对象OBJ是不可扩展的对象

Object.preventExtensions(obj)
// 为他新增属性

obj.name = "aa"
console.log(obj.anme)













