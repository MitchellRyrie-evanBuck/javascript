
// 回调函数中的this经常会改变绑定的对象，最好的解决方案就是避免这样使用this 

var obj = {
    v : 100,
    f : function(){
        console.log(this.v)
    }
}
obj.f()
function fn(a){
    a()
}
fn(obj.f)



















