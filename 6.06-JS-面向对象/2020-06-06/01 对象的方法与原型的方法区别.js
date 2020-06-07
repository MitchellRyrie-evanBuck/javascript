// 向对象添加方法
var obj = {
  sayMe: function () {
    console.log('这是一个方法')
  }
}
// 对象直接调用方法
obj.sayMe()

// 向原型添加方法
function createObject() {
  this.name = '李雷'
  this.sayYou = function () {}
}

createObject.prototype = {
  sayMe: function () {
    console.log('这是一个原型方法')
  }
}

var newObj = new createObject()
newObj.sayMe()