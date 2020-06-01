/*
    1.是一个函数->函数体
    2.是一个构造函数->属性和方法
    3.是一个对象->属性和方法
*/ 

function Hero(){
    //当作是一个函数来使用
    var v = 100//局部变量
    //当作是一个构造函数来使用
    this.set = function(value){
        v = value
    }
    this.get = function(){
        return v
    }
}

//通过构造函数来创建对象
var hero = new Hero()
hero.set(200)
console.log(hero.get())

//为对象Hero添加属性和方法
Hero.age = 18
console.log(Hero.age)//18