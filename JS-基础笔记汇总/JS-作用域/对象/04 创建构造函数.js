创建构造函数的基本用法
function Hero() {
  // 属性
  this.name = '李雷'
  // 方法
  this.sayMe = function () {
    console.log('this is lilei.')
  }
}
var a = new Hero()
console.log(a.name)



接收参数的构造函数
function Hero(name) {
  // 属性
  this.name = name
  // 方法
  this.sayMe = function () {
    console.log('this is lilei.')
  }
}
var a = new Hero("liu")
console.log(a.name)



// 在方法中使用属性的构造函数
function Hero(name) {
  // 属性
  this.name = name
  // 方法
  this.sayMe = function () {
    console.log('this is ' + this.name + '.')
  }
}

var a = new Hero("刘孝文")
console.log(a.name)