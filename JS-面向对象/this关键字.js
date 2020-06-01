
/* 
    this 他总是返回一个对象 用在一个函数体内 
    用来传递对象的引用， 就是当前所在的对象
            ----------他的指向取决于 被谁调用

*/
let v = 100
function fn(){
    console.log(this.v)             //总是返回一个对象
    // 指回了调用的f对象
}

// this 指向哪个对象 取决于调用的位置

// let result = new fn()
// console.log(result.v)


/*
    在浏览器中 可以直接运行 出结果  可以以直接调用window Global对象
    然而在node.js中 无法直接对Global 直接调用

*/

let obj = {
    v : 200,
    f : fn        //将函数的调用作为obj的F方法调用
}
obj.f()   





















