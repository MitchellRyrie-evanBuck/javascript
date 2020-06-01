/*
    call(thisArg, arg1， arg2, ...)方法-用于调用函数
        参数
            thisArg -用于指定this的值
            arg1， arg2, ..p -用于接收函数的实参
        call()与apply()方法区别-在于第二个参数上
*/ 

function fn(){
    console.log('this is function')
}
fn.call(null)