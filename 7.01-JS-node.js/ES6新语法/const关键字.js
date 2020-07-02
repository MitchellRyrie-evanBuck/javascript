/*

const关键字声明常量的(一旦声明就无法更改)
    a:没有变量提升
    b:有块级作用域
    c:不能重 复声明
    d:不能重新赋值
    e.声明必须要初始化值

使用场景:
    a.一些不会变化的值，比如圆周率PI
    b.大事件项目中,保存基地址的就可以用常量.

*/

//a.没有变量提升
// console.log(num); //报错了
// const num = 100 ;

//b.有块级作用域
// {
// const num = 200;
// }
// console.log (num); //报错了


//c.不能重复声明
// const num = 300;
// const num = 400;//报错了
// console . log(num);

//d.声明必须要初始化值
// const num;//报错了
// console.log (num);

//e.不能重新赋值
// const num = 10;
// num = 20;//报错了
// console . log(num);

