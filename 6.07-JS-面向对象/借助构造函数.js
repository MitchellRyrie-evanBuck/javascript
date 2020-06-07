//定义父级对象的构造函数
function Parent(){
    this.parent = 'parent'
}
//定义子级对象的构造函数
function Child(){
    //调用父级对象的构造函数->使用apply() 或calZ()方法
    Parent.apply(this)
    this.child = 'child'
}

//创建子级对象
var child = new Child()
console.log(child)