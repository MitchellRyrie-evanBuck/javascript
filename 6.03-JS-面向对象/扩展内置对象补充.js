Object.defineProperty(object.prototype, 'sayMe', {
    value : function(){
        console. log( 'this is sayme') ;
    }
})
var obj = new Object()
obj.sayMe() ;