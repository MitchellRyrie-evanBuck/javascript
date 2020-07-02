/*

var声明变量
    a.有变量的提升
    b.没有块级作用域，是函数作用域
    c.可以重复声明
    d.可以重新赋值
let声明变量
    a.没有变量提升
    b.有块级作用域
    c.不能重复声明
    d.可以重新赋值

*/

//a.没有变量提升
// console.log(age);//报错了
// let age = 38;

//b.有块级作用域
// for(let i = 0; i<10; i++){
//
// }
// console .log(i);//报错了


//c.不能重复声明
// let num = 10;
// let num = 20;//报错了
// console. log (num);


//d.可以重新赋值
let num1 = 10;
num1 = 20;
console. log (num1);



