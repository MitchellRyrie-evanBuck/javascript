/*
数组解构赋值
就是把数组中每一个元素的值依次的赋值给变量.

*/
//声明了一个数组
let arr = [10,20,30,40]

//es5.
// let num1 = arr[0];
// let num2 = arr[1];
// let num3 = arr[2];
// let num4 = arr[3];
// console .log( num1, num2,num3,num4)//10 20 30 40

//es6.
//a.
// let[num1,num2,num3,num4] = arr
// console .log(num1 , num2,num3,num4) ;

//b.
// let[num1,num2,num3,num4,num5] = arr
// console .log(num1 , num2,num3,num4,num5) ;//10 20 30 40 undefined

//c.
// let[num1,num2,num3,num4,num5=50] = arr
// console .log(num1 , num2,num3,num4,num5)//10 20 30 40 50

//d.
// let[num1=100,num2,num3,num4,num5=50] = arr
// console .log(num1 , num2,num3,num4,num5)//10 20 30 40 50

