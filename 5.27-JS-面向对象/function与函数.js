function fn() {
    console.log("this is fn function");
}
var f = function () {
    console.log("this is f function");
};

// // 函数是一个对象
// console.log(fn instanceof Object); //true
// console.log(f instanceof Object); //true
// // 函数是Function类型的对象
// console.log(fn instanceof Function); //true
// console.log(f instanceof Function); //true

// 利用Function类型创建对象
var fun = new Function();
// 对象fun就是一个函数
fun();
// 函数fun不具有函数体、参数和return语句是怎么的？

/*
    如果使用Function类型创建一个函数对象时
    var 函数名 = new Function(args,statement);
    参数
        args - 字符串类型，表示当前创建函数的形参
            如果是多个形参用逗号分隔
        statement - 表示当前创建函数的函数体
    问题 - 函数的函数体定义可读性降低
*/

var fun = new Function("a,b", 'console.log("this is function "+a+" "+b)');
fun(100, 200);
