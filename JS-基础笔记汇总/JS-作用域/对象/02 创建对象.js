// 初始化器方式
var obj = {
  name: '李雷',
  age: 18,
  say: function () {
    console.log('this is lilei.')
  }
}
// console.log(obj)


// 构造函数方式
var obj = new Object()
obj.name = '李雷'

obj.say = function () {
  console.log('this is lilei.')
}

// console.log(obj.name)



// Object.create()方式
var obj = Object.create(null)
obj.name = '李雷'

obj.sayMe = function () {
  console.log('this is lilei.')
}

console.log(obj.name)
