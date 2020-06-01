
// 原型链实际上是在多个构造函数或对象之间共享属性和方法
// 创建子类的对象时，不能向父级的构造函数传递任何参数


// 定义父类
function SuperClass () {
    this.colors = ['red, black']
}
// 定义子类
function SubClass () {
}
// 将父类的实例作为子类的原型对象
SubClass.prototype = new SuperClass();
// 声明子类的一个实例o1
o1 = new SubClass();
// 声明子类的另一个实例o2
o2 = new SubClass();
// 在 o1 中改变 colors 的值
// 注意不能这样去 o1.colors = ['red', 'yellow'] 修改数组的值，如果这样修改了，o1.colors就不再指向SuperClass中的colors了，而是指向了一个全新的数组。
// 要在原有数组上修改要使用数组提供的API，而不是新建一个数组再进行赋值

// o1.splice(1, 1, 'yellow'); 
console.log(o1.colors) // ['red', 'yellow']
// 这样修改后 o2 实例也会被修改
console.log(o2.colors) // ['red', 'yellow']




















