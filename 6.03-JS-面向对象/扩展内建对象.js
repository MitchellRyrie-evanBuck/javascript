Object.prototype.sayMe = function(){
    console.log('this is sayMe function')
}

//通过Object构造函数创建对象
var obj = new Object()

obj.sayMe

Array.prototype.inArrey = function(color) {
    // this-表示 当前的数组
    for(var i = 0,len = this. length; i < len; i++){
        if(this[i] === color){ 
            return true; 
        }
    }
    return false;
}
var a = ["red","green","blue"] ;
console.log(a.inArray("red")); //true
console. log(a.inArray("yellow")); //false