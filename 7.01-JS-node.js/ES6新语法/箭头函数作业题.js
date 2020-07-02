//作业题:
//---------------------------------
let fn1 = function(){
    console.log( '你好吗?');
}

//箭头函数
let fn1 = () => console.log('你好吗?');
fn1();


//---------------------------------
let fn2 = function(name ) {
    console.log(name + '你好吗');
}
//箭头函数
let fn2 = name => console.log(name+ '你好吗');
fn2('111');


//---------------------------------
let fn3 = function(name , age){
    console. log(name+"，你好吗，你的年龄是:"+age);
}
//箭头函数
let fn3 = (name,age) => console. log(name+"，你好吗，你的年龄是: "+age);
fn3('111',30);



//---------------------------------
let fn4 = function(age) {
    return age + 10;
}
//箭头函数
let fn4 = age => age+10;
fn4(38);




//---------------------------------
let fn5 = function(name , age){
    console . log ( name+ '你好吗');
    return age + 10;
}
let fn5 = (name,age) => {console.log ( name+ '你好吗');return age + 10;}
fn5('111',18)

//---------------------------------