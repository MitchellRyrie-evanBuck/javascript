
// var arr = new Array(5)
// arr[3] = 100
// arr[5] = 55
// arr[8] = 550

// console.log(arr.length)



function fun(){
    console.log("这是一个函数")
}
fun()

var func = function fn(){
	console.log('这是一个用于测试的函数内容.')
}
func()

// 形参实参相等 
function add(a, b){
	console.log(a + b)
}
add(1, 2)
// 形参比实参多
function add(a, b){
	console.log(a, b)
}
add(1)
// 形参的个数少于实参的个数
function add(a, b){
	console.log(a, b)
}
add(1, 2, 3)


// 返回值
function fun(){
	console.log('这是一个用于测试的函数内容.')
	return '这是函数的返回值'
}
var f = fun() //将调用fun函数的计算结果赋值给f变量
console.log(f)


// 进行解码与反解码
var uri = 'http://www.example.com/前端开发工程师'
var encode = encodeURI(uri)
console.log(encode)

var decode = decodeURI(encode)
console.log(decode)

//  同时也包含对符号的解码
var uri = 'http://www.example.com/前端开发工程师'

var encode = encodeURIComponent(uri)
console.log(encode)

var decode = decodeURIComponent(encode)
console.log(decode)







































