//声明了一些变量
let name='千里';
let age = 18;
let gender = '男';
let score = 100;


//现在声明了一个对象
//对象里面有name,age，gender.score属性
//希望这些属性的值是上面对应变量的值，


//es5:
// var obj={
//     name : name,
//     age:age,
//     gender : gender,
//     score: score,
//     sayHi: function() {
//         console.log('哈哈，你好')
//     }
// }
// console.log(obj);
// obj.sayHi();

//es6: 对象成员简写
var obj={
    name ,
    age,
    gender,
    // fenshu,//相当于fenshu:fenshu,报错了，因为外面没有fengshu这个变量.
    fenshu:score,//这里就不会报错，取外面score变量的值赋值给这个fengshu属性
    score,
    sayHi() {
        console.log('哈哈，你好')
    }
}
console.log(obj);
obj.sayHi();



