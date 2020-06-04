
// ES6 第三种作用域
"use strict"
function fn(){
    function n(){

    }
}

// 严格模式下  函数不能再块级作用域声明
for(var i = 0 ; i<10;i++){
    var v = 10
    function fnc(){
        console.log(v)
    }
}
console.log(i)
console.log(v)
fnc()









