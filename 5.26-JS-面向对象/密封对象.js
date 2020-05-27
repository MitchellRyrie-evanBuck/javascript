var obj = {
    name : '111'
}

console.log(Object.getOwnPropertyDescriptor(obj,'name'))
//将该对象进行密封
Object.seal(obj)

// //新增属性
// obj.age = 18
// console.log(obj)
// //修改属性
// obj.name = '222'
// console.log(obj)

// Object.defineProperty(obj,'age',{
//     value : 18
// })
// Object.defineProperty(obj,'name',{
//     value : '333',
//     writable : false,//表示不可修改
//     configurable : true,
//     enumerable : false
// })

console.log(Object.getOwnPropertyDescriptor(obj,'name'))

/*
将该对象进行密封
    1.不能为该对象新增属性或方法
    2.不能修改该对象的属性或方法的描述符
        * configurable
        * enumerable|
*/ 
console.log(obj)

obj.name = '444'
console.log(obj)