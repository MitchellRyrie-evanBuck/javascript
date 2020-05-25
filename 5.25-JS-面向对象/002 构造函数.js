/*
创建构造函数-用于创建对象(属性和方法)
    function构造函数名称(){
        this.属性名=属性值;
        this.方法名= function(){
            方法体
        }
    }
this关键字->指代利用当前构造函数创建的对象

*/ 


function Hero(name){
    this.name = name;
    this.sayMe = function(){
        console.log('我是' + name);
    }
}

var hero = new Hero('111');
console.log(hero);

var obj = {
    name : 'deity',
    sayMe : function(){
        console.log('我是1deity')
    }
}