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

```
// 参数一表示当前元素在所有匹配元素中的索引号
// 参数二表示当前元素（DOM对象）
$(selector).each(function(index,element){});
```



# jQuery操作坐标值

## offset

- 设置或者获取元素相对于文档document的位置。

```javascript
    //设置位置
    $(selector).offset({left:100, top: 150});
    //获取位置
    $(selector).offset();
```

- 注意：使用offset操作，如果元素没有设置定位(默认position:static)，则会把position修改为relative.会修改left、top

## position

- 获取相对于其最近的有定位的父元素的位置。

```javascript
    // 获取，返回值为对象：{left:num, top:num}
    $(selector).position();
```

- 注意：position方法只能获取，不能设置
  ![NZnBFJ.png](https://s1.ax1x.com/2020/06/17/NZnBFJ.png)

## scrollTop

- 设置或者获取垂直滚动条的位置

```javascript
    // 有参数表示设置偏移，参数为数值类型
    $(selector).scrollTop(100);
    // 无参数表示获取偏移
    $(selector).scrollTop();
```

## scrollLeft

- 设置或者获取水平滚动条的位置

```javascript
    // 有参数表示设置偏移，参数为数值类型
    $(selector).scrollLeft(100);
    // 无参数表示获取偏移
    $(selector).scrollLeft();
```

















