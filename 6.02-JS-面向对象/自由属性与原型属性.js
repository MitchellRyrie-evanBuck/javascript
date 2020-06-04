//定义构造函数
function Hero(name){
    //构造函数本身的属性->自有属性
    this.name = name
    this.sayMe = function(){
        console.log('this is function')
    }
}

//通过构造函数Hero的prototype新增属性或方法
// 通过原型所定义的属性-> 原型属性
Hero. prototype.age = 18

/* 
    通过构造函数Hero创建对象时
        不仅具有构造函数的自有属性
        还具有构造函数的原型属性
*/

var hero = new Hero(111)
console.log(hero.name)//111
console.log(hero.age)//18

var hero2 = new Hero(222)
console.log(hero2.name)//222
console.log(hero2.age)//18

//为对象hero新增age属性
// hero.age = 80
// console.log(hero.age)//80
// console.log(hero)
// console.log(hero2.age)//18

Hero.prototype.age = 80
console.log(hero.age)
console.log(hero2.age)