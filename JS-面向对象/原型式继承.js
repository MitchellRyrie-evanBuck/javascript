function object(o){
    function F(){}
    F.prototype = o
    return F()
}





// 定义一个函数

    // obj  -----表示继承关系中的父级对象
    // poiu ----对象格式，表示继承关系中的子集对象的属性和方法

function fn(obj, poiu){
    // 定义一个临时的构造函数
    function Fun(){


        for(let i in poiu){
            this[i] = poiu[i]
        }
    }
    // 将函数的参数作为构造函数的原型
    Fun.prototype = obj
    // 将构造函数创建的对象进行返回
    return new Fun()
}

let obj = {
    name : "刘晓文"
}

// 调用函数
reslut = fn(obj,{
    age : 18,
    call : function(){
        console.log("无情哈拉少")
    }
})
console.log(reslut.name,reslut.age,reslut.call)
reslut.call()

function f(obj){
    // 定义一个临时的构造函数
    function Fun(){}
    // 将函数的参数作为构造函数的原型
    Fun.prototype = obj
    // 将构造函数创建的对象进行返回
    return new Fun()
}

ril = f(reslut)

console.log(ril.name,ril.age)