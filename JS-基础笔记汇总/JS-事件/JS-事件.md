# JS-事件

## 什么是事件

所谓事件，就是浏览器告知JavaScript程序用户的行为。例如用户点击了HTML页面中的某个按钮, 或者用户输入用户名或密码等操作。

### 事件类型

事件根据使用的场景不同，可以分为如下几种：

•依赖于设备的输入事件：键盘事件和鼠标事件，这些事件都是直接和设备相关的。

•独立于设备的输入事件：例如click事件等，这些事件并没有直接与设备相关。

•用户界面的相关事件：用户界面事件属于较高级的事件，一般多用于表单中的组件。

•状态变化的相关事件：这些事件与用户行为无关，而是由网络或浏览器触发的。

•特定API事件：这些事件多用于特定场景的实现，例如HTML5中提供的拖放API中的事件等。

•与错误处理的相关事件

## 注册事件

### 什么是注册事件

所谓注册事件，就是将JavaScript函数与指定的事件相关联，被绑定的函数成为该事件的句柄。当 该事件被触发时，绑定的函数会被调用。

注册事件具有以下三种方式实现：

• HTML页面元素提供的事件属性

• DOM标准规范中HTML相关对象提供的事件属性

•通过向HTML页面中指定元素添加事件监听器

**注册事件的三种例子**

```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>注册事件</title>
</head>

<body>
  <!-- 
    1.通过HTML元素的事件属性
      格式: 事件名称="函数名"
      问题: HTML结构与行为没有有效分离
   -->
  <button id="btn1" onclick="fn()">按钮</button>
  <button id="btn2">按钮</button>
  <button id="btn3">按钮</button>
  <script>
    function fn() {
      console.log('你终于点击了我...')
    }

    // 2.DOM中相关对象提供的事件属性
    var btn2 = document.getElementById('btn2')

    // btn2.onclick = function () {
    //   console.log('你终于点击了我...')
    // }

    // 如果为某个事件指定的处理函数是已定义好的话, 只写函数名(不能有小括号)
    btn2.onclick = fn

    // DOM中的事件属性与事件监听器的区别在于: 是否设置是否为事件冒泡

    // 3.为指定的目标元素添加事件监听器
    var btn3 = document.getElementById('btn3')
    btn3.addEventListener('click', fn)
  </script>
</body>

</html>
```

### HTML元素的事件属性

HTML页面的元素提供了一系列的标准事件属性，通过这些事件属性可以实现注册事件的功能。

### **DOM**对象的事件属性

通过DOM标准规范中的Document对象定位HTML页面的元素，所返回的DOM对象提供了一系列 的事件属性，通过这些事件属性可以实现注册事件的功能

通过DOM对象的事件属性方式注册事件，是不允许重复注册的。如果以这种方式为某个元素注册 相同事件多次的话，只有最后一次注册的函数有效。

### 事件监听器

DOM标准规范提供的addEventListenerQ方法，调用该方法表示向指定元素添加事件监听器。 element.addEventListener(eventName, functionName, capture)

| 参数名称      | 描述                                                        |
| ------------- | ----------------------------------------------------------- |
| eventName     | 为元素指定具体的事件名称(例如单击事件是click等)             |
| functionN ame | 算册事件的句柄                                              |
| capture       | 31聲奇件是捕获阶段还是冒泡阶段。False为默认值，表示冒泡阶段 |

```
<div class="button-group">
<button id="btn" class="button">按钮</button> </div>
<script>
var btn = document.getElementByld(1btn1); btn.addEventListener(1 click1,function(){ console. log('你终于点中了我
})；
</script>
```

它提供了一种更精细的手段控制事件的触发阶段（是捕获阶段还是冒泡阶段）。

在IE 8及之前版本的浏览器，并不支持addEventListenterQ方法添加事件监听器。而是使用 attachEventO方法进行添加。

| 参数名称   | 描述                                              |
| ---------- | ------------------------------------------------- |
| eventNcime | 为元素指定具体的事件名称（例如单击事件是click等） |

### 事件监听器中的this

当使用addEventListenerQ方法为某个HTML页面元素注册事件的时候，this就指代注册事件的元素

```
btn.addEventListener('click',function(){
console.log(this.textContent);
});
```

当使用attachEvent。方法为某个HTML页面元素注册事件的时候，this指代的是window对象，而不 是注册事件的元素。

