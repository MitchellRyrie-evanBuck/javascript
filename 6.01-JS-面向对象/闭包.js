//对象与函数
function fn1(){
    var v = 100//局部变量
    return{
        get : function(){
            return v
        },
        set : function(value){
            v = value
        }
    }
}
var obj = fn1()
obj.get(200)
console.log(obj.set())//200


//函数与构造函数
function fn2(){
    var v = 100//局部变量
    this.get = function(){
        return v
    }
    this.set = function(value){
        v = value
    }
}

var obj = new fn2()
obj.set(200)
console.log(obj.get())//200


var n//全局作用域
function fn3(){
    var v = 100
    get = function(){
        return v
    }
    set = function(value){
        v = value
    }
}
fn3()
set(200)
