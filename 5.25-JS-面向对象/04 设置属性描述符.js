var obj = {
    // 定义对象的同时定义了该属性以及值(可修改、可删除以及可枚举的)
    name : 'Deity'
}

Object.defineProperty(obj,'name',{
    value : 'Deity',
    enumerable : false
})

console.log(obj.name)//Deity

/*
属性描述符enumerable -控制当前属性是否可被枚举(遍历)
    仅能循环遍历对象中可被枚举的属性
        for... in语句
        keys()方法
    可以循环遍历对象中可被枚举和不可被枚举的属性
        getOwnPropertyNames ()方法
*/ 

for (var i in obj){
    console.log(i)

}
var result1 = Object.keys(obj)
console.log(result1)
var result2 = Object.getOwnPropertyNames(obj)
console.log(result2)