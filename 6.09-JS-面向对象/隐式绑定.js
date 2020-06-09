function star(){
    console.log(this.name)

}
var obj={
    name:'111',
    fn:star
}
obj.fn()//111