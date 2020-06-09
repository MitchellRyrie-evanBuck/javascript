// this经常 被定义在函数的作用域中
function fn(){
    // this总是 要返回一个对象
    console.log(this.v)// this 指向哪个对象，不取决于函数定义的位置
}

// this指向哪个对象，取决于调用的位置
//函数的调用
fn()//undefined

//定义一个对象， 将fn函数作为obj对象的方法
varobj={
    v:200,
    f:fn
}
    
obj.f();//200

console.log(this.v)