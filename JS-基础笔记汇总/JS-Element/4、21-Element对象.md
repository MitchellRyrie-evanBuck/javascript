# Element 对象


DOM的标准规范中提供了Element对象，该对象提供了HTML页面中所有元素所具有的属性和方法。

DOM标准规范中提供了Node对象，主要是依靠DOM “节点树” 结构访问和更新HTML页面的内容。

而DOM标准规范中提供了Element对象，主要是依靠DOM “元素树” 结构访问和更新HTML页面的内容。
（元素访问没有像Node对象的空白节点）

注意:所有的HTML页面的元素都是HTMLElement对象，而这个对象又是继承于Element对象的。


浏览器兼容：除了children外，其他属性均不支持IE 8及之前版本的浏览器




## 定位页面的元素的方法


Element对象提供了属性和方法实现定位页面元素功能。

该对象与Document对象提供的属性和方法实现定位页面元素功能区别在于Document对象定位的是HTML页面中所有指定元素，而Element对象定位的是指定元素内所有指定元素。

目前Element对象提供实现定位页面元素的方法具有如下几种:
●getElementsByTagName()方法:通过页面元素的元素名定位元素。
●getElementsByClassName()方法: 通过页面元素的class属性值定位元素。
●querySelector()方法:通过CSS选择器定位第- -一个匹配的元素。
●querySelectorAll()方法:通过CSS选择器定位所有匹配的元素。


注意：和document对象一些方法操作一样，但还是少于document对象


## 遍历元素

#### 获取子元素


通过HTML页面中指定元素查找其子元素，我们可以通过以下Element对象的属性实现:


children 获取指定节点的所有子元素
childElementCount 获取指定元素的所有子元素的个数
firstElementChild 获取指定节点的第一个子元素
lastElementChild  获取指定节点的最后一个子元素

如下代码，统计子元素的个数和childElementCount作用一样：
var children = parentElement.children
console.log(children.length)


### 获取相邻兄弟元素


previousElementSibling 获取指定元素的前面相邻兄弟元素

nextElementSibling	获取指定元素的后面相邻兄弟元素


## 获取指定元素的属性

getAttribute（属性名）方法用于获取指定元素的属性值

### 设置指定元素的属性


setAttribute（）方法 ，用于设置指定元素的属性值

element.setAttribute(name,value)
如果该属性存在，则更新该值；否则将添加一个新的属性用指定的名称和值


## 删除指定元素的属性


removeAttribute（）方法 用于删除指定元素的属性

element.removeAttribute（属性名）


## 判断是否含有指定属性


hasAttribute（）方法，用于判断指定的元素是否存在某个属性

element.hasAttribute（属性名）

---------------------------------
hasAttibutes（）方法，用于判断指定的属性是否含有属性

element.hasAttibutes（）


返回类型都为bool类型，true或false
```



### innerHTML 属性

​```css
表示HTML页面指定元素后代的HTML代码 

var content=element.innerHTML


返回的是描述元素后代的HTML语句
-----------------------------------------
设置HTML页面中指定元素的后代HTML语句
element.innerHTML="code"

例：
<body>
  <p id="p1">你好呀~</p>
  <script>
    var pElement = document.getElementById('p1')
    console.log(pElement.innerHTML)
    /*
      innerHTML属性并不是W3C的DOM规范
      注意: 如果使用innerHTML属性设置HTML内容的话, 设置的内容不能是由用户输入的
     */
    pElement.innerHTML = '<span style="color: red;">这是一段用于测试的文本.</span>'
  </script>
</body>


如上代码，原p标签中的文本内容：你好呀~，会被span元素所取代替换掉。


----------------------------------------------------------------
尽管innerHTML属性不属于W3C DOM规范，但是它为完全替换元素内容提供了一个更加便捷的方式。

举个例子，可以通过如下代码完全删除文档内body的内容:
document . body. innerHTML = "";
注意:因为innerHTML属性没有统一的标准，各浏览器厂商对它实现差别很大。

```

