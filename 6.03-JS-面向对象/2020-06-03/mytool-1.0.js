// 用JavaScript面向对象的方式封装DOM中的操作

/*
  当前的作用域 -> 全局作用域(问题?)
  * 污染window对象
  * 数据安全性比较低
  * 占全局命名空间
  解决方案: 不会在全局作用域中新增任何变量、对象和函数
  * JavaScript的作用域: 全局作用域和函数作用域(ES6新增块级作用域)
  * 折中的方案就是通过匿名函数的方式来解决
    * 在匿名函数中定义的变量、对象和函数如何在全局作用域中进行访问呢?
      将全局对象window传递给当前的匿名函数
    * 在匿名函数中定义的变量、对象和函数如果都添加到window对象上, 这样的话和直接在全局作用域定义没什么区别
      将所有的功能定义在某一个对象下, 只把这个对象开放给window对象
 */
(function (global) {
  // 判断global对象是否真的存在
  if (!global) {
    console.error('你当前的环境不是浏览器环境.')
    return false
  }
  // 定义一个统一对外开放的对象
  var mytool = new Object()

  /*
    封装DOM中document对象的定位页面元素的方法
    * getElementById() -> 通过ID查找, 得到某个元素 -> #ID
    * getElementsByName() -> 集合               -> 
    * getElementsByTagName() -> 集合            -> tagname
    * getElementsByClassName() -> 集合          -> .className
    * querySelector() -> 通过选择器查找, 得到第一个匹配的元素
    * querySelectorAll() -> 集合
    遇到的问题:
    * 以上6个方法, 返回的有元素、也有集合(2种)
    * 4个getXXX方法, 相对来说比较局限
    * queryXXX方法, 相对性能又不好
    达到的效果:
    1. 返回的结果是统一的
    2. 性能较好、相对便捷
    3. 统一成一个方法
    逻辑确定: 一个方法、底层用getXXX()方法、模仿CSS选择器
   */
  mytool.getElement = function (selector) {
    // 判断selector是否为空
    if (selector !== '' && selector !== undefined && selector !== null) {
      // 如何判断当前使用的是哪一种选择器? 判断第一个字符是什么
      var firstSelector = selector.slice(0, 1)
      var result
      if (firstSelector === '#') {
        // 当前就是ID查找
        result = document.getElementById(selector.slice(1))
      } else if (firstSelector === '.') {
        // 当前就是className查找
        result = document.getElementsByClassName(selector.slice(1))
      } else {
        // 当前就是TagName查找
        result = document.getElementsByTagName(selector)
      }
      var arr = []
      /* 
        如果得到结果是元素的话, 直接push();如果得到结果是集合的话, 先遍历再push()
        * 通过集合提供的length属性进行判断
          * 如果当前是集合的话, 存在length的属性 -> 返回结果为非undefined
          * 如果当前是元素的话, 不存在length的属性 -> 返回结果为undefined
       */
      if (result.length) {
        // 当前得到结果是集合
        for (var i = 0; i < result.length; i++) {
          arr.push(result[i])
        }
      } else {
        // 当前得到结果是元素
        arr.push(result)
      }

      return arr
    }
  }

  // 将统一的对象开放给window对象
  global.mytool = mytool
})(window)