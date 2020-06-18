# jquery操作DOM(节点)

## 创建元素

```javascript
    //$(htmlStr)
    //htmlStr：html格式的字符串
    $(“<span>这是一个span元素</span>”);
```

## 添加元素

### 添加新建的元素

```javascript
    //方法一：将jQuery对象添加到调用者内部的最后面。 
    var $span = $(“<span>这是一个span元素</span>”);
    $(“div”).append($span);

    //方法二：参数传字符串，会自动创建成jquery对象
    $(“div”).append(“<span>这是一个span元素</span>”);
```

### 添加已经存在的元素

```javascript
    var $p = $(“p”);
    $(“div”).append($p);
    //注意：如果添加的是已经存在的元素，那么会把之前的元素给干掉。（类似于剪切的功能）。
```

类似的用法：append  prepend  after before

### 使用html方法创建元素

```javascript
    //设置内容
    $(“div”).html(“<span>这是一段内容</span>”);
    //获取内容
    $(“div”).html()
```

### 清空元素

empty：清空指定节点的所有元素，自身保留(清理门户)

```javascript
    $(“div”).empty();//清空div的所有内容（推荐使用，会清除子元素上绑定的内容，源码）
```

### 清空元素的第二种方法

```javascript
    $(“div”).html(“”);//使用html方法来清空元素，不推荐使用，会造成内存泄漏，绑定的事件不会被清除。
```

### 删除元素

- remove：相比于empty，自身也删除（自杀）

```javascript
    $(“div”).remove();
```

### 克隆元素

- 作用：复制匹配的元素

```javascript
    // 复制$(selector)所匹配到的元素（深度复制）
    //cloneNode(true)
    // 返回值为复制的新元素，和原来的元素没有任何关系了。即修改新元素，不会影响到原来的元素。
    $(selector).clone();
```