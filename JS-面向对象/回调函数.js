
// 将函数当作实参传递进去

var n = function() {
    console.log("mmm")
}

function fn(v) {
    v()
}
fn(n)

fn(function(){console.log("aaaa")})






// 优势:
/*
    1.节省了全局命名空间
    2.将私有的的数据内容开放给指定的位置使用
    3.虽然使用私有数据，到那时不清楚来源
*/
// 陷阱
/*
    性能下降---回调函数的参数的参数又是另一个函数 ---回调函数    
*/



