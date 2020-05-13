// 函数和构造函数整合在一起
function Score() {
  // 当做函数使用 -> 定义局部变量(初始化默认值)
  var score = 100
  // 当做构造函数使用
  this.getter = function () {
    return score
  }
  this.setter = function (new_value) {
    score = new_value
  }
}

var result = new Score()

console.log(result.getter()) // 100
result.setter(200)
console.log(result.getter()) // 200