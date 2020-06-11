function Parent(){
    this.name='111'
}
//将Child继 承于Parent
function Child(){
    Parent.call(this)
    this.age=18
}
var child=new Child()
console.log(child.age)//18
console.log(child.name)//111
