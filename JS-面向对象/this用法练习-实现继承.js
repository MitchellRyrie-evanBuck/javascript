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
// function Hero(){
//     this.name = "张无忌"
//     this.sayme = function(){ 
//         console.log(this.anme)
//     }
// }
// function hero(){
//     Hero.call(this)
//     this.age = 18
//     this.sayme = function(){
//         console.log(this.name + this.age)
//     }
// }
// let sda = new hero()
// sda.sayme()

// let obj = {
//     name : "刘晓文",
//     age : 88,
//     sayme : sda.sayme
// }
// obj.sayme()


// function foo() {
//     console.log(this); // obj对象
//     }
    
//     var obj1 = {
//         name: "obj1",
//         foo: foo
//     }
    
//     var obj2 = {
//         name: "obj2",
//         obj1: obj1
//     }
    
//     obj2.obj1.foo();





//     // 全局变量
//     function foo() {
//     console.log(this);
//     }
    
//     var obj1 = {
//     name: "obj1",
//     foo: foo
//     }
    
//     // 讲obj1的foo赋值给bar
//     var bar = obj1.foo;
//     bar();

    // var names = ["abc", "cba", "nba"];
    // names.forEach(function(item) {
    //   console.log(this); // 三次window
    // });


    var names = ["abc", "cba", "nba"];
    var obj = {name: "Deity"};
    names.forEach(function(item) {
        console.log(this); // 三次obj对象
    }, obj);























