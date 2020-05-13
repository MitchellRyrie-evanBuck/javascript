// 在JavaScript语言中，原始类型与包装类型创建的数据在使用上没有任何差异
var bool = true; // 直接量/字面量方式定义
// 创建对象的语法格式: new 构造函数()
var Bool = new Boolean(true); // 构造函数方式定义
console.log(bool, Bool);

var num = 100;
var Num = new Number(100);
console.log(num, Num);

var str = 'this is message';
var Str = new String('this is message');
console.log(str, Str)

// 判断包装类型的话，不能使用 typeof 运算符
console.log(typeof Str); // object
/*
  判断包装类型需要使用 instanceof 运算符
  * 语法结构: 变量名/对象名 instanceof 构造函数/数据类型
  * 结果
    * 如果当前变量是指定的类型的话，结果为 true
    * 如果当期那变量不是指定的类型的话，结果为 false 
 */
console.log(Str instanceof String); // true