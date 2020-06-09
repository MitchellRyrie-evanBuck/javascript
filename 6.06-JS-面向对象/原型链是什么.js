function A(){
    this.a = 'a'
}
//通过构造函数创建对象
var a = new A()

function B(){
    this.b = 'b'
}
//将B的原型指向对象a
B.prototype = a
//通过构造函数创建对象
var b = new B()
console.log(b.a)  //a
console.log(b.b)  //b



function C(){
    this.c = 'c'
}
//将C的原型指向对象b
C.prototype=b
var c = new C()
console.log(c.a)  //a
console.log(c.b)  //b
console.log(c.c)  //c  //第一个c表示对象var c，第二个c表示属性this.c
