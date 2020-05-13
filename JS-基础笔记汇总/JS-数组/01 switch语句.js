/*
  switch语句:
  1. default语句是否必须放置在最后? 不是,default语句可以在switch语句中任何位置
  2. 如果某一个case语句结束时没有break, 结果会怎么样? 将当前匹配的case语句以及下一个case语句的内容全部执行
 */
var num = 1
switch (num) {
  case 0:
    console.log(0)
    break
  case 1:
    console.log(1)
    break
  case 2:
    console.log(2)
    break
  case 3:
    console.log(3)
    break
  case 4:
    console.log(4)
    break
  case 5:
    console.log(5)
    break
  case 6:
    console.log(6)
    break
  case 7:
    console.log(7)
    break
  case 8:
    console.log(8)
    break
  case 9:
    console.log(9)
    break
  default:
    console.log('人工')
}