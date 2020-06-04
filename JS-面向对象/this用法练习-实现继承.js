// function Parent(){
//     this.name = "aaaa"
// }

// function Child(){
//     Parent.call(this)
//     this.age = 18
// }
// let child = new Child()
// console.log(child.name)
// console.log(child.age)





//   this   练习
function Hero(){
    this.name = "张无忌"
    this.sayme = function(){ 
        console.log(this.anme)
    }
}
function hero(){
    Hero.call(this)
    this.age = 18
    this.sayme = function(){
        console.log(this.name + this.age)
    }
}
let sda = new hero()
sda.sayme()

let obj = {
    name : "刘晓文",
    age : 88,
    sayme : sda.sayme
}
obj.sayme()