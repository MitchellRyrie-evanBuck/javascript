function foo(){
    console.log(this.a)
    
}
var a=2
var o={
    a:3,
    foo:foo
}
o.foo()  //3
var p={a:4}

// p.foo=o.foo
// p.foo()   //4

(p.foo=o.foo)()//2