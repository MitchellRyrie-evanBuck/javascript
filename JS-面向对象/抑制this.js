
// 在非严格模式下  apply()  call()  可以传null 
"use strict"
var v = 100
function fn(){
    console.log(this.v)
}
fn.call(null)


var obj  = {
    v : 200
}
fn.call(obj)




