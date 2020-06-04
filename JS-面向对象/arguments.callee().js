
/*
    对象的一个属性。它可以用于引用该函数的函数体内当前正在执行的函数。
    这在函数的名称是未知时很有用，例如在没有名称的函数表达式 (也称为“匿名函数”)内。
*/

"use strict" //在严格模式下 arguments对象无法调用callee()方法
function fn(){
    return arguments.callee

    console.log(arguments.length)
}
fn()

