function Parent(){
    //构造函数的自有属性
    this.name = '11'
}
//构造函数的原型属性
Parent.prototype.age = 18

function Child(){
    //继承父级构造函数中的自有属性
    Parent.call(this)

    this.job = '22'
}
//继承父级构造丽数中的原型属性
Child.prototype = Parent.prototype
var child = new Child()

console.log(child.job)//22
console.log(child.age)//18
console.log(child.name)//11