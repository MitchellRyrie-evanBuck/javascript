



function fun(){
    console.log(this.a)    //取决于调用位置
}

var obj = {
    a : 200,
    f : fun
}
var bar = obj.f
// bar()

bar.apply(obj);




