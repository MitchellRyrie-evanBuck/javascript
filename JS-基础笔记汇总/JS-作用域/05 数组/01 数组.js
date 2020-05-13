// 索引数组: 索引值为数字的数组(ECMAScript规范中的)
var arr1 = [1, 2, 3, 4, 5]
// 关联数组(对象替代): 索引值为字符串的数组(ECMAScript规范中没有), length属性失效
var arr2 = new Array()
arr2['name'] = 'lilei'
arr2['age'] = 18
console.log(arr2)

// length属性: 获取数组的长度或数组元素的个数
console.log(arr1.length, arr2.length)

// 稀疏数组: 数组的长度与数组有效元素的个数不一致(ECMAScript规范中没有)
var arr3 = new Array()
arr3[15] = 100
arr3[34] = 200

console.log(arr3, arr3.length)