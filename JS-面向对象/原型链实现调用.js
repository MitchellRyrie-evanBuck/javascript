// 1.创建Animal的构造函数
function Animal() {
    this.animalProperty = "Animal"
}

// 2.给Animal的原型中添加一个方法
Animal.prototype.animalFunction = function () {
    console.log(this.animalProperty)
}

// 3.创建Person的构造函数
function Person() {
    this.personProperty = "Person"
}

// 4.给Person的原型对象重新赋值
Person.prototype = new Animal()

// 5.给Person添加属于自己的方法
Person.prototype.personFunction = function () {
    console.log(this.personProperty)
}

// 6.创建Person的实例
var person = new Person()
person.animalFunction()
person.personFunction()