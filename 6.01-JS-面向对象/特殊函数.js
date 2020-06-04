
var fn = function(){
    console.log('this is function')//this is function
}
//将函数作为对象的方法
var obj = {
    fun : fn
}

obj.fun()//this is function
fn = function(){
    console.log('this is function too')
}
obj.fun()