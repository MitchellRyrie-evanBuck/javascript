/*
    函数的递归 - 函数在当前函数体中调用自身
        执行方式类似于循环语句的执行方式->反复执行指定的语句块内容
        执行递归函数时，必须提供结束执行的条件(出口)
*/ 
var v = 0
function fn(){
    console.log('111')
    v++
    //调用自身函数
    // fn()
    if (v > 9){
        return
    }
    arguments.callee()
}
fn()

var f = fn
fn = null//释放资源
f()