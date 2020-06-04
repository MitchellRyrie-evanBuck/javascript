// Function类型的属性->所有函数都具有的属性
console.log(Function.prototype)//[Function]

//定义函数
function fn(){
    console.log('this is function')
}

//原型的默认值是空对象
console.log(fn.prototype)//fn{}

//函数包含构造函数->所有引用类型其实都是构造函数
console.log(Number.prototype)//[Number:0]

console.log(Object.prototype)//{}

var result = Object.getOwnPropertyDescriptor(Object.prototype,'constructor')
console.log(result)