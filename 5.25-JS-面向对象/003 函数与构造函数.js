
//1.函数;2.构造函数
function Hero(name){
    var v = 100//局部变量
    function n(){}//内部函数
    this.name = name;
    this.sayMe = function(){
        console.log('我是' + name)
    }
}
// 1.函数调用
Hero()

// 2.构造函数使用
var hero = new Hero()
function fun(){//局部变量
    var v = 100;
     //方法
    this.get = function(){
        return v;
    }
    this.set = function(value){
        v = value
    }
}

//构造函数
var f = new fun()
console.log(f)

console.log(f.get())
f.set(200)
console.log(f)