var obj = {}
//将对象设置禁止扩展
Object.preventExtensions(obj)
//新增属性或方法无效->语法没有报错
obj.name = '111'
console.log(obj)

/*
0bject.defineProperty()方法新增属性
    结果-报错
    信息- TypeError: Cannot define property:name, object is not extensible.

*/ 
Object.defineProperty(obj,'name',{
    value : '333'
})
console.log(obj)
/*
Object.isExtensible(obj)方法
    作用-用于判断指定目标对象是否可扩展
    返回值
        true -表示指定目标对象是可扩展的
        false -表示指定目标是不可打扩展的

*/ 
var result = Object.isExtensible(obj)
console.log(result)