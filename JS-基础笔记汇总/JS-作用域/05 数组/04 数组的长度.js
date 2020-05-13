// 数组的长度是否可变: JavaScript中的数组长度是可变的
var arr = new Array(5) // 数组的长度为5
arr[3] = 100
arr[5] = 'message'
arr[8] = true
// length的值 = 最大索引值 + 1
console.log(arr.length) // 9