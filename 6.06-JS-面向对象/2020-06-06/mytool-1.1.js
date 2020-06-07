(function (global) {
  /*
    定义开放给全局作用域的变量, 具有两重身份:
    * 本身应该是一个对象, 通过构造函数方式来创建(自身方法和原型方法都存在)
      * 将之前定义页面元素返回的结果(数组)和当前这个对象进行整合 -> 类数组对象
    * 还应该是一个函数, 该函数封装定位页面元素功能
   */
  var _mytool = function (selector) {
    // 创建核心对象
    var _tool = new createMyTool()

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

      if (result.length) {
        // 当前得到结果是集合
        for (var i = 0; i < result.length; i++) {
          _tool.push(result[i])
        }
      } else {
        // 当前得到结果是元素
        _tool.push(result)
      }
    }

    // 在当前函数中返回一个对象
    return _tool
  }

  // 将_mytool当做是一个对象: 通过为_mytool定义方法的方式 -> 扩展相关功能

  /*
    定义一个核心的构造函数:
    * 通过该构造函数可以创建核心对象
    函数:
    * 当做一个普通的函数来使用: 定义局部变量和内部函数 -> 调用函数
    * 当做一个构造函数来使用: 定义属性和方法         -> 创建对象
    * 在全局作用域中, 都是为window对象添加方法
   */
  function createMyTool() {
    // 通过为构造函数定义方法的方式 -> 扩展相关功能
  }
  // 真正将自定义对象和数组进行整合
  createMyTool.prototype = new Array()

  // 将内部创建的对象开放给全局作用域
  global.mytool = global.$ = _mytool
})(window)
/*
  笔记:
  * 在函数内部定义局部变量、内部函数或对象时, 命名格式经常使用"_"作为前缀
    * 目的: 主要为了与真正在全局作用域中定义变量、对象或函数进行区分
  * 在实际开发, 经常会使用一个符号替代对象名. 比如后面要学习的jQuery库, 使用"$"替代对象
 */