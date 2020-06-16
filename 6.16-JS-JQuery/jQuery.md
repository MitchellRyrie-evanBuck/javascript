

# jQuery

## jQuery基础

### 初识jQuery 

#### jQuery是什么?

- jQuery是一款优秀的JavaScript库,最主要的用途是用来做查询,还能让我们对HTML文档遍历和操作、事件处理、动画以及Ajax变得更加简单

[![NPuaUx.png](https://s1.ax1x.com/2020/06/15/NPuaUx.png)](https://imgchr.com/i/NPuaUx)

#### 为什么要使用jQuery?

- js库：把一些常用到的方法写到一个单独的js文件，使用的时候直接去引用这js文件就可以了。
  （animate.js、common.js）

  我们知道了，jQuery其实就是一个js文件，里面封装了一大堆的方法方便我们的开发，
  其实就是一个加强版的common.js，因此我们学习jQuery，其实就是学习jQuery这个js文件中封装的一大堆方法。

- [1.x](https://link.jianshu.com?t=https%3A%2F%2Fcode.jquery.com%2F)：兼容ie678，但相对其它版本文件较大，官方只做BUG维护，功能不再新增

- [2.x](https://link.jianshu.com?t=https%3A%2F%2Fcode.jquery.com%2F)：不兼容ie678，相对1.x文件较小，官方只做BUG维护，功能不再新增

- [3.x](https://link.jianshu.com?t=https%3A%2F%2Fcode.jquery.com%2F)：不兼容ie678，只支持最新的浏览器，很多老的jQuery插件不支持这个版本，相对1.x文件较小，提供不包含Ajax/动画API版本

> 根据各种网页的源代码,了解到要用**1.x**

#### 如何使用jQuery?

- 下载 jQuery库

  - 下载地址: [http://code.jquery.com/](https://link.jianshu.com/?t=http%3A%2F%2Fcode.jquery.com%2F)

  [![NPuHqs.png](https://s1.ax1x.com/2020/06/15/NPuHqs.png)](https://imgchr.com/i/NPuHqs)

- 引入 jQuery库

  ```html
  <script src="jquery-1.12.4.js"></script>
  ```


## jquery的入口函数

使用jQuery的三个步骤：

1. 引入jQuery文件
2. 入口函数
3. 功能实现

关于jQuery的入口函数：

```javascript
//第一种写法
$(document).ready(function() {
	
});
//第二种写法
$(function() {
	
});
```



## div动态展示JavaScript与jquery的对比

|                  |                    **JavaScript**                     |                      **jquery**                      |
| :--------------: | :---------------------------------------------------: | :--------------------------------------------------: |
|   **入口函数**   |       只能有一个，如果有多个，后面的会覆盖前面        |          可以有多个，并且不会发生覆盖的情况          |
|  **代码容错性**  | 代码容错性差，代码出现错误，会影响到后面代码的运行。  | 代码容错性好，屏蔽错误，并且不会影响后面代码的运行。 |
| **浏览器兼容性** |           兼容性差，比如火狐不支持innerText           |     对浏览器兼容性做了封装，因此不存在兼容性问题     |
|  **操作复杂性**  | DOM操作复杂，对于一些简单的动画效果，实现起来比较麻烦 |    DOM操作简单，支持隐式迭代，实现动画非常简单。     |

jQuery入口函数与js入口函数的对比：

1. JavaScript的入口函数要等到页面中所有资源（包括图片、文件）加载完成才开始执行。
2. jQuery的入口函数只会等待文档树加载完成就开始执行，并不会等待图片、文件的加载。

```
<script>
  //1.$是什么?
  //如果报了这个错误:$ is not defined,就说明没有引入jQuery文件.
  // $(function () {
  //
  // });


  //2.jQuery文件结构.
  //其实是一个自执行函数.
  // (function(){
  //   window.jQuery = window.$ = jQuery;
  // }());


  //3.
  //a.引入一个js文件,是会执行这js文件中的代码的.
  //console.log(num);//10
  //b.jQuery文件是一个自执行函数,执行这个jQUERY文件中的代码,其实就是执行这个自执行函数.
  //c.这个自执行文件就是给window对象添加一个jQuery属性和$属性.
  //console.log(window);
  //d.$其实和jQuery是等价的,是一个函数.

  // console.log(window.jQuery === window.$);//true
  // console.log(Object.prototype.toString.call($));//'[object Function]'


  //4.$是一个函数
  //参数传递不同,效果也不一样.
  //4.1 如果参数传递的是一个匿名函数-入口函数
  // $(function(){
  // });

  //4.2 如果参数传递的是一个字符串-选择器/创建一个标签
  //$('#one');
  //$('<div>啦啦,我是一个div</div>');

  //4.3 如果参数是一个dom对象,那他就会把dom对象转换成jQuery对象.
  //$(dom对象);

</script>

```

jq对象和dom对象(重要)

- DOM对象：使用JavaScript中的方法获取页面中的元素返回的对象就是dom对象。
- jQuery对象：jquery对象就是使用jquery的方法获取页面中的元素返回的对象就是jQuery对象。
- jQuery对象其实就是DOM对象的包装集包装了DOM对象的集合（伪数组）
- DOM对象与jQuery对象的方法不能混用。

DOM对象转换成jQuery对象：

```javascript
var $obj = $(domObj);
// $(document).ready(function(){});就是典型的DOM对象转jQuery对象
```

jQuery对象转换成DOM对象：

```javascript
var $li = $("li");
//第一种方法（推荐使用）
$li[0]
//第二种方法
$li.get(0)
```

- 第一种写法

  ```html
  <script>
  	$(document).ready(function () {
  		alert("hello lnj")
  	})
  </script>
  ```

  

- 第二种写法

  ```html
  <script> 
  	jQuery(document).ready(function () {
  		alert("hello lnj")
  	})
  </script>
  ```

  

- 第三种写法（**推荐**）

  ```html
  <script>
      $(function () {
      	alert("hello lnj")
      })
  </script>
  ```

  

- 第四种写法

  ```html
  <script>
      jQuery(function () {
      	alert("hello lnj")
      })
  </script>
  ```




#### 解决冲突问题

- 释放$的使用权
  -  注意点: 释放操作必须在编写其它jQuery代码之前编写
    - 释放之后就不能再使用$,改为使用jQuery
  -  jQuery原理.noConflict()

- 自定义一个访问符号

  

  ```html
  <script>
        var nj = jQuery.noConflict()
          nj(function () {
              alert("hello lnj")
          })
  </script>
  ```

## jquery选择器
### 什么是jQuery选择器
- jQuery选择器是jQuery为我们提供的一组方法，让我们更加方便的获取到页面中的元素。注意：jQuery选择器返回的是jQuery对象。
- jQuery选择器有很多，基本兼容了CSS1到CSS3所有的选择器，并且jQuery还添加了很多扩展性的选择器。【查看jQuery文档】
- jQuery选择器虽然很多，但是选择器之间可以相互替代，就是说获取一个元素，你会有很多种方法获取到。
所以我们平时真正能用到的只是少数的最常用的选择器。

### 基本选择器

<table>
<thead>
<tr>
<th>名称</th>
<th>用法</th>
<th align="left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>ID选择器</td>
<td>$(“#id”);</td>
<td align="left">获取指定ID的元素</td>
</tr>
<tr>
<td>类选择器</td>
<td>$(“.class”);</td>
<td align="left">获取同一类class的元素</td>
</tr>
<tr>
<td>标签选择器</td>
<td>$(“div”);</td>
<td align="left">获取同一类标签的所有元素</td>
</tr>
<tr>
<td>并集选择器</td>
<td>$(“div,p,li”);</td>
<td align="left">使用逗号分隔，只要符合条件之一就可。</td>
</tr>
<tr>
<td>交集选择器</td>
<td>$(“div.redClass”);</td>
<td align="left">获取class为redClass的div元素</td>
</tr>
</tbody>
</table>

> 总结：跟css的选择器用法一模一样。

### 层级选择器

| 名称       | 用法        | 描述                                                        |
| ---------- | ----------- | ----------------------------------------------------------- |
| 子代选择器 | $(“ul>li”); | 使用>号，获取儿子层级的元素，注意，并不会获取孙子层级的元素 |
| 后代选择器 | $(“ul li”); | 使用空格，代表后代选择器，获取ul下的所有li元素，包括孙子等  |

## 元素设置

### 样式设置

    /*1.设置一个样式*/
    //两个参数  设置的样式属性,具体样式
    $('li').css('color','red');
    //传入对象（设置的样式属性:具体样式）
    $('li').css({'color':'red'});
    /*2.设置多个样式*/
    $('li').css({
        'color':'green',
        'font-size':'20px'
    });
### 类名设置

    /*1.添加一个类*/
    $('li').addClass('now');
    /*2.删除一个类*/
    $('li').removeClass('now');
    /*3.切换一个类  有就删除没有就添加*/
    $('li').toggleClass('now');
    /*4.匹配一个类  判断是否包含某个类  如果包含返回true否知返回false*/
    $('li').hasClass('now');
## 什么是jquery对象？

- jquery对象就是使用jquery的方法获取页面中的元素返回的对象就是jQuery对象。比如使用$()方法返回对象都是jquery对象。

```javascript
    $("div");//标签选择器返回的jquery对象。
    $("#btnShowDiv");//id选择器返回的jquery对象。
```

jquery对象只能使用jquery对象的方法

```javascript
    var $obj = $("div");
    $obj.html("jquery对象设置文本的方法");
    $obj.show();//jquery对象显示文本
    $obj.click(function() {});//jquery对象绑定事件
```

错误的用法

```javascript
    $("div").innerHTML;//jquery对象不能调用dom方法
    //dom对象不能调用jquery方法。
    document.getElementById("btnShowDiv").show();
```

## 深入了解jQuery对象

- jQuery对象其实就是DOM对象的包装集（包装了DOM对象的集合）
  联想记忆：衣服和洗衣机的关系

## jQuery对象和DOM对象的相互转换

- 1. jquery对象转DOM对象

```javascript
    var $li = $("li");
    //第一种方法（推荐使用）
    $li[0]
    //第二种方法
    $li.get(0)
    //其实jQuery对象转DOM对象的实质就是取出jQuery对象中封装的DOM对象。
```

- 2. DOM对象转jquery对象（联想记忆：我有钱[美元]，所以我的功能就更强大）

```javascript
    var $obj = $(domObj);
    // $(document).ready(function(){});就是典型的DOM对象转jQuery对象
```



## jQuery操作属性

- **设置单个属性**

```javascript
    //第一个参数：需要设置的属性名
    //第二个参数：对应的属性值
    attr(name, value);
    //用法举例
    $("img").attr("title","哎哟，不错哦");
    $("img").attr("alt","哎哟，不错哦");
```

- **设置多个属性**

```javascript
    //参数是一个对象，包含了需要设置的属性名和属性值
    attr(obj)
    //用法举例
    $("img").attr({
        title:"哎哟，不错哦",
        alt:"哎哟，不错哦",
        style:"opacity:.5"
        });
```

- **获取属性**

```javascript
        //传需要获取的属性名称，返回对应的属性值
        attr(name)
        //用法举例
        var oTitle = $("img").attr("title");
        alert(oTitle);
```

- 注意：
  - 1.获取属性时，只会获取到第一个元素对应的属性，与css方法一样
  - 2.获取属性时，如果该属性不存在，那么会返回undefined
- **移除属性**

```javascript
    //参数：需要移除的属性名，如果传空，那么不会有任何操作，注意，并不是移除所有的属性。区分removeClass。
    removeAttr(name);
    //用法举例
    $("img").removeAttr("title");
```

- **prop**

注意：在jQuery1.6之后，对于checked、selected、disable这类boolean类型的属性来说，如果使用attr方法获取属性值，得到的不是true和false，而是checked以及undefined。，使用prop方法来获取或者设置checked、selected、disable这类的值。prop方法使用跟attr方法一样。

```javascript
    //设置属性
    $(":checked").prop("checked",true);
    //获取属性
    $(":checked").prop("checked");//返回true或者false
```

## jQuery操作值与内容

## val方法

- val方法用于设置和获取表单元素的值，例如input、select、textarea的值

```javascript
    //设置值
    $("#name").val("张三");
    //获取值
    $("#name").val();
```

## html方法

```javascript
//设置内容
    $("div").html("<span>这是一段内容</span>");
    //获取内容
    $("div").html()
```

## text方法

```javascript
    //设置内容
    $("div").text("<span>这是一段内容</span>");
    //获取内容
    $("div").text()
```

- html方法与text方法的区别：
  html方法会识别html标签，text方法会把内容直接当成字符串，并不会识别html标签。

## JQuery操作尺寸

## height

- 设置或者获取高度

```javascript
    //带参数表示设置高度
    $("img").height(200);
    //不带参数获取高度
    $("img").height();
```

返回值是number类型（比如200），而使用$(“img”).css(“width”)返回的是字符串（比如200px）

## width

- 设置获取获取宽度，与高度操作功能一样

```JavaScript
//带参数表示设置宽度
$("img").width(200);
//不带参数获取宽度
$("img").width();
```

## each方法
jQuery的隐式迭代会对所有的DOM对象设置相同的值，但是如果我们需要给每一个对象设置不同的值的时候，就需要自己进行迭代了。

作用：遍历jQuery对象集合，为每个匹配的元素执行一个函数

    // 参数一表示当前元素在所有匹配元素中的索引号
    // 参数二表示当前元素（DOM对象）
    $(selector).each(function(index,element){});















### 核心函数

### 静态方法

### jQuery对象

### jQuery插件

### 综合实战




