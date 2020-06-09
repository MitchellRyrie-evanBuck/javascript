var name='111'
function Star(){
    console.log(this.name)
}
Star() //undefined   因为在编辑器里面没有window，在浏览器中调用的话就是111