/*
//作为值的函数
function fn(){
    //在函数的函数体中定 义另一个函数->内部(私有) 函数
    return function(){
        return 1
    }
}

var result = fn()
console.log(result)//function
console.log(result())//1
*/

function fn(){
    //内部函数执行后的返回值
    function n(){
        return 1
    }
    return n()
}
var result = fn()
console.log(result)//1