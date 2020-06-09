//定义一个全局变量
var v=100
//定义一个函数
function fn(){
    console.log(this.v)
}
//定义一个对象
var obj={
    v:200,
    f:fn//对象的f()方法指向fn()函数
}
// 定义一个全局变量，并被赋值为对象obj的f()方法
var fun=obj.f
// 将fun作为一个函数进行调用
fun()//undefined   因为在编辑器里面没有window，在浏览器中调用的话就是100