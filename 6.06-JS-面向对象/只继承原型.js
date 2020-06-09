//原型链
function A(){
    //将自有属性改写为原型属性
    // this.a = 'a';
}
A.prototype.a = 'a'

function B(){

}
B.prototype=A.prototype
B.prototype.b = 'b'

function C(){
    
}
C.prototype=B.prototype
C.prototype.c = 'c'

function D(){
    this.d = 'd'
}
D.prototype=C.prototype
var d=new D()
console.log(d.a)
console.log(d.b)
console.log(d.c)
console.log(d.d)