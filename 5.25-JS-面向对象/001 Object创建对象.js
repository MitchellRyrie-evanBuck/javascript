//表示创建-个空对象
var obj1 = new Object(null) ;
var obj2 = new Object (undefined) ;


//表示创建一个与给定值对应类型的对象
var obj3 = new Object(100) ;
console. log(obj3) ; // [Number: 100]
var num = new Number(100);
console.log(num) ;// [Number: 100]


//当以非构造函数形式被调用时，0bject等同于new 0bject()
var obj4 = Object();//函数调用
var obj5 = new Object();// 构造函数调用