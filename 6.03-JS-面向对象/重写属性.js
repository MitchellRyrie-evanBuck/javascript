//定义构造函数
function Hero(){
    this.name = '111'
}

//构造函数的原型
Hero.prototype.name = '222'

//构造函数创建对象
var hero = new Hero()

//自有属性与原型属性同名时，默认访问的是自有属性->自有属性的优先级别高于原型属性
console.log(hero.name)//111

//删除对象的属性
delete hero.name

//重新访问对象的属性
console.log(hero.name)//222