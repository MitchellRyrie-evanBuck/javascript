//通过初始化器万式定又对象
var obj={
    name : '张无忌'
}
//定义构造函数
function Hero(){}
//将对象obj赋值给构造函数Hero的原型
Hero. prototype = obj
//通过构造函数创建对象
var hero = new Hero()
//判断指定对象是否是另一个对象的原型
var result = obj.isPrototypeOf (hero)//true
var result = hero.isPrototype0f (obj)//false
console. log(result)