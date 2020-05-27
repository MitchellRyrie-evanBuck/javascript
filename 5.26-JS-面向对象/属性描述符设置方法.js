var obj = {
    sayMe : function(){
        console.log('111');
    }
}
var result = Object.getOwnPropertyDescriptor(obj,'sayMe')
console.log(result)

Object.defineProperty(obj,'sayMe',{
    value : function(){
        console.log('222')
    },
    writable : false
})
obj.sayMe()//222

obj.sayMe = function(){
    console.log('333')
}
obj.sayMe()//222