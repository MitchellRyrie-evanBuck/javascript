

/*
    "use strict" 指令在 JavaScript 1.8.5 (ECMAScript5) 中新增。
    它不是一条语句，但是是一个字面量表达式，在 JavaScript 旧版本中会被忽略。
    "use strict" 的目的是指定代码在严格条件下执行。
    严格模式下你不能使用未声明的变量。

    目的：
        直接将JavaScript陷阱变成错误
        修正引擎难以修正的错误，同样的代码严格模式会比非严格模式更快
        严格模式禁用了一些有可能在未来版本中定义的语法
*/


"use strict"        //全局严格
var v = 100
console.log(v)


function fn(){
    "use strict"             // 作用域不同  函数严格
    v = 300
    console.log(v)
}
fn()








