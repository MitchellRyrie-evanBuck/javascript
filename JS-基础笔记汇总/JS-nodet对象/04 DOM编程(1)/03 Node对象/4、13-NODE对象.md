# Node 对象

## 什么是NODE对象

DOM的标准规范中提供了Node对象，该对象主要提供了用于解析DOM节点树结构的属性和方法。 DOM树结构主要是依靠节点进行解析，称为DOM节点树结构。Node对象是解析DOM节点树结构 的主要入口。
Node对象提供的属性和方法，可以实现遍历节点、插入节点和替换节点等操作。 


Node对象是继承于EventTarget对象的，EventTarget是一个用于接收事件的对象。我们可以通过如下代码测试两者之间的继承关系：

console.log(Node.prototype instanceof EventTarget);
DOM的标准规范中的Document对象和Element对象都是继承于Node对象的。

我们可以通过如下代 码测试它们之间的继承关系：
console・log(Document・prototype instanceof Node); console.log(Element.prototypeinstanceof Node); 

结果可知：
EventTarget对像 派生-------》Node对象 派生-------》Document对象和Element对象



## 节点类型

Node对象中提供了获取节点的方法：

nodeName(节点名称)、nodeType(节点类型)、nodeValue(节点的值)


### nodeName名称

1、nodeName(节点名称)

Node对象的nodeName属性用于获取指定节点的节点名称。
var str = node. nodeName ;

注意:在nodeName是一一个只读属性。


针对不同的节点类型，nodeName返回的节点名称是不同的，如下:

|     节点类型     | nodeName属性的值 |
| :--------------: | :--------------: |
| Document文档节点 |    #document     |
| Element元素节点  | 元素节点的元素名 |
|   Attr属性节点   | 属性节点的属性名 |
|   Text文本节点   |      #text       |

```css
如以下代码测试：

<body>
  <div id="box" class="box">这是一段测试的内容.</div>
  <script>
    // <div>元素 -> 元素节点
    var divElement = document.getElementById('box')
    // class属性 -> 属性节点
    var attrNode = divElement.getAttributeNode('id')
    // 文本内容 -> 文本节点
    var textNode = divElement.firstChild
    /*
       元素节点的nodeName、nodeType和nodeValue
       * 元素节点的nodeName属性值: 全大写的元素名称
       * 元素节点的nodeType属性值: 1
       * 元素节点的nodeValue属性值: null
     */
    console.log(divElement.nodeName, divElement.nodeType, divElement.nodeValue)
    /*
      文本节点的nodeName、nodeType和nodeValue
      * 文本节点的nodeName属性值: #text
      * 文本节点的nodeType属性值: 3
      * 文本节点的nodeValue属性值: 文本内容
     */
    console.log(textNode.nodeName, textNode.nodeType, textNode.nodeValue)
    /*
      属性节点的nodeName、nodeType和nodeValue
      * 属性节点的nodeName属性值: 属性名称
      * 属性节点的nodeType属性值: 2
      * 属性节点的nodeValue属性值: 属性值
     */
    console.log(attrNode.nodeName, attrNode.nodeType, attrNode.nodeValue)
  </script>
</body>
```

### nodeType属性

```css
Node对象的nodeType属性用于获取指定节点的节点类型。

var type = node. nodeType;
type是一一个整数，其代表的是节点类型。



针对不同的节点类型，nodeType返回的节点类型是不同的,如下:
```

|     节点类型      | nodeType属性的值 |
| :---------------: | :--------------: |
| Document 文档节点 |        9         |
| Element 元素节点  |        1         |
|   Attr 属性节点   |        2         |
|   Text 文本节点   |        3         |

### nodeValue 属性

```css
Node对象的nodeValue属性用于获取指定节点的节点值。

var value = node. nodeValue;

value是一个包含当前节点的值的字符串。

针对不同的节点类型，nodeValue返回的节点类型是不同的,如下:
```

|     节点类型     | nodeValue属性的值 |
| :--------------: | :---------------: |
| Document文档节点 |       null        |
| Element元素节点  |       null        |
|   Attr属性节点   | 属性节点的属性值  |
|   Text文本节点   |  文本节点的内容   |

## 遍历节点

#### 获取父节点

```css
通过HTML页面中指定元素查找其父级节点，我们可以使用Node对象的parentNode属性实现: 

注意:在一个元素节点的父节点，可能是一个元素节点，也可能是一个文档节点。

例如：

<body>
  <div id="parent">
    <div id="box1">box1</div>
    <div id="box2">box2</div>
    <div id="box3">box3</div>
  </div>
  <script>
    // 获取父节点 - parentNode
    var box2 = document.getElementById('box2')
    var parentNode = box2.parentNode
    console.log(parentNode)
  </script>
</body>

/*
这样结果，是通过子元素节点，获取到父级元素节点
*/
```

#### 获取父元素节点

```css
Node对象提供了parentElement属性获取指定节点的父元素节点。

<body>
  <div id="parent">
    <div id="box1">box1</div>
    <div id="box2">box2</div>
    <div id="box3">box3</div>
  </div>
  <script>
    var box2 = document.getElementById('box2')
    // 获取父元素节点 - parentElement
    var parentElement = box2.parentElement
    console.log(parentElement)
  </script>
</body>

/*
结果可知，和获取父节点结果相同，但是这俩个方法还是有区别的
*/
```

