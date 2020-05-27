var obj = {
    name : '111'
}

//冻结对象

// Object.freeze(obj)

/*
obj.age = 18
console.log(obj)
obj.name = '222'
console.log(obj)
delete obj.name
console.log(obj)
*/

Object.defineProperty(obj,'age',{
    value : 18
})
var aaa = Object.getOwnPropertyNames(obj)
console.log(aaa)