

// 将原型链继承于构造函数继承技术组合在一起


function Parent(){
    // 自有属性
    this.name = "李白"
}
// 原型属性
Parent.prototype.age = 20

function child(){
    // 进行调用
    Parent.call(this)

    this.job = "诗人"
}
// 继承父级构造函数中的原型属性
child.prototype = Parent.prototype

let Child = new child()

console.log(Child.job)
console.log(Child.age)
console.log(Child.name)
console.log()























