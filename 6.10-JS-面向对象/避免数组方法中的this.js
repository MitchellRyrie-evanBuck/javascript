// var arr=[1,2,3,4,5]
// var v=100
// arr.forEach(function(value,index){
//     console.log(this.v)  //5个undefined
// })

var obj={
    value:200,
    arr:[1,2,3,4,5],
    f:function(){
        this.arr.forEach(function(value){
            console.log(this.v)   //5个undefined
        })
    }
}
obj.f()