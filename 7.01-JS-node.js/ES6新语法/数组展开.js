/*
*
*展开运算符 ...
*数组展开
*
*使用场景:
    a.数组拼接
    b.利用Math. max( )/Math. min()来求数组中的最大值/最小值. |
* */

//eg01
// let arr1 = [10, 20,30];
// let arr2 = [...arr1, 40,50];
// console.log(arr1);//[ 10, 20, 30 ]
// console.log(arr2);//[ 10, 20, 30, 40, 50 ]


//eg02
// let arr1 = [10, 20, 30];
// let arr2 = [40, 50, 60];
// let arrNew = [...arr1, ...arr2];
// console. log(arrNew);//[ 10, 20, 30, 40, 50, 60 ]


//eg03
//求数组中的最大值.
let arr1 = [10, 8,7, 66,65,34];
//以前的做法
// let max1 = Math. max.apply(Math,arr1);
// console.log(max1);//66

//数据展开语法
let max2 = Math. max(... arr1);
console.log(max2);//66









