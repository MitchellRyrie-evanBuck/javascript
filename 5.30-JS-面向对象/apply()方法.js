//定义一个函数
function fn(a,b){
    console.log('this is function' + a + b)
}

//调用函数 - 函数的语法内容
fn('function')

/*
    apply(thisArg，args)方法-调用函数
        使用的对象调用方法的语法结构->将函数作为对象使用
        参数
            thisArg - 指定this 的值,表示当前调用函数的对象
                如果不使用this值时，提供默认值为nulZ 或undefined
            args - 数组，用于接收指定函数的实参
        与函数调用体的区别在于接收的this值
*/ 

fn.apply(null,['function','111'])//null or undefined

var obj = {
    name : '111',
    sayMe : fn
}