function fn(){
    console.log('this is function')
}
//变量proto也是 一个空对象
// var proto = fn.prototype
//新增属性或方法
// proto.name = '111'
fn.prototype.name = '111'
console.log(proto)


//defineProperty()
Object.defineProperty(fn.prototype,'age',{
    value : 18,
    enumerable:true
})
console.log(fn.prototype)