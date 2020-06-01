//在JavaScript如果定义多个同名的函数一最后一 个函数定义有效
function add(a,b){
    return a+b
}
function add(a,b,c){
    return a+b+c
}
function add(a,b,c,d){
    return a+b+c+d
}

console.log(add(1,2));// 3
console.log(add(1,2,3));// 6
console.log(add(1,2,3,4)) ;// 10

/*
NaN
NaN
10
*/ 