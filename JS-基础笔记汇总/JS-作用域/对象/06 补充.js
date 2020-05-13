// 对象和函数整合在一起
function Score() {
  // 局部变量
  var score = 100
  // 返回一个对象
  return {
    getter: function () {
      return score
    },
    setter: function (new_value) {
      score = new_value
    }
  }
}

var result = Score()
console.log(result.getter()) // 100
result.setter(200)
console.log(result.getter()) // 200