```css
父节点与父元素节点的区别

用以下代码测试区别：
/*htmlElement返回的是<html>元素，也就是根*/
var htmlElement = document.documentElement
console.log(htmlElement.parentNode, htmlElement.parentElement)

/*
<html>元素的父节点返回的是document对象，父元素节点返回的是null
只有根是特殊的，其他的结果都相同，这是因为dom根节点是一个document文档对象，而不是一个元素节点。

parentNode:    获取指定节点的父节点，其父节点不一定是元素节点。
parentElement: 获取指定节点的父元素节点，其父节点必须是元素节点。

*/
```

#### 获取子节点

```css
childNodes 获取指定节点的所有子节点
返回的是NodeList集合(动态集合)


firstChild 获取指定节点的第一个子节点

lastChild  获取指定节点的最后一个子节点

```

```css
例如以下代码：

<body>
  <div id="parent">
    <div id="box1">box1</div>
    <div id="box2">box2</div>
    <div id="box3">box3</div>
  </div>
  <script>
    var parentElement = document.getElementById('parent')
    console.log(parentElement.firstChild)
    console.log(parentElement.lastChild)

    /* childNodes属性返回的是NodeList集合(动态集合) */
    var children = parentElement.childNodes
    console.log(children)
	
	/*测试childNodes是否为动态集合*/
    var divElement = document.createElement('div')
    parentElement.appendChild(divElement)

    console.log(children)
  </script>
</body>

------------------------------------------------------------------------------
综合练习：

<body>
    <div id="parent">
      <div id="box1">box1</div>
      <div id="box2">box2</div>
      <div id="box3">box3</div>
    </div>
    <script>
      var parent=document.getElementById("parent");
      var first=parent.firstChild;
      var last=parent.lastChild;
      var childs=parent.childNodes;
      console.log(first)
      console.log(last)
      console.log(childs)
    </script>
  </body>
```

#### 获取相邻兄弟节点

```css
previousSibling获取指定节点的前面相邻兄弟节点

nextSibling获取指定节点的后面相邻兄弟节点
```

#### 空白节点

```css
主流浏览器解析HTML页面内容为DOM节点树结构时，会产生空文本的空白节点。
这是由HTML页面源代码中的换行引起的

<div id="parent" class="button-group">
<button name="btn" class="button">A Button</button>
<button name="btn" class="button">A Button</ button>
<button name="btn" class="button">A Button</button>
</div>

如下图所示：
```

![1586789850233](C:\Users\49855\AppData\Roaming\Typora\typora-user-images\1586789850233.png)

#### 空白节点的解决方案

```css
1.弃用DOM中Node对象用于获取指定节点的子节点和兄弟节点的属性。

2.通过使用getElementsByTagNam（）方法实现相应功能。

```

```javascript
如下例代码，第二种方法：

创建一个对象：

// 该工具库用于解决封装DOM操作的一些问题
var tools = {
  firstChild: function (parentNode) {
    /*
    第一个文本节点获取，返回的是下一个相邻兄弟，
    因为获取到的第一个是空白节点。
    */
    return parentNode.firstChild.nextSibling
  },
  lastChild: function (parentNode) {
       /*
    最后一个文本节点获取，返回的是上一个相邻兄弟，
    因为获取到的最后一个是空白节点。
    */
    return parentNode.lastChild.previousSibling
  },
   /*
   返回所有子节点，用for循环筛选出奇数存在的节点，
   因为偶数节点都是空白节点，
   当然也可以用截取的方法。
   */
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
  }
}
```

## 插入节点

#### appendChild 方法

```css
Node对象提供的appendChild0方法可以向指定节点的子节点列表的最后添加一个新的子节点。

var child = node . appendChild(child);

●appendChild(方法的参数child表示添加的新的子节点，同时该子节点也是appendChil()方法的返回值。


例如：

<body>
    <div id="parent">
      <div id="box1">box1</div>
      <div id="box2">box2</div>
      <div id="box3">box3</div>
    </div>
    <script>
		/*获取父节点*/
      var parent=document.getElementById("parent");
		/*创建新节点*/
      var new_node=document.createElement("div");
		/*给新节点设置属性和值*/
      new_node.setAttribute("id","box4");
		/*给新节点添加文本内容*/
      new_node.textContent="box4"
		/*将新节点加入到父节点中，新节点是最后一个*/
      parent.appendChild(new_node);
    </script>
  </body>
```

#### insertBefore 方法

```css
Node对象提供了insertBefore()方法同样可以实现插入节点的功能。

这个方法可以指定插入某节点之前

结构：
var insertedElement = parentElement. insertBefore ( newElement , referenceElement) ;
●参数referenceElement表示指定节点的某个子节点。
●参数newElement表示插入的节点。


代码例如：

<body>
    <div id="parent">
      <div id="box1">box1</div>
      <div id="box2">box2</div>
      <div id="box3">box3</div>
    </div>
    <script>
		/*获取父节点*/
      var parent=document.getElementById("parent");
		/*创建新节点*/
      var new_node=document.createElement("div");
		/*给新节点设置属性和值*/
      new_node.setAttribute("id","box4");
		/*给新节点添加文本内容*/
      new_node.textContent="box4";
        /*指定节点，为第二个节点*/
      node_two=document.getElementById("box2")
		/*将新节点加入到父节点中，新节点添加到指定节点前一个*/
      parent.insertBefore(new_node,node_two)
    </script>
  </body>
```
