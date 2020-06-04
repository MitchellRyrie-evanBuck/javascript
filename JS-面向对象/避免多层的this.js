

var obj = {
    v :100,
    fn : function(){
        console.log(this.v)
        function n(){
            console.log(this.v)
        }
        n()
    }
}
obj.fn()


var obj = {
    v :100,
    fn : function(){
        console.log(this.v)
        var that = this
        function n(){
            console.log(that.v)
        }
        n()
    }
}
obj.fn()





