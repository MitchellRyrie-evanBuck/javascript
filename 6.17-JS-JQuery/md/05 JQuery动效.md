# jquery动画

通过下拉菜单引入动画。

jquery提供了三组动画，这些动画都是标准的、有规律的效果，jquery还提供了自定义动画的功能。

## 显示与隐藏

显示(show)与隐藏(hide)是一组动画：

### show方法详解：

```javascript
    show([speed], [callback]);
    //speed(可选)：动画的执行时间
    1.如果不传，就没有动画效果。
    2.毫秒值(比如1000),动画在1000毫秒执行完成(推荐)
    3.固定字符串，slow(200)、normal(400)、fast(600)，如果传其他字符串，则默认为normal。
    //callback(可选):执行完动画后执行的回调函数
```

### hide方法详解：

与show方法的用法完全一致。

show/hide：修改的是元素的width、height、opacity。

### 滑入与滑出

滑入(slideUp)与滑出(slideDown)是一组动画，效果与卷帘门类似
slideUp/slideDown,使用方法与show/hide基本一致。

```javascript
    slideUp(speed, callback);
    //speed(可选)：动画的执行时间
    1.如果不传，默认为normal，注意区分show/hide。
    2.毫秒值(比如1000),动画在1000毫秒执行完成(推荐)
    3.固定字符串，slow(200)、normal(400)、fast(600)
    //callback(可选):执行完动画后执行的回调函数
```

### 滑入滑出切换

```javascript
    $(selector).slideToggle(speed,callback);
    //如果是隐藏状态，那么执行slideDown操作，如果是显示状态，那么执行slideUp操作。
```

slideUp/slideDown：修改的是元素的height

### 淡入与淡出

> fadeIn/fadeOut使用方法与show/hide、slideDown/slideUp一致。

```javascript
    fadeIn(speed, callback);
    //speed(可选)：动画的执行时间
    1.如果不传，默认是normal。
    2.毫秒值(比如1000),动画在1000毫秒执行完成(推荐)
    3.固定字符串，slow(200)、normal(400)、fast(600)
    //callback(可选):执行完动画后执行的回调函数
```

### 淡入淡出切换：

```javascript
    fadeToggle(speed, callback);
    //如果当前元素处于隐藏状态，那么执行fadeIn操作，如果处于显示状态，那么执行fadeOut操作。
```

### 淡入淡出到某个值

与淡入淡出的区别：淡入淡出只能控制元素的不透明度从 完全不透明 到完全透明；而fadeTo可以指定元素不透明度的具体值。并且时间参数是必需的！

```javascript
    fadeTo(speed, value, callback)//可以设置具体的透明度
    //speed（必须）
    //value  0-1之间的数值(比如0.4)，表示淡到某一个值。
    //callback(可选) 回调函数
```

- fade系列方法：修改的是元素的opacity



- 1.jQuery给我们提供了三组动画，show/hide、slideUp/slideDown、fadeIn/fadeOut
- 2.动画切换方法：slideToggle、fadeToggle，注意：show和hide没有切换的方法。
- 3.淡入淡出到某个值：fadeTo方法。
- 4.show/slideDown/fadeIn三个是显示效果、hide/slideUp/fadeOut三个是隐藏效果。
- 5.show/hide修改的是元素的height,width,opacity。slide系列方法修改的是元素的height。fade系列方法修改的是元素的opacity。这三种方法修改的这些值，都是带数字的，因为带了数字才能做渐变。

## 自定义动画

### animate：自定义动画

```javascript
    $(selector).animate({params},[speed],[callback]);
    // {params}：要执行动画的CSS属性，带数字（必选）
    // speed：执行动画时长（可选）
    // callback：动画执行完后立即执行的回调函数（可选）
```

### 动画支持的属性 

#### 动画支持的属性：

```
http://www.w3school.com.cn/jquery/effect_animate.asp
```

##### easing参数

控制动画在不同元素的速度，默认为“swing”

“swing”：在开头和结尾移动慢，在中间移动速度快

“linear”：匀速移动

## 动画队列问题

引出事件队列效果

在同一个元素上执行多个动画，那么对于这个动画来说，后面的动画会被放到动画队列中，等前面的动画执行完成了才会执行（联想：地铁进站）。

## 停止动画

### stop方法：停止动画效果

```javascript
    stop(clearQueue, jumpToEnd);
    //第一个参数：是否清除队列
    //第二个参数：是否跳转到最终效果
```

**最常用的停止动画：stop();**

