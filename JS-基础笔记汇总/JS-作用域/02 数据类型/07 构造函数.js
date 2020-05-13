// 以 String 为例
// 1. 直接量/字面量(原始类型)
var str1 = 'this is message'
// 2. 构造函数方式(包装类型) -> 创建对象
var str2 = new String('this is messages')
// 3. 函数方式 -> 计算处理
var str3 = String('this is message')

console.log(str1, str2, str3)

// 为 String 增加属性和方法(相当于把 String 当作对象)