# DOM
## Document 对象

```css
Document对象是DOM的标准规范中比较重要的对象之一。该对象提供了访问和更新HTML页面内容的属性和方法。

Document对象作为DOM访问和更新HTML页面内容的入口。简单来说，可以把Document对象理解为在DOM的标准规范中代表HTML页面。

Document对象提供的属性和方法，可以实现定位HTML页面中的元素，或者创建新的元素等功能。

document对象:在DOM中代表了HTML页面
document对象是作为DOM解析HTML页面的入口
```

```css
Document对象是继承于Node对象的。
Node对象也是DOM的标准规范中非常重要的对象之一，而Node对象又是继承于EventTarget对象。

console. log(Document . prototype instanceof Node) ;
console. log (Node. prototype instanceof EventTarget) ;
console. log (Document. prototype instanceof EventTarget) ;

Document对象的属性和方法多是继承于Node对象和EventTarget对象的。当然，也有--部分属性和方法是实现了HTMLDocument接口的。

```

### 定位页面元素的方法

```css
Document对象提供实现定位页面元素的方法具有如下几种:

●getElementById（）方 法:通过页面元素的id属性值定位元素。
●getElementsByName（）方法: 通过页面元素的name属性值定位元素。
●getElementsByTagName（）方法: 通过页面元素的元素名定位元素。
●getElementsByClassName（）方法:通过页面元素的class属性值定位元素。
●querySelector（）方法: 通过CSS选择器定位第-一个匹配的元素。
●querySelectorAll（）方法:通过CSS选择器定位所有匹配的元素。

```

#### getElementById

```css
HTML页面元素的id属性的特点是唯一、不可重复的，所以通过这种方式定位的HTML页面元素也是唯一的。

var element = document.getElementById(id);
注意:如果HTML页面中不存在具有该id属性值的元素，则返回null。


例如id获取：
<body>
    <p id="1">你好呐~</p>
    <script type="text/javascript">
        var get =document.getElementById("1");
        console.log(get);
    </script>    
</body>
```

####  getElementsByName 

```cSs
其语法格式如下:
var elements = document.getElementsByName(name) ;
●name是参数，表示所要定位元素的name属性值，是一个大小写敏感的字符串。
●elements是返回值，表示定位元素的集合，是一个NodeList对象集合。



--------------------------------------------------------------
HTMLCollection对象的例子：


<body>
    <p name="first">你好呐~</p>
    <p name="first">我很好</p>
    <script type="text/javascript">
        var get=document.getElementsByName("first");
        for (var i=0;i<get.length;i++){
            get[i].style.backgroundColor="red"
        }
        console.log(get)
    </script>    
</body>

/*
NodeList [ p, p ]
0: <p name="first" style="background-color: red;">​
1: <p name="first" style="background-color: red;">
*/

上面代码结果可看出NodeList也是可以使用.length方法的

注意:NodeList 不是一个数组！，虽然无法使用数组的一些方法，但是也有自己的方法操作，功能也有类似的地方。
```

#### getElementsByTagName

```css
其语法格式如下:
●var elements = document. getElementsByTagName (name ) ;
●name是参数，表示所要定位元素的元素名，符号“*”表示所有元素。
●elements 是返回值，表示定位元素的集合，是-一个HTMLCollection 对象集合。

例如：
<body>
    <p>你好呐~</p>
    <p>我很好</p>
    <script type="text/javascript">
        var get =document.getElementsByTagName("p");
        for (var i=0;i<get.length;i++){
            get[i].style.backgroundColor="red"
        }
        console.log(get)
    </script>    
</body>

/*HTMLCollection { 0: p.name, 1: p.name, length: 2 }*/

上面代码结果可看出HTMLCollection也是可以使用.length方法的

注意:HTMLCollection 不是一个数组！，虽然无法使用数组的一些方法，但是也有自己的方法操作，功能也有类似的地方。
```

#### getElementsByClassName

```css
其语法格式如下:
var elements = document. getElementsByClassName (names) ;
names是参数，表示所要定位元素的class属性值列表，class 名称通过空格分隔。

返回的也是HTMLCollection对象集合

注意:names参数可以是一个样式属性名称，也可以是多个样式属性名称。


例如：

<body>
    <p class="container box one">你好呐~</p>
    <p class="container box two">我也很好呀~</p>
    <script type="text/javascript">
        var get =document.getElementsByClassName("container box");
        for (var i=0;i<get.length;i++){
            get[i].style.backgroundColor="red"
        }
        console.log(get)
    </script>    
</body>

/*
HTMLCollection { 0: p.container.box.one, 1: p.container.box.two, length: 2 }
*/

由结果可知，这俩个元素都有共同的 container box（元素叠加写法），便可俩个元素都应用
```

#### querySelector

```css
querySelector（）方法:通过CSS选择器定位第一个（若有相同名字）匹配的元素。

结构如下：
var elements = document . querySelector(selectors);

selectors是参数，表示选择器，可以包含-一个或多个CSS选择器，多个则以逗号分隔。
element是返回值，表示定位元素的集合，匹配的第一个元素。

此练习用了class名定位，例如：

<body>
    <p class="container box one">你好呐~</p>
    <p class="container box two">我很好</p>
    <script type="text/javascript">
        var get =document.querySelector(".container,box");
        console.log(get)
    </script>    
</body>

/*
<p class="container box one">
*/
结果可知，只应用第一个
```

#### querySelectorAll

