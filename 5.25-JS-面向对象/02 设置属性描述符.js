var obj = {
    // 定义对象的同时定义了该属性以及值(可修改、可删除以及可枚举的)
    name : 'Deity'
}

Object.defineProperty(obj,'name',{
    value : 'devil',
    writable : false//不可修改
})
console.log(obj.name)//222

//修改name属性值
obj.name = 'Deity2'
console.log(obj.name)//222


Object.defineProperty(objm,'age',{
    value : 18,
    writable : false
})
console.log(obj.age)//18
//修改age属性值
obj.age = 80
console.log(obj.age) //80

//删除age属性值
delete obj.age
console.log(obj.age)//undefined