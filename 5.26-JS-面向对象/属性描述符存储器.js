var obj = {
    name : '111'
}
var value = null
Object.defineProperty(obj,'name',{
    //获取指定的属性值
    get : function(){//当获取或访问当前属性时，会调用get方法
        console.log('this is get function')
        /*
        类似于数据描述符中的value
            get方法在被调用时，不能传递任何参数
            get 方法在被调用时，允许传递this关键字
                this -表示当前的目标对象
        */
        // return this.name//报错
        return value//由于变量为初始化，调用时可能结果为undefined
    },
    /*
    set方法用于定义当前目标属性的修改作用
        该方法接收唯一的一个参数->作为当前目标属性的新的值
        通过属性修改操作指定的新的值->作为形参对应的实参
    */ 
    set : function(newValue){
        console.log('this is set function' + value)
        /*
        set方法在被调用时，允许传递this关键字
            this -表示当前的目标对象(不能调用对象的当前目标属性)
        */ 
        // this.name = value
        value = newValue
    }
})
console.log(obj.name)//100  {name :[Getter] }

obj.name = '333'
console.log(obj.name)