// return语句的作用: 函数的返回值

function fn() {
  console.log('return语句前...')
  /*
    当将return语句的返回值设置为false时:
    1. 函数的返回值为false
    2. 页面开发时，当return false时，阻止DOM事件的冒泡
       return语句后的所有语句都不会再执行了
   */
  return false
  console.log('return语句后...')
}

fn()