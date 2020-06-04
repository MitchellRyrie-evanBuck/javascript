//定义构造西数
function Hero(){
    this.name = '111'
}
//通过构造函数的原型新增属性或方法
Hero. prototype.age = 18
//通过构造函数创建对象
var hero = new Hero()
console. log(hero.name);//对象调用自有属性
console. log(hero.age);//对象调用原型属性

/*
    所有对象其实也具有原型
        注意 - 对象的原型(__ proto __)并非是函数的原型(prototype)
        区分
            将函数的原型->显式原型
            将对象的原型-> 隐式原型
        对象的原型
            不能用于真实开发工作,仅用于逻辑测试
*/ 
console. log (hero. prototype)//undefined  表示对象中不存在该属性
console.log(hero.__proto__)//Hero { age: 18}