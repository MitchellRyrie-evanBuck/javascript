
var arr = []
var v = 100
arr.forEach(function(value,index){
    console.log(this.v)
})
// 错误示范
var obj = {
    v :100,
    arr : [1,2,3,4,5,6],
    f : function(){
        this.arr.forEach(function(value){
            console.log(this.v)
        })
    }
}
obj.f()

/*
    forEach() 方法用于调用数组的每个元素，并将元素传递给回调函数。
    注意: forEach() 对于空数组是不会执行回调函数的。
    forEach 是 ES5 中操作数组的一种方法，主要功能是遍历数组，其实说穿了，就是 for 循环的加强版，该语句需要一个回调函数，作为参数。

*/

	// 分别对应：数组元素，元素的索引，数组本身
	var arr = ['a','b','c'];	
	arr.forEach(function(value,index,array){
		console.log(value);
		console.log(index);
		console.log(array);
		})


















