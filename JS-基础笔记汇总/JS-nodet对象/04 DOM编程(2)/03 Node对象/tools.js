// 该工具库用于解决封装DOM操作的一些问题
var tools = {
  firstChild: function (parentNode) {
    return parentNode.firstChild.nextSibling
  },
  lastChild: function (parentNode) {
    return parentNode.lastChild.previousSibling
  },
  childNodes: function (parentNode) {
    var childNodes = parentNode.childNodes
    var arr = []
    for (var i = 0; i < childNodes.length; i++) {
      if (i % 2 == 1) {
        arr.push(childNodes[i])
      }
    }
    return arr
  },
  previousSibling: function (targetNode) {
    return targetNode.previousSibling.previousSibling
  },
  nextSibling: function (targetNode) {
    return targetNode.nextSibling.nextSibling
  },
  insertAfter: function (parentNode, targetNode, newNode) {
    var nextNode = targetNode.nextSibling.nextSibling
    if (nextNode === null) {
      // 说明目标节点是最后一个子节点
      parentNode.appendChild(newNode)
    } else {
      // 说明目标节点不是最后一个子节点
      parentNode.insertBefore(newNode, nextNode)
    }
  },
  textContent: function (targetNode) {
    if (targetNode.textContent === undefined) {
      // 当前使用的是IE浏览器
      return targetNode.innerText
    } else {
      return targetNode.textContent
    }
  }
}