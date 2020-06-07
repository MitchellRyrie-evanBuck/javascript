(function (global, factory) {
  /*
    目标: 判断当前使用该工具库的环境是否为浏览器环境
    * 如果是浏览器环境, 执行封装DOM操作的逻辑
    * 如果是非浏览器环境, 执行其他的逻辑
   */
  if (global.document) {
    // 浏览器环境
    factory(global)
  } else {
    // 非浏览器环境
  }

  /*
   传递实参时: 允许直接传递表达式 -> 将表达式的计算结果作为实参传递
   this是JavaScript语言中一个非常的坑
   * 当前工具库基于浏览器制作出来的 -> window全局对象
   * 在非浏览器环境中, 一般情况下存在一个全局对象
     * 比如 Node.js 的全局对象 Global
   * 在全局作用域中, this指代全局对象
   */
})(window !== undefined ? window : this, function (window) {
  var _document = window.document
  /*
    MyTool的身份:
    * 作为一个函数: 定位页面元素和创建新元素
    * 作为一个对象
   */
  var MyTool = function (selector) {
    // 创建核心对象
    var _mytool = new MyTool.init()

    var result
    if (selector === undefined || selector === null || selector === '') {
      return _mytool
    }
    // 实现创建新元素的功能
    else if (selector[0] === '<' &&
      selector[selector.length - 1] === '>' &&
      selector.length >= 3) {
      /*
        创建元素: 参数中截取到标签名
        1. 开始标签中存在属性: 标签名就是从"<"到第一个空格之间
        2. 开始标签中不存在属性: 标签名就是从"<"到第一个">"之间
        实现的思路:
        1. 截取到第一个">"的索引值
        2. 判断从"<"到第一个">"之间是否存在空格
           * 如果存在: 具有属性
           * 如果不存在: 没有属性
       */
      var firstRightArrowIndex = selector.indexOf('>')
      var startTag = selector.slice(0, firstRightArrowIndex + 1)
      var firstSpaceIndex = startTag.indexOf(' ')
      var tagName, textValue

      if (firstSpaceIndex !== -1) {
        // 开始标签中存在属性
        tagName = selector.slice(1, firstSpaceIndex)
      } else {
        // 开始标签中不存在属性
        tagName = selector.slice(1, firstRightArrowIndex)
      }
      var newElement = _document.createElement(tagName)

      // 是否存在文本内容
      if (selector.match(/[<]/g).length === 2) {
        var lastLeftArrowIndex = selector.lastIndexOf('<')
        textValue = selector.slice(firstRightArrowIndex + 1, lastLeftArrowIndex)

        newElement.textContext = textValue
      }

      // 是否存在属性
      if (firstSpaceIndex !== -1) {
        var attrArr = startTag.slice(0, firstRightArrowIndex).split(' ')
        for (var i = 1; i < attrArr.length; i++) {
          var attrText = attrArr[i]
          var attrName = attrText.split('=')[0]
          var attrValue = attrText.split('=')[1]
          attrValue = attrValue.slice(1, attrValue.length - 1)

          newElement.setAttribute(attrName, attrValue)
        }
      }

      result = newElement
    }
    // 实现定位页面元素的功能
    else if (selector[0] === '#') {
      // 元素的ID属性定位页面元素
      result = _document.getElementById(selector.slice(1))
    } else if (selector[0] === '.') {
      // 元素的class属性定位页面元素
      result = _document.getElementsByClassName(selector.slice(1))
    } else {
      // 元素的名称定位页面元素
      result = _document.getElementsByTagName(selector)
    }

    // 将定位页面元素的结果封装到核心对象中
    if (result.length) {
      // 当前得到结果是集合
      for (var i = 0; i < result.length; i++) {
        _mytool.push(result[i])
      }
    } else {
      // 当前得到结果是元素
      _mytool.push(result)
    }

    // 返回核心对象
    return _mytool
  }

  // MyTool对象的init() -> 用来创建核心对象的构造函数
  MyTool.init = function () {
    // 用来扩展与DOM操作有关的功能
  }

  MyTool.init.prototype = new Array()

  // 将MyTool当做是一个对象: 用来扩展与DOM操作无关的功能


  // 将核心对象开放给全局作用域
  window.MyTool = window.$ = MyTool
})