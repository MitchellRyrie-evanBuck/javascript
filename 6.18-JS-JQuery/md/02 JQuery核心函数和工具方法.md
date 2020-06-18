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

```
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
```

### 类名设置

```
/*1.添加一个类*/
$('li').addClass('now');
/*2.删除一个类*/
$('li').removeClass('now');
/*3.切换一个类  有就删除没有就添加*/
$('li').toggleClass('now');
/*4.匹配一个类  判断是否包含某个类  如果包含返回true否知返回false*/
$('li').hasClass('now');
```

#### 静态方法

##### each和forEach

```js
<script>
    var arr = [1,3,5,7,9];
    var obj = {//伪数组
        0:1,
        1:2,
        2:3,
        3:4,
        length:4
    };
    arr.forEach(function(value,index){
        //原生js第一个参数为当前元素  第二个是当前索引 
        console.log(value,index);
    })
    // obj.forEach(function(value,index){
           //原生js的forEach不能遍历伪数组  就是说在原生js中只有真正的数组内才有forEach方法
    //     console.log(value,index);
    // })
    $.each(arr,function(index,value){
        //jQuery  第一个参数为要遍历的数组
        //第二个参数是个每遍历一个元素后执行的回调函数  
        //回调函数的参数第一个参数为当前索引  第二个是当前元素 
        console.log(index,value);
    });
    $.each(obj,function(index,value){
        //jQuery的each方法可以遍历伪数组
        console.log(index,value);
    });
</script>
```

##### 静态函数map方法

```js
<script>
    var arr = [1,3,5,7,9];
    var obj = {//伪数组
        0:1,
        1:2,
        2:3,
        3:4,
        length:4
    };
    arr.map(function(value,index,array){
        //第一个参数当前元素  第二个当前索引 第三个当前被被遍历的数组
        console.log(value,index,array);
    })
    // obj.map(function(value,index,array){
    //     //原生js的map不能遍历伪数组
    //     console.log(value,index,array);
    // })

    $.map(arr,function(index,value){
        //jQuery  第一个参数为要遍历的数组
        //第二个参数是个每遍历一个元素后执行的回调函数  
        //回调函数的参数第一个参数为当前索引  第二个是当前元素 
        console.log(index,value);
    });
    $.map(obj,function(index,value){
        //jQuery的map方法可以遍历伪数组
        console.log(index,value);
    });
</script>
```



##### each和map的区别

```js
<script>
    var arr = [1,3,5,7,9];
    var obj = {//伪数组
        0:1,
        1:2,
        2:3,
        3:4,
        length:4
    };
    var res = $.map(obj,function(index,value){
        //jQuery的map方法可以遍历伪数组
        console.log(index,value);
    });
    var res2 = $.each(obj,function(index,value){
        //jQuery的each方法可以遍历伪数组
        console.log(index,value);
    });
    console.log(res);
    console.log(res2);
    //区别
    //each静态方法的返回值就是遍历谁返回谁  不支持在回调函数中用return 不支持在回调函数中对遍历的数组进行处理
    //map静态方法的返回值默认是空数组   支持在回调函数中用return  支持在回调函数中通过return对遍历的数组进行处理 返回新生成的数组
</script>
```

##### 静态方法holdReady

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<script src="../jQuery/jquery-1.12.4.js"></script><!-- 引入jQuery库 -->
<script>
    $.holdReady(true);//jQuery中的holdReady的作用：在括号内为true时 暂停ready执行 就是暂停入口函数  
    $(document).ready(function () {
        alert('ready')
    })
</script>
<body>
    <button>ready</button>
</body>
<script>
    var btn = document.getElementsByTagName('button')[0];
    btn.onclick = function () {
        $.holdReady(false);//括号传入false就是恢复入口函数的执行
    }
</script>
</html>
```



##### jQuery中其他静态方法

```js
<script>
    var fn = function(){};//函数
    var w = window;//window对象
    var arr = [1,3,5,7,9];//数组
    var arrlike = {//伪数组
        0:1,
        1:2,
        2:3,
        3:4,
        length:4
    };
    var obj = {//对象
        'name':'inj',
        age:'33'
    }
   
    //trim   trim是jQuery中用于去除字符串中空格的方法 括号内传入需要处理的字符串 处理完后会返回处理后的字符串
    var str = ' lnj ';
    var str = $.trim(str);  
    console.log('-----' + str + '-----');

    //isWindow  判断传入的对象是不是window 返回值为布尔值 true就是window false就不是
    console.log($.isWindow(arr));
    console.log($.isWindow(arrlike));
    console.log($.isWindow(obj));
    console.log($.isWindow(fn));
    console.log($.isWindow(w));

    //isArray  判断传入的是不是真的是数组  返回值为布尔值 true就是真数组 false就不是(伪数组也是false)
    console.log($.isArray(arr));
    console.log($.isArray(arrlike));
    console.log($.isArray(obj));
    console.log($.isArray(fn));
    console.log($.isArray(w));

    //isFunction  同上 用于判断函数  注意jQuery的本质是个函数 所有isFunction判断jQuery为true
    //jQuery的所有内容都是包含在一个匿名函数中的
    console.log($.isFunction(fn));
    console.log($.isFunction(w));
</script>
```



# jQuery操作样式

## css操作

- 功能：设置或者修改样式，操作的是style属性

### 设置单个样式

```javascript
    //name：需要设置的样式名称
    //value：对应的样式值
    css(name, value);
    //使用案例
    $("#one").css("background","gray");//将背景色修改为灰色
```

### 设置多个样式

```javascript
    //参数是一个对象，对象中包含了需要设置的样式名和样式值
    css(obj);
    //使用案例
    $("#one").css({
        "background":"gray",
        "width":"400px",
        "height":"200px"
    });
```

### 获取样式

```javascript
    //name:需要获取的样式名称
    css(name);
    //案例
    $("div").css("background-color");
```

- 注意：获取样式操作只会返回第一个元素对应的样式值。

## class操作

### 添加样式类

```javascript
    //name：需要添加的样式类名，注意参数不要带点.
    addClass(name);
    //例子,给所有的div添加one的样式。
    $("div").addClass("one");
```

### 移除所有样式类

```javascript
    //不带参数，移除所有的样式类
    removeClass()
    //例子，移除div所有的样式类
    $("div").removeClass();
```

### 移除单个样式类

```javascript
    //name:需要移除的样式类名
    removeClass("name");
    //例子，移除div中one的样式类名
    $("div").removeClass("one");
```

### 判断是否有样式类

```javascript
    //name:用于判断的样式类名，返回值为true false
    hasClass(name)
    //例子，判断第一个div是否有one的样式类
    $("div").hasClass("one");
```

### 切换样式类

```javascript
    //name:需要切换的样式类名，如果有，移除该样式，如果没有，添加该样式。
    toggleClass(name);
    //例子
    $("div").toggleClass("one");
```

- 经验总结：

1.如果操作到的样式非常少，可以考虑css方法

2.如果操作到的样式非常多，那么可以通过class方法来操作，将样式写到一个class类里面。

3.如果考虑到后期维护方便，将css从js中分离出来，那么推荐使用class的方式来操作。



