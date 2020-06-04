/*
    自调函数
        作用-用于执行一次性的逻辑任务
        应用-作为整体逻辑代码外层结构
        语法结构
            第一个括号-定义函数
            第二个括号-调用函数
*/ 

(function(v){
    var w = 100//局部变量
    console.log('this is ' + v)
})('function')


//表达式方式
((function(v){
    var w = 100//局部变量
    console.log('this is ' + v)
})('function'))


+function(v){
    var w = 100//局部变量
    console.log('this is ' + v)
}('function')


!function(v){
    var w = 100//局部变量
    console.log('this is ' + v)
}('function')