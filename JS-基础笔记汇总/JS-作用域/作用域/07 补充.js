// 定义变量 -> 变量的访问和修改权限是可控的
var score = 100

function getter() {
  return score
}

function setter(new_value) {
  score = new_value
}