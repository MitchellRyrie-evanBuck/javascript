/*

对象解构赋值
取对象中属性的值，赋值给变量.
对象的赋值没有顺序


 */
//声明一个对象
let obj={
    name: "波波",
    age: 38,
    gender:"男",
    score: 100,
};

//es5:
// let name1 = obj.name
// let age1 = obj.age
// let gender1 = obj.gender
// let score1 = obj.score
// console. log(name1 , age1 , gender1, score1)

//es6:
//a.
// let {name :name1, age : age1, gender : gender1, score :score1} = obj;
// console.log(name1 , age1 , gender1, score1)


//b.
// let {name :name, age : age, gender : gender, score :score} = obj;
// console.log(name , age , gender, score)

//c.如果声明的变量名和对象属性名一致，那就可以简写
// let{name , age,gender,score} = obj;
// console. log (name , age ,gender, score);

//d.思考题
// let {name, age , gender,fenshu} = obj;
// console . log (name , age, gender , fenshu);
//obj中没有fenshu这个属性，所以这个fenshu变量就是声明了没有赋值，就是undefined.


//e.那现在我就是希望fenshu这个变量的取值是obj对象中score属性的值,怎么写?
// let {name, age , gender,score:fenshu} = obj;
// console . log (name , age, gender , fenshu);


//f.我希望这个height变量不要是undefined,希望他有一个默认值.该怎么写?
// let {name, age , gender,score:fenshu,height=180} = obj;
// console . log (name , age, gender , fenshu, height);


//g.相当于是用obj对象里面的age属性的值，对age变量重新赋值.所以age变量的值最后是38
// let {name, age=18 , gender,score:fenshu,height=180} = obj;
// console . log (name , age, gender , fenshu, height);






