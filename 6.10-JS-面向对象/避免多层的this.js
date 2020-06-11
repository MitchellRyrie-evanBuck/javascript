// function fn(){
//     console.log(this.a)//undfined
//     function n(){
//         console.log(this.a)//undfined
//     }
//     n()
// }
// fn()

var obj={
    v:100,
    fn:function(){
        console.log(this.v)//100
        var that=this
        function n(){
            console.log(that.v)//100
        }
        n()
    }
}
obj.fn()