// 与变量提升类似，函数也存在提升的现象

fn()

function fn() {
  console.log('this is function.')
}

fn()