# jQuery事件机制

> JavaScript中已经学习过了事件，但是jQuery对JavaScript事件进行了封装，增加并扩展了事件处理机制。jQuery不仅提供了更加优雅的事件处理语法，而且极大的增强了事件的处理能力。

## jQuery事件的发展历程

- 简单事件绑定>>bind事件绑定>>delegate事件绑定>>on事件绑定(推荐)

## 简单事件绑定

> click(handler)			单击事件
>
> mouseenter(handler)		鼠标进入事件
>
> mouseleave(handler)		鼠标离开事件
>
> scroll(handler)			滚动事件
>
> 缺点：一次只能绑定一个事件

## bind事件绑定

- 不推荐使用，jQuery1.7版本后被on取代

```javascript
    //绑定多个事件
    //第一个参数：事件类型
    //第二个参数：事件处理程序
    $("p").bind("click mouseenter", function(){
        //事件响应方法
    });
```

- 缺点：不支持动态创建出来的元素绑定事件。
- delegate事件绑定
  - 支持动态绑定事件

```javascript
    // 第一个参数：selector，要绑定事件的元素
    // 第二个参数：事件类型
    // 第三个参数：事件处理函数
    $(".parentBox").delegate("p", "click", function(){
        //为 .parentBox下面的所有的p标签绑定事件
    });
```

- 理解：为什么delegate支持动态绑定事件？原因是事件冒泡机制。因为事件时绑定到父元素上的，由子元素触发。

## on事件绑定

优势：最现代的方式，兼容zepto(移动端类似jQuery的一个库)，强烈建议使用。

```javascript
    // 第一个参数：events，绑定事件的名称可以是由空格分隔的多个事件（标准事件或者自定义事件）
    // 第二个参数：selector, 执行事件的后代元素（可选），如果没有后代元素，那么事件将有自己执行。
    // 第三个参数：data，传递给处理函数的数据，事件触发的时候通过event.data来使用（不常使用）
    // 第四个参数：handler，事件处理函数
    $(selector).on(events[,selector][,data],handler);

    例子：
    // 表示给$(selector)绑定代理事件，当必须是它的内部元素span才能触发这个事件，支持动态绑定
    $(selector).on( "click","span", function() {});
    // 表示给$(selector)绑定事件，并且由自己触发，不支持动态绑定（不使用代理）。
    $(selector).on( "click", function() {});
```

## 事件解绑

### unbind()方式（不用）

作用：解绑事件

```javascript
    $(selector).unbind(); //解绑所有的事件
    $(selector).unbind("click"); //解绑指定的事件
```

### undelegate() 方式（不用）

作用：解绑事件

```javascript
    $( selector ).undelegate(); //解绑所有的delegate事件
    $( selector).undelegate( "click" ); //解绑所有的click事件
```

### off方式（重点）

作用：解绑事件

```javascript
// 解绑匹配元素的所有事件
    $(selector).off();
    // 解绑匹配元素的所有click事件
    $(selector).off("click");
    // 解绑所有代理的click事件，元素本身的事件不会被解绑 
    $(selector).off( "click", "**" ); 
```

## 事件触发

- 简单事件触发

```javascript
    $(selector).click(); //触发 click事件
```

- trigger方法触发事件

```javascript
    $(selector).trigger("click");
```

- triggerHandler触发 事件响应方法，不触发浏览器行为

比如:文本框获得焦点的默认行为

```javascript
    $(selector).triggerHandler("focus");
```



# jQuery事件对象（）

| **对象属性**                | **解释**                                           |
| --------------------------- | -------------------------------------------------- |
| **event.type**              | 事件类型                                           |
| **event.data**              | 存储绑定事件时传递的附加数据                       |
| **event.target**            | 点了谁就是谁                                       |
| **event.currentTarget**     | 当前DOM元素，等同于this                            |
| **event.delegateTarget**    | 代理对象                                           |
| **screenX和screenY**        | 对应屏幕最左上角的值                               |
| **offsetX和offsetY**        | 点击的位置距离元素的左上角的位置                   |
| **clientX和clientY**        | 距离页面左上角的位置（忽视滚动条）                 |
| **ageX和pageY**             | 距离页面最顶部的左上角的位置（会计算滚动条的距离） |
| **event.witch**             | 鼠标按键类型，1=鼠标左键 2=鼠标中键 3=鼠标右键"    |
| **event.keyCode**           | 按下的键盘代码,                                    |
| **event.stopPropagation()** | 阻止事件冒泡行为                                   |
| **event.preventDefault()**  | 阻止浏览器默认行为                                 |
| **return false；**          |                                                    |





# 链式编程

- 链式编程原理：return this;
  通常情况下，只有设置操作才能把链式编程延续下去。因为获取操作的时候，会返回获取到的相应的值，无法返回 this。
- end(); // 筛选选择器会改变jQuery对象的DOM对象，想要回复到上一次的状态，并且返回匹配元素之前的状态。

