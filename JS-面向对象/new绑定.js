
/*
    在JavaScrpt中,构造函数只是一些使用new操作符时被调用的函教。包括内置对象函数在内的所有函数都可 以用new来调用,这种函数调用被称为构造函数调用。
        使用new来调用函数,会自动执行下面的操作:
        1.创建（或者说构造)一个全新的对象。
        2.这个新对象会绑定到函数调用的this。
        3.如果函数没有返回其他对象,那么new表达式中的函数调用会自动返回这个新对象。



*/

function hero(name){
    this.name  = name
}
let hero1 = new hero("enen")

let hero2 = new hero("duidui")













