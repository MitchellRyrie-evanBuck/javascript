/*
    arguments对象
        存在于函数体中的特殊对象->原本是Function类型的arguments属性
        arguments对象是一个类数组对象
            length属性-函数实参的个数
        作用-用于接收函数的参数(实参)
        
*/ 
/*
function fn(){
    console.log(arguments[0])//1
}
console.log(fn.arguments)//null
fn(1,2,3)
*/

//模拟函数的重载效果
function add(){
    var len = arguments.length;
    switch(len){
        case 2:
            return arguments[0] + arguments[1];
            break;
        case 3:
            return arguments[0] + arguments[1] + arguments[2];
            break; 
        case 4:
            return arguments[0] + arguments[1] + arguments[2] + arguments[3];
            break;         
    }
}