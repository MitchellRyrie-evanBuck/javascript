/*
通过定义对象(属性或方法)这种方式
    *属性默认都是数据描述符
*/ 

var obj = {
    name : 'Deity'
}

/*
使用0bject. getOwnPropertyDescriptor()方法获取指定属性的描述符
Object. getOwnPropertyDescriptor (obj,prop)
    * obj- 表示指定属性对应的目标对象
    * prop -表示获取描述符的目标属性名称
    * *返回值-其属性描述符对象

*/ 
var result = Object.getOwnPropertyDescriptor(obj,"name")
console.log(result)

