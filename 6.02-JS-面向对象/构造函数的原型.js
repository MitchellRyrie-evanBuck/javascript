//定义构造函数
function Hero(){
    this.name = '111'
    this.sayMe = function(){
        console.log('this is function')
    }
}


//操作构造函数Hero的原型
Hero.prototype.age = 19



//利用构造函数来创建对象
var hero = new Hero()
console.log(hero)

//为构造函数的原型新增的属性->构造函数创建的对象中依旧可以访问
console.log(hero.age)//19

//对象hero中不存在age属性
var result = Object.getOwnPropertyDescriptor(hero,'age')
console.log(result) //undefined