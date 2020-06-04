




// 被忽略的this 

// let result = Math.max.apply(null,[1,2,3,4,5,6])
// console.log(result) 


function foo(){
    console.log(this.a)
}
var a = 2
var o = {
    a : 3,
    foo : foo
}
var p = {a:4}
o.foo();

(p.foo = o.foo)()
// console.log(p.foo())














