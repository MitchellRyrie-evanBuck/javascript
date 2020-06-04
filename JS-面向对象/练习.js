function Foo(){
    getName = function(){console.log(1)}
    return this
};
Foo.getName = function(){console.log(2)};
Foo.prototype.getName = function(){console.log(3)};
var getName = function(){console.log(4)};
function getName(){console.log(5)};

Foo().getName()
new Foo.getName()
new Foo().getName()
// 构造函数一般没有返回值  输出

new new Foo().getName()

