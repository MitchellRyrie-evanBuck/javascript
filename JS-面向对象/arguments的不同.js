"use strict"


// 在严格模式下  arguments对象的行为 也会有所不同

//  非严格模式下，修改命名参数的值也会反映到arguments对象中
// 严格模式下命名参数与arguments对象是完全独立的

function fn(value){
    var value = "aaaaaaaaa"
    console.log(value)
    console.log(arguments[0])
    // 在非严格模式下 - arguments对象获取参数的值与形参有关
        // 如果局部变量与形参名相同 - 根据就近原则进行获取
    // 严格模式下- arguments对象获取参数的值与形参无关
}

fn("sssssssss")








