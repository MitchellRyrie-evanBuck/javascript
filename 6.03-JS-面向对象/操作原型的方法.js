//定义构造函数
function Hero(){}

//通过构造函数的原型新增属性或方法

/*
//1.利用对象.属性或方法的方式新增属性或方法 
Hero.prototype.name = '111'
Hero.prototype.sayMe = function(){
    console.log('this is function')
}
*/

//2.将原型重新赋值为个新对象
Hero.prototype = {
    name : '111',
    sayMe : function(){
        console.log('this is function')
    }
}

//通过构造函数创建对象
var hero = new hero()
console.log(hero.name)//111
console.log(hero.sayMe)//this is function