```
var btn = document.getElementByld('btn');
btn.attachEvent('onclick',function(){
console.log(this);
});
```

由于addEventListenerQ方法中的this与attachEvcnt0方法中的this的含义不同，我们需要将监听器的 浏览器兼容方案进行优化：

```
function bind(elem, event, callback){
//判断是否存在addEventListener
if (elem.addEventListener){ elem.addEventListener(event, callback, false);
}else{
elem.attachEvent('on' + event, function(){
//将this的指向修改为注册事件的元素
callback.call(elem);
});
```

## 移除注册事件

DOM标准规范提供^removeEventListenerO方法，调用该方法表示向指定元素移除事件监听器。

element.removeEventListener(eventName, functionName, capture)

| 参数名称       | 描述                                                       |
| -------------- | ---------------------------------------------------------- |
| eventNcime     | 表示移除的事件名称（例如单击事件是click等）                |
| functionN cime | 注册事件的句柄（之前使用addEventListenerO方法疋义的）      |
| capture        | 设置事件是捕获阶段还是冒泡阶段。Glse为默认值，表示冒泡阶段 |

## Event事件对象

为HTML页面中的元素注册事件时，事件的处理函数具体一个参数，该参数就是Event事件对象。 Event事件对象中包含了该事件的信息，以及该事件发生在哪个元素上。

•当事件发生时，Event事件对象会被创建并依次传递给事件监听器。

•由于Event事件对象是事件处理函数的参数，所以参数名允许自定义的。

## 获取目标元素

Event事件对象提供了target属性，用于获取触发当前事件的HTML元素。

例子

```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>获取目标元素</title>
</head>

<body>
  <ul>
    <li id="link" style="background-color: lightskyblue;"><a href="#">链接</a></li>
  </ul>
  <script>
    var liElement = document.getElementById('link')
    // 为父级元素绑定事件, 在后代元素中同样适用
    liElement.onclick = function (event) {
      /*
       * target属性: 触发当前事件的目标元素
       * currentTarget属性: 绑定当前事件的目标元素
       * this: 与currentTarget属性一致
       */
      console.log(event.target, event.currentTarget, this)
    }
  </script>
</body>

</html>
```

### currentTarget

Event事件对象提供了currcntTargct属性，用于获取注册当前事件的HTML元素。

```
<ul id="li" class="list-group">
<li class="list-group-item"><a href="#">链接</a></li> </ul>
<script type="text/javascript">
var li = document.getElementByld('li'); li.addEventListener('click',function(event){ console.log(event.currentTarget)
});
</script>
```

### **currentTarget** 属性与 **this**

事件处理函数中的this,作用与事件对象的currentTarget属性相同，可以获取注册当前事件的 HTML元素。

```
<ul id="li" class="list-group">
<li class="list-group-item"><a href="#">链接</a></li>
</ul>
<script type="text/javascript">
var li = document.getElementByld('li');
li.addEventListener('click',function(event){ console.log(this)
});
</script>
```

## 阻止默认行为

### 什么是默认行为

所谓默认行为，就是指HTML元素不借助JavaScript逻辑原本具有的动态效果。例如以下HTML元素:

• <a＞元素的跳转功能。

• <form＞元素中点击〈input type="submit”＞提交按钮时，提交表单功能。

•输入框的输入文本内容功能。

•单选框或复选框的切换选项功能。

### **preventDefault**。方法

Event事件对象提供了preventDefaultO方法，用于阻止HTML元素的默认行为。

### 也可以使用 return false

事件的处理函数中，我们也可以使用return false语句阻止默认行为。return false语句除了具有阻止 默认行为功能之外，编写在return false语句后面的JavaScript代码并不会被执行。

例子

```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>阻止默认行为</title>
</head>

<body>
  <a id="link" href="#">链接</a>
  <a href="javascript: return false;">链接</a>
  <script>
    var link = document.getElementById('link')
    // 1.Event事件对象的preventDefault()方法
    link.onclick = function (event) {
      event.preventDefault();
    }
    // 2.函数的return语句: return false;
    link.onclick = function () {
      return false
    }
  </script>
</body>

</html>
```

## 获取鼠标坐标

### 获取鼠标相关属性

Event事件对象提供了触发注册事件时，有关鼠标的坐标值相关属性：

• pageX和pagcY:表示鼠标在整个页面中的位置。如果页面过大（存在滚动条），部分页面可能 存在可视区域之外。

• clientX和clicntY:表示鼠标在整个可视区域中的位置。

