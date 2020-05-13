var obj = {
  name: '李雷', // string
  age: 18, // number
  sayMe: function () {
    console.log('我是李雷.')
  }
}



for (attr in obj) {
  // 如何区分属性和方法?
  if (obj[attr] instanceof Function) {
    console.log('说明当前这个是方法')
  } else {
    console.log('说明当前这个是属性')
  }
}