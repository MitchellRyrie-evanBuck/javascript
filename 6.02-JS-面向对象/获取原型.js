function fn(){
    console.log('this is function')
}

//使用访问对象的属性语法结构
console.log(fn.prototype) //fn{}
console.log(fn['prototype']) //fn{}
// object 类型提供getPrototypeOf()方法
console.log(Object.getPrototype0f(fn)) //[Function]