• screenX和scrccnY:表示鼠标在整个屏幕中的位置。从屏幕（不是浏览器）的左上角开始计算。

• offsctX和offsctY:表示鼠标相对于定位父元素的位置。

## 事件流

### 什么是事件流

所谓事件流，就是当触发某个元素的事件时，事件会按照DOM树结构进行传播，传播的过程分为 捕获阶段、目标阶段和冒泡阶段三个阶段。

1 捕获阶段：该阶段是由网景公司提出的。按照DOM树结构由document对象向下的顺序传播， ww直到目标元素为止。

2 目标阶段：该阶段就是指目标元素触发当前事件。

3 冒泡阶段：该阶段是由微软公司提出的，按照DOM树结构由目标元素向上的顺序传播，直到 网gfdocumcnt对象为止。

### 事件监听器的捕捉与冒泡阶段

事件监听器addEventListenerQ方法的第三个参数的作用，就是设置当前注册的事件是捕获阶段还是 宣泡阶段。

如果将事件监听器方法addEventListenerQ的第三个参数的只设置为true,即为捕获阶段。

如果将事件监听器方法addEventListenerQ的第三个参数的只设置为false,即为冒泡阶段。

#### 取消事件冒泡

当元素注册事件设置为冒泡阶段时，可以通过事件对象的stopPropagationO方法取消事件冒泡。

例子

```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>事件流</title>
  <style>
    * {
      box-sizing: border-box;
    }

    .box1 {
      width: 300px;
      height: 300px;
      padding: 50px;
      background-color: lightpink;
    }

    .box2 {
      width: 200px;
      height: 200px;
      padding: 50px;
      background-color: lightseagreen;
    }

    .box3 {
      width: 100px;
      height: 100px;
      background-color: lightsalmon;
    }
  </style>
</head>

<body>
  <div id="box1" class="box1">
    <div id="box2" class="box2">
      <div id="box3" class="box3"></div>
    </div>
  </div>
  <script>
    var box1 = document.getElementById('box1')
    var box2 = document.getElementById('box2')
    var box3 = document.getElementById('box3')
    // 第三个参数: 默认值 false 表示冒泡阶段; true 表示捕获阶段
    box1.addEventListener('click', function (event) {
      console.log('this is box1.')
    })
    box2.addEventListener('click', function (event) {
      console.log('this is box2.')
    })
    box3.addEventListener('click', function (event) {
      console.log('this is box3.')
      event.stopPropagation()
    })
  </script>
</body>

</html>
```

## 事件委托

当为大量的HTML元素注册相同事件，并且事件的句柄逻辑完全相同时，会造成页面速度下降。不 过，事件流允许在这些HTML元素的共同父级元素注册事件。这种方式被称为事件委托。

### 优势

•适用于新创建的元素

冬如果向DOM树结构中添加新的元素，那么不需要再向这个新元素注册相同事件。因为注册事件 已经委托给了该元素的祖先元素完成。

•简化逻辑代码

:g这种方式只需要祖先元素一次注册事件，而不需要分别为大量元素注册事件。使得逻辑代码的 瑚◎性能提高，也更加容易维护。

例子

```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>事件委托</title>
</head>

<body>
  <ul id="city">
    <li>北京</li>
    <li>天津</li>
    <li>上海</li>
  </ul>
  <script>
    var city = document.getElementById('city')
    // 为id为city元素中所有的<li>子元素绑定相同事件
    // var liElements = city.getElementsByTagName('li')
    // for (var i = 0; i < liElements.length; i++) {
    //   var liElement = liElements[i]
    //   liElement.addEventListener('click', function () {
    //     console.log('你终于点击了我...')
    //   })
    // }
    // 新增<li>元素: 默认没有绑定相同事件的
    // var newLiElement = document.createElement('li')
    // newLiElement.textContent = '重庆'
    // city.appendChild(newLiElement)

    // newLiElement.addEventListener('click', function () {
    //   console.log('你终于点击了我...')
    // })

    // 事件委托: 为所有元素的共同父级元素绑定事件
    city.addEventListener('click', function (event) {
      var target = event.target
      if (target.nodeName === 'LI') {
        console.log('你终于点击了我...')
      }
    })
    // 新增<li>元素
    var newLiElement = document.createElement('li')
    newLiElement.textContent = '重庆'
    city.appendChild(newLiElement)
  </script>
</body>

</html>
```











