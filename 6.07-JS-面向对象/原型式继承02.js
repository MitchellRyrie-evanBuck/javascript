//利用0bject.create()方法实现继承
var obj = {
    name : '11'
}
var newObj = Object.create(obj,{
    age : {
        value : 18
    },
    sayMe = {
        value : function(){
            console.log('this is function')
        }
    }
})
console.log(newObj.name)//11
console.log(newObj.age)//18
console.log(newObj.sayMe)//this is function