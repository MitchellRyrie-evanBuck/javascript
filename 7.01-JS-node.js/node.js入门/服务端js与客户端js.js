/*
    1.js都是运行在浏览器端的.
        ECMAScript: js语法 (变量，数据类型，表达式，代码结构(顺序，循环，分支)...)
        Bom:浏览器对象模型，用js去操作浏览器窗口
        Dom:文档对象模型,用js去操作页面上的dom树
    2.今天我们说，有了node.js,js也可以运行在服务器端的.
        ECMAScript
    3.意思就是说在node. js中不能写dom语法和bom语法|

*/

//正常的符合js语法的代码是不会报错的.
// var name = '111'
// console.log((name))//111

//因为node.js中是不能执行bom和dom的，下南的代码会报错
// console.log( document)//报错

// var age = 30
// alert(age)//报错