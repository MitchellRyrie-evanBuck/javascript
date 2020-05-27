var obj = {
    // 定义对象的同时定义了该属性以及值(可修改、可删除以及可枚举的)
    name : '刘孝文'
}

/* 
object. defineProperty(obj, prop, desc)方法
    作用
        用于定义目标对象的新属性
        用于修改目标对象的已存在属性
    参数
        obj -表示目标对象
        prop -表示目标对象的目标属性名称
        desc -表示属性描述符,必须是对象格式
            {
                value : 值
            }
        返回值- 返回传递的对象

*/ 

Object.defineProperty(obj,'name',{
    value :'刘孝文'
})
console.log(obj.name)//刘孝文

/*
同样都是为对象新增属性
    1.如果直接使用"对象名.属性名=值"->可修改、可删除以及可枚举的
    2.如果使用object. defineProperty()方法新增属性
        该新属性是不可修改、不可删除以及不可枚举的
*/ 

Object.defineProperty(obj,'age',{
    value : 18
})
console.log(obj.age)//18


var reslut = Object.getOwnPropertyDescriptor(obj,'age')
console.log(reslut)

// 一旦属性的值是不可修改的-如果执行修改操作时->没有语法报错，但是无效
obj.age = 80
console.log(obj.age)//18

obj.job = 'Deity'
var reslut2 = Object.getOwnPropertyDescriptor(obj,'job')
console.log(reslut2)