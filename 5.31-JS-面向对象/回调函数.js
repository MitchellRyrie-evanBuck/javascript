//函数n作为函数fn的参数->回调函数
var n = function(w){
    console.log(w)
}
function fn(v){
    var name = '111'//局部变量-只能作用于当前函数作用域(私有)
    v(name)//将布局变量作为v()函数的实参传递
}
fn(n)
//匿名回调函数-不占用全局命名空间(内存)
fn(function(w) {
    console.log(w)
});