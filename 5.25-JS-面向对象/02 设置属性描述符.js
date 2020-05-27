var obj = {
    // 定义对象的同时定义了该属性以及值(可修改、可删除以及可枚举的)
    name : 'Deity'
}

Object.defineProperty(obj,'name',{
    value : 'devil',
    writable : false//不可修改
})
console.log(obj.name)//Deity

//修改name属性值
obj.name = 'Deity2'
console.log(obj.name)//Deity


Object.defineProperty(obj,'age',{
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

var user = {};
user.age = 18

Object.defineProperty(user,"name",{
 value:"蜗牛"
})
Object.defineProperty(user,"isSlow",{
 value:true
})
Object.defineProperty(user,"sayHi",{
 value:function () { console.log("Hi !") }
})
Object.defineProperty(user,"age",{
 value:12
})
Object.defineProperty(user,"birth",{
 value:{
  date:"2020-05-25",
  hour:"15:30"
 }
})
var resut = Object.getOwnPropertyNames(user)
console.log(resut);
user.name = "liu"
console.log(user.name)