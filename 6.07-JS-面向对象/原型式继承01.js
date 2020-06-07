/*
    定义一个函数-用于实现对象之间的继承
        参数
            obj - 表示继承关系 中的父级对象
            prop - 对象格式，表示继承关系中的子级对象的属性和方法
*/
function fn(obj,prop){
    //定义一个临时的构造函数
    function Fun(){
        // this.age = 18
        //遍历对象的属性和方法
        for (var attrName in prop){
            // var attrValue = prop[attrName]
            this['attrName'] = prop[attrName]
        }
    }
    //将函数的参数作为构造函数的原型
    Fun.prototype = obj
    //将构造函数创建的对象进行返回
    return new Fun()
}
var obj={
    name : '111'
}
//调用函数
var result = fn(obj,{
    age : 18,
    sayMe = function(){
        console.log('this is function')
    }
})
console.log(result.name)//111
console.log(result.age)//18