// 就是作用域中的对象  都可以使用当前作用域中的方法   函数被调用时obj对象     拥有或者包含他
function fun(){
    console.log(this.a)    //取决于调用位置
}

var obj = {
    a : 200,
    f : fun
}
var bar = obj.f
bar()

