/*
    构造函数(又称为对象模板/构造器)
    作用 - 用于创建JavaScript对象
    方式
        1. JavaScript提供的构造函数 - 引用类型
        2. 自定义创建构造函数
*/
// 函数声明方式
function Hero() {
    // 定义属性
    this.name = "张无忌";
    //  定义方法
    this.sayMe = function () {
        console.log("this is function ");
    };
}
/*
    构造函数与函数
        相同点
            语法结构相同
        不同点
            函数:函数体(局部变量和函数)
    构造函数:属性和方法
*/
var Hero = function (name) {
    // 定义属性
    this.name = name;
    //  定义方法
    this.sayMe = function () {
      console.log("this is function ");
    };
};

// 利用Hero构造函数创建对象 -> 当前对象是Hero类型的
var hero = new Hero("张无忌");
console.log(hero);
