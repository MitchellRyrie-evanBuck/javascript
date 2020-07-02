/*

解构赋值 结合函数声明

*/

//es5.
//声明一个函数，形参有多个
// function test1 (name , age, gender){
//     console. log(name , age , gender);
// }
// test1('波波',38,'男');


//如果形参有多少，最好把形参写成一个对象.
// function test1(obj) {
//     console.log(obj.name, obj.age, obj.gender);
// }
// test1({
//     name:'波波',
//     age:38,
//     gender: '男'
// })


//es6.
//声明一个函数，形参有多个
// function test2( {name, age, gender,height=180}){
//     console . log (name , age,gender,height);
// }
// test2({
//     name:'波波',
//     age:38,
//     gender: '男',
//     height:160
// })







