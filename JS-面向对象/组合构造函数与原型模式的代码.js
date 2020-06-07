// 创建Person构造函数
function Person(name, age, height) {
    this.name = name
    this.age = age
    this.height = height
    this.hobby = ["Basketball", "Football"]
}

// 重新Peron的原型对象
Person.prototype = {
    constructor: Person,
    sayHello: function () {
        console.log("Hello JavaScript")
    }
}

// 创建对象
var person1 = new Person("Coderwhy", 18, 1.88)
var person2 = new Person("Kobe", 30, 1.98)

// 测试是否共享了函数
console.log(person1.sayHello == person2.sayHello) // true

// 测试引用类型是否存在问题
person1.hobby.push("tennis")
console.log(person1.hobby)
console.log(person2.hobby)