```css
querySelectorAll（）方法:通过CSS选择器定位所有匹配的元素。

结构如下：
var elements = document. querySelectorAll(selectors);

selectors是参数，表示选择器，可以包含-一个 或多个CSS选择器，多个则以逗号分隔。
elements是返回值，表示定位元素的集合，是-一个NodeList集合。

此练习用了元素名定位，例如：
<body>
    <p>你好呐~</p>
    <p>我很好</p>
    <script type="text/javascript">
        var get =document.querySelectorAll("p");
        console.log(get)
    </script>    
</body>

/*
NodeList [ p, p ]
*/

通过结果可知道返回的是NodeList对象集合，当然也可以像之前那样用这个对象的方法来操作页面。
```

#### 节点集合区别

```css
节点集合是一组元素节点的集合，每个节点具有相应的索引值(从 0开始的数字，类似于数组)。

节点集合分为两种:
● 动态HTMLCollection
就是如果文档中的节点树发生变化，则已经存在的HTMLCollection对象也可能会变化。

●静态NodeList
就是对文档对象模型的任何改动都不会影响集合的内容。

```

```css
可用如下代码验证：

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>节点集合</title>
</head>

<body>
  <select name="menu" id="menu">
    <option value="beijing">北京</option>
    <option value="tianjin">天津</option>
    <option value="shanghai">上海</option>
    <option value="chongqing">重庆</option>
    <option value="nanjing">南京</option>
  </select>
  <script>
  
    var nodeList = document.querySelectorAll('option')
    var htmlCollection = document.getElementsByTagName('option')
    /*
      NodeList集合: 是静态集合, 不会跟随HTML页面元素的变化而变化
      HTMLCollection集合: 是动态集合, 会跟随这HTML页面元素的变化而变化
     */
    console.log(nodeList, htmlCollection)
    // 向<select>元素新增一组<option>元素
    var option = document.createElement('option')
    option.setAttribute('value', 'baoding')
    option.textContent = '保定'
    var select = document.getElementById('menu')
    select.append(option)

    console.log(nodeList, htmlCollection)
  </script>
</body>

</html>

/*
结果可得，NodeList返回的是5个值，说明没有变化，是静态的
HTMLCollection返回的是6个值，说明发生了改变，是动态的
*/
```

### 定位页面元素的属性

```css
Document对象也提供了一些属性，来定位HTML项面中一些比较特殊的元素。

●documentElement: 获取HTML页面中的<html>元素。
●head: 获取HTML页面中的<head>元素。
●title:获取HTML页面中的<title>元素。
●body: 获取HTML页面中的<body>元素。
●links:获取HTML页面中的所有<a>元素。
●images: 获取HTML页面中的所有<img>元素。
```

```css
如下代码，定位页面元素的属性images，用来抓取页面所有图片:

var images = document.images
var arr = []
for (var i = 0; i < images.length; i++) {
  var image = images[i]
  arr.push(image.src)
}
console.log(arr)
```

### 创建节点

#### 创建元素节点

```css
Document对象提供了createElement（）方法创建元素节点，其语法格式如下:

var element = document. createElement (tagName) ;
●tagName是参数，表示创建元素的元素名称。
●element是返回值，表示创建的元素。

如下：

<body>
    <div id="boss">哈哈</div>
    <script type="text/javascript">
        var get =document.getElementById("boss");
        var new_node =document.createElement("div");
        get.appendChild(new_node)
        console.log(get,new_node)
    </script>    
</body>

结果为父级div（boss） 中添加了一个子级div
```

#### 创建文本节点

```css
Document对象提供了createTextNode（）方法创建文本节点，其语法格式如下:
var textNode = document. createTextNode (data) ;
●data是参数，包含了放在文本节点中的内容，是一个字符串。
textNode是返回值，表示创建的文本节点。

代码如下：
<body>
    <div id="boss">哈哈</div>
    <script type="text/javascript">
		
		/*获取div父级id*/
        var get =document.getElementById("boss");

		/*创建新节点*/
        var new_node =document.createElement("div");

	    /*再div中创建文本节点*/
        var new_text=document.createTextNode("你好啊")

		/*讲文本节点添加到指定div元素节*/
        new_node.appendChild(new_text)
		
		/*将创建的新节点加入到父级boss节点中*/
        get.appendChild(new_node)
        console.log(get,new_node)
    </script>    
</body>


```

#### 创建属性节点

```css
Document对象提供了createAtrribute0方法创建属性节点，其语法格式如下:
var attributeNode = document. createAttribute(name) ;

name是参数，属性节点的属性名称。
attributeNode是返回值，表示创建的属性节点。

注意:创建属性节点方法只具有属性名称，没有属性值。想要设置属性值需要通过nodeValue属性完成。
由于属性节点不是元素节点的子节点，不能使用添加子节点方式操作属性节点。想要添加属性节点需要通过setAttributeNod（）方法完成。
简写：当然也可以直接在属性节点中的第二个参数写值


如下例代码:
<body>
	<div class="top">111111</div>
     <script>
        // 获取div节点
        var top1 = document.getElementById("boss")
        // 创建新节点
        var new_top = document.createElement("p")
        // 创建文本节点
        var new_text = document.createTextNode("giao")
        // 创建属性节点
        var shuxing = document.createAttribute("class")
        shuxing.nodeValue = "top1"
        
        // 将属性节点添加到元素节点
        new_top.setAttributeNode(shuxing)
        // 将文本节点加入
        new_top.appendChild(new_text)
        top1.appendChild(new_top)
        // console.log(top1,new_top)

    </script>
</body>

```

