var value
var obj = {
    //存取描述符中的get
    get attr(){//表示当前目标属性名称
        return value
    },
    //存取描述符中的set
    set attr(newValue){//表示当前目标属性名称
        console.log('setter:' + newValue)
        value = newValue
    }
}
console.log(obj.attr)
obj.attr = 100//setter ：100