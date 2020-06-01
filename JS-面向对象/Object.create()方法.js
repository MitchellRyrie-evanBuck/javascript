
/*
    Object.create()
        proto
            新创建对象的原型对象。
        propertiesObject
            可选。如果没有指定为 undefined，
            则是要添加到新创建对象的不可枚举（默认）属性（即其自身定义的属性，
            而不是其原型链上的枚举属性）对象的属性描述符以及相应的属性名称。
            这些属性对应Object.defineProperties()的第二个参数。 
*/


let obj = {
    name : "Deity"
}

let reslut = Object.create(obj,{
    age : {
        value:18
    },
    call : {
        value : function(){
            console.log("无情哈拉少")
        }
    }
})

console.log(reslut.age)
reslut.call()













