var obj={
    v:100,
    f:function(){
        console.log(this.v)
    }
}
obj.f()//100

function fn(a){
    a()
}
fn(obj.f)    //undefined