function A(){
    // this.a = 'a'
}
//通过构造函数创建对象
A.prototype.a = 'a'


function B(){
    // this.b = 'b'
}
//将B的原型指向对象a
B.prototype = A.prototype
B.prototype.b = 'b'
//通过构造函数创建对象
var b = new B()
console.log(b.a)  //a
console.log(b.b)  //b

function C(){
    // this.c='c'
}
//将C的原型指向对象b
C.prototype = B.prototype
C.prototype.c = 'c'
var c = new C()
console.log(c.a)  //a
console.log(c.b)  //b
console.log(c.c)  //c

var a = new A()
console.log(a.a)  
console.log(a.b)  
console.log(a.c)

var b = new B()
console.log(b.a)  //a
console.log(b.b)  //b
console.log(c.c)  //c