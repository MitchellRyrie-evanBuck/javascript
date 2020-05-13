
// 数组的判断
console.log([1,2,3,4,5] instanceof Array)
console.log(Array.isArray([1,2,3,4,5]))
console.log(Object.prototype.toString.call([1,2,3,4,5]))
function isArray(value){
	return Object.prototype.toString.call(value) == '[object Array]'
}
console.log(isArray([Array]))
console.log(Array.prototype.isPrototypeOf([1,2,3,4,5]))


// instanceof 运算符：[] instanceof Array 方法结果为 true 或 false
// Array.isArray() 方法：Array.isArray([]) 方法结果为 true 或 false
// Object.prototype.toString.call() 方法：Object.prototype.toString.call([]) 方法如果是数组的话，结果为 [object Array]
// Array.prototype.isPrototypeOf() 方法：Array.prototype.isPrototypeOf([]) 方法结果为 true 或 false

// 转换方法
var arr = [100, true, '这是一个字符串']
console.log(arr.toString())

// toString() 方法：将一个数组转换为字符串，数组中的元素之间使用逗号（,）进行分隔。
// valueOf() 方法：得到当前对象的原始值。如果是 Array 的话，则得到数组对象本身。

var arr = [100, true, '这是一个字符串']
console.log(arr.valueOf() === arr)


// push() 方法：该方法将一个或多个数据内容添加到指定数组的末尾，并返回该数组的新长度。
// pop() 方法：该方法将从指定数组的末尾删除一个数据内容，并返回被删除的数据内容。该方法会改变数组的长度。

var arr = [100, true, '这是一个字符串']

var count = arr.push(200)
console.log('添加新元素之后的数组长度为: ' + count, arr)

var result = arr.pop()
console.log('数组删除的元素为: ' + result, arr)


var arr = [100, true, '这是一个字符串']

var count = arr.push(200)
console.log('添加新元素之后的数组长度为: ' + count, arr)

var result = arr.shift()
console.log('数组删除的元素为: ' + result, arr)



var arr = [100, true, '这是一个字符串']
console.log(arr)
var result = arr.reverse()

console.log(result)

var arr = ['Lucy', 'Mary', 'Lily', 'Aoni']
console.log(arr)
var result = arr.sort()

console.log( result)



var arr = [1, 21, 10, 5, 2, 100, 55, 4, 756]
function aa (a, b){
	if (a < b) {
		return -1
	} else if (a > b) {
		return 1
	} else {
		return 0
	}
}

var result = arr.sort(aa)
console.log(result)


// 合并
var arr = [1, 2, 3, 4, 5]
var add = [6, 7, 8, 9, 10]
var result = arr.concat(add)

console.log(result, arr)

// 截取
var arr = ['ant', 'bison', 'camel', 'duck', 'elephant']
var result = arr.slice(1, 3)

console.log(result, arr)

var arr = ['ant', 'bison', 'camel']
var result = arr.splice(1, 0, 'duck', 'elephant')

console.log(result, arr)

var arr = ['ant', 'bison', 'camel', 'duck', 'elephant']
var result = arr.splice(1, 2)

console.log(result, arr)

var arr = ['ant', 'bison', 'camel', 'duck', 'elephant']
var result = arr.splice(2, 4)

console.log(arr)


var arr = ['ant', 'bison', 'camel', 'duck', 'elephant']
var result = arr.splice(2, 2, 'dog', 'cat', 'pig')

console.log(arr)


var arr = ['ant', 'bison', 'duck', 'camel', 'elephant', 'duck']

var searchResult1 = arr.indexOf('duck')
var searchResult2 = arr.lastIndexOf('duck')

console.log('查找duck的第一个索引值为 ' + searchResult1 + ',最后一个索引值为 ' + searchResult2)


var arr = ['ant', 'bison', 'camel', 'duck', 'elephant']

arr.forEach(function(currentValue, index, array){
	console.log('当前元素的索引值为 ' + index + ', 元素为 ' + currentValue)
})


var arr = [0, 1, 2, 3, 4, 5]

var result = arr.reduce(function(accumulator, currentValue, currentIndex, array){
	return accumulator + currentValue
})

console.log(result)
