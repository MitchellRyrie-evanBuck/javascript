// 定义一个构造函数
function Hero() {
    this.name = "张无忌";
    this.sayMe = function () {
      console.log("this is function ");
    };
}
// 使用构造函数创建对象
var hero = new Hero();
// 对象具有与构造函数相同的属性和方法
console.log(hero.name);
hero.sayMe();
// js中所有对象都是Object类型
console.log(hero.constructor);
  