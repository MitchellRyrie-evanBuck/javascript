//开启严格模式
"use strict"

function fn(value){
    var value = '111'
    console.log(value)//111  -->  就近原则

    /*
        非严格模式下 : arguments对象 获取参数的值与形参有关的  //111
            如果局部变量与形参名相同-根据就近原则进行获取
        格模式下 : arguments对象获取参数的值与形参无关的  //222
    */ 
    console.log(arguments[0])
}

fn('222')