# 引用类型概述

**导读**：本小节讲解 JavaScript 语言中的引用类型，其中包含了引用类型的概念、与其他概念之间的关系、引用类型的分类，以及 Global 类型等内容。

## 什么是引用类型

JavaScript 语言中的引用类型是一种数据结构，用来将数据和功能集中在一起，这种一般情况称为**类**。但是，在 ECMA-262 第 5 版本以及之前版本中是不存在类和接口等概念的。因为 JavaScript 语言并不是一种基于类的面向对象语言，而是基于原型的面向对象语言。

> **说明**：在 ECMA-262 第 2015 版本之后才提供了类和接口等概念以及语法结构。

例如之前我们已经掌握的数组内容，创建的每一个数组都是 Array 类型的对象。数组可以用来存储数据，Array 类型同时提供了一系列属性和方法来完成某些功能，所以说引用类型将数据和功能集中在一起。

引用类型和类比较相似的一点是它们都可以用来创建一个该类型的对象，如下示例代码所示：

```javascript
var obj = new Object()
javascript
```

上述示例代码创建了一个 Object 类型的 obj 对象。obj 对象就可以说是 Object 类型的一个**实例**，Object 也可以称为**构造函数**。

## 引用类型分类

JavaScript 语言预定义了很多引用类型，这些引用提供了一系列的属性和方法，我们使用这些引用类型可以完成很多功能。如下表所示展示了 JavaScript 语言中的引用类型：

| 引用类型      | 描述                                                         |
| :------------ | :----------------------------------------------------------- |
| Date 类型     | 获取和设置当前日期时间                                       |
| Math 类型     | 用于数学计算                                                 |
| Global 类型   | 全局对象，提供全局属性和全局方法                             |
| Array 类型    | 用于有序的存储多个值                                         |
| RegExp 类型   | 用于对字符串模式匹配及检索替换，是对字符串执行模式匹配的强大工具 |
| Error 类型    | 用于匹配代码错误并提供对应提示内容                           |
| Function 类型 | 用于定义 JavaScript 中的函数                                 |
| Object 类型   | 用于定义 JavaScript 中的对象                                 |

当然，除了上述表中的引用类型之外，我们已经掌握了的引用类型还有 Boolean 类型、Number 类型和 String 类型。

## Global 类型

Global 对象译为全局对象，是 JavaScript 语言中最为特殊的一个对象。之所以这么说，是因为我们不能像其他引用类型一样直接使用 Global 对象的。

如下示例代码展示了直接打印 Array 类型的情况：

```javascript
console.log(Array)
javascript
```

上述示例代码的运行效果如下图所示：

![0101.png](http://changetm.oss-cn-beijing.aliyuncs.com/Temp/0af6f9c8-98b7-4ecb-b364-bdd96388dfc6.png)

如上图的结果所示，我们可以看到打印 Array 类型得到的结果为 `Array(){ [native code] }`，其中 `native code` 表示 JavaScript 语言的原生代码，默认情况下是不允许查看的。

如下示例代码展示了直接打印 Global 类型的情况：

```javascript
console.log(Global)
javascript
```

上述示例代码的运行效果如下图所示：

![0102.png](http://changetm.oss-cn-beijing.aliyuncs.com/Temp/1af7d912-c535-470e-994a-af5da65bfcde.png)

之所以不能直接访问 Global 对象的原因在于，在不同的宿主环境中 Global 对象的具体表现是不同。我们以如下 2 种宿主环境为例来讲解：

- Node.js 运行环境：Node.js API 提供了一个全局对象为 global 对象。
- 浏览器运行环境：BOM 提供了一个全局对象为 window 对象。

如下示例代码展示了 Node.js 运行环境中的全局对象：

```javascript
console.log(global)
javascript
```

上述示例代码的运行效果如下图所示：

![0103.png](http://changetm.oss-cn-beijing.aliyuncs.com/Temp/78a00f5e-34e7-4d47-9c12-8b063a97b65b.png)

如下示例代码展示了浏览器运行环境中的全局对象：

```javascript
console.log(window)
javascript
```

上述示例代码的运行效果如下图所示：

![0104.png](http://changetm.oss-cn-beijing.aliyuncs.com/Temp/e1a41d68-d1af-414b-bf59-a16d8388864d.png)

### 全局对象的属性

一些我们之前已经掌握了的特殊值，实际上是 Global 对象的属性，如下表所示：

| 属性名称  | 描述             |
| :-------- | :--------------- |
| Infinity  | 正的无穷大的数值 |
| NaN       | 某个值不是数字值 |
| undefined | 未定义的值       |

上述这些全局属性，在 JavaScript 语言中的任何位置都可以直接使用。

### 全局对象的方法

我们之前已经掌握了的预定义函数，实际上同样是 Global 对象的方法，如下表所示：

| 函数         | 描述                                                      |
| :----------- | :-------------------------------------------------------- |
| eval()       | 对一串字符串形式的JavaScript代码字符求值                  |
| uneval()     | 创建的一个Object的源代码的字符串表示                      |
| isFinite()   | 判断传入的值是否是有限的数值                              |
| isNaN()      | 判断一个值是否不是数字值                                  |
| parseInt()   | 解析字符串参数，并返回指定的整数                          |
| parseFloat() | 解析字符串参数，并返回一个浮点数                          |
| decodeURI()  | 对已编码的统一资源标识符(URI)进行解码，并返回其非编码形式 |
| encodeURI()  | 对统一资源标识符(URI)进行编码，并返回编码后的URI字符串    |

上述这些全局方法，在 JavaScript 语言中的任何位置都可以直接使用。





# Date类型

**导读**：本小节讲解 JavaScript 语言中的 Date 类型，其中包含了什么是 Date 类型、如何创建 Date 对象，以及如何获取、设置和格式化日期和时间等内容。

## 什么是 Date 类型

JavaScript 语言的 Date 类型是在早期 Java 语言中的 java.util.date  类的基础上构建的。所以，JavaScript 语言中的 Date 类型同样使用自 UTC（Coordinated Universal  Time，国际协调时间）1970 年 1 月 1 日 零时开始的毫秒数来保存日期的。

Date 类型的范围是相对距离 UTC 1970 年 1 月 1 日的前后 100,000,000 天。如下示例代码展示了通过 Date 类型获取当前的系统时间：

```javascript
console.log(Date())
javascript
```

上述示例代码的运行效果如下图所示：

![0201.png](http://changetm.oss-cn-beijing.aliyuncs.com/Temp/0235cda8-8a9b-41f6-b1c1-a93e6126d7ea.png)

> **说明**：上述示例代码不需要掌握，仅做展示作用。

## 创建 Date 对象

JavaScript 语言中的 Date 类型提供了一系列的属性和方法允许我们可以在开发中获取、设置以及格式化日期，但这一切都需要创建一个 Date 类型的对象来实现。

创建一个 Date 类型的对象，可以有如下 3 种方式：

- 初始化为当前系统时间
- 初始化为指定的年月日
- 初始化为距离 1970 年1月1日指定毫秒数的时间

### 初始化为当前系统时间

JavaScript 语言中的 Date 类型不仅是一个构造函数，还是一个函数。所以，既可以通过 Date 创建一个对象，也可以直接调用 `Date()` 函数。

如下示例代码展示了如何通过 Date 类型初始化时间为当前系统时间：

```javascript
var date1 = new Date()
var date2 = new Date
var date3 = Date()

console.log('new Date()初始化时间为: ' + date1)
console.log('new Date初始化时间为: ' + date2)
console.log('Date()初始化时间为: ' + date3)
javascript
```

上述示例代码的运行效果如下图所示：

![0202.png](http://changetm.oss-cn-beijing.aliyuncs.com/Temp/557fe49f-3768-400a-9b6f-ddc0f4eb8943.png)

如上图的结果所示，我们可以看到上述示例代码中 3 种方式初始化的时间是一致的。除此之外，还有 Date 类型提供了 `now()` 方法可以得到一个从 1970 年1月1日 00:00:00 至当前系统时间的毫秒数值。如下示例代码所示：

```javascript
console.log(Date.now())
javascript
```

上述示例代码的运行效果如下图所示：

![0203.png](http://changetm.oss-cn-beijing.aliyuncs.com/Temp/78563848-24af-49cf-85a8-0b0a792fa2ba.png)

### 初始化为指定的年月日

通过 Date 类型初始化时间为指定的年月日可以将年、月、日、小时、分和秒等信息作为参数传递给 Date，如下语法结构所示：

```javascript
var date = new Date(year, month [, day [, hours [, minutes [, seconds [, milliseconds]]]]])
javascript
```

- year 参数：表示年份的整数值。
- month 参数：表示月份的整数值。值范围为 0 ~ 11，表示从 1 月至 12 月。
- day 参数：表示一个月份中的第几天的整数值。值从 1 开始。
- hours 参数：表示一天中的小时数（24 小时制）。0 时表示午夜。
- minutes 参数：表示一个完整时间（如 01:10:00）中的分钟部分的整数值。默认值为 0。
- seconds 参数：表示一个完整时间（如 01:10:00）中的秒部分的整数值。默认值为 0。
- milliseconds 参数：表示一个完整时间的毫秒部分的整数值。默认值为 0。

根据上述语法结构，如下示例代码展示了如何创建一个指定年月日的 Date 对象：

```javascript
var date1 = new Date(2008, 7, 8)
var date2 = new Date(2008, 7, 8, 20, 18, 18)

console.log(date1)
console.log(date2)
javascript
```

上述示例代码的运行效果如下图所示：

![0204.png](http://changetm.oss-cn-beijing.aliyuncs.com/Temp/f0f464c2-122b-4230-8c8e-a487e9b01e9c.png)

除了上述方式之外，Date 类型还可以接收一个 String 类型的日期格式的信息，Date 构造函数是可以将其进行解析的。如下语法结构所示：

```javascript
var date = new Date(dateString)
javascript
```

- dateString 参数：表示日期的字符串。

根据上述语法结构，如下示例代码展示了如何创建一个指定年月日的 Date 对象：

```javascript
var date = new Date('2008/8/8')
console.log(date)
javascript
```

上述示例代码的运行效果如下图所示：

![0205.png](http://changetm.oss-cn-beijing.aliyuncs.com/Temp/f7f980fa-6dc3-471d-885a-0bad6c1d016e.png)

### 初始化为指定毫秒数

通过 Date 类型除了可以初始化指定为年月日之外，还可以初始化为毫秒数的。其语法结构如下：

```javascript
var date = new Date(value)
javascript
```

- value 参数：一个整数值，表示自 1970 年 1 月 1 日 00:00:00 以来的毫秒数。

根据上述语法结构，如下示例代码展示了如何创建一个指定毫秒数的 Date 对象：

```javascript
var date1 = new Date(0);
var date2 = new Date(1000*3600*24*365); 

console.log(date1)
console.log(date2)
javascript
```

上述示例代码的运行效果如下图所示：

![0206.png](http://changetm.oss-cn-beijing.aliyuncs.com/Temp/c2a4f05a-21db-4e9d-b5cc-7c8adb4388f8.png)

## 获取日期方法

Date 类型提供了一系列方法用来获取日期和时间，具体方法如下表所示：

| 方法              | 描述                                                         |
| :---------------- | :----------------------------------------------------------- |
| getDate()         | 返回 Date 对象“日期”部分数值（1 ~ 31）                       |
| getDay()          | 返回 Date 对象“星期”部分的数值（0 ~ 6）                      |
| getFullYear()     | 返回 Date 对象“年份”部分的实际数值                           |
| getHours()        | 返回 Date 对象“小时”部分的数值（0 ~ 23）                     |
| getMilliseconds() | 返回 Date 对象“毫秒”部分的数值（0 ~ 999）                    |
| getMinutes()      | 返回 Date 对象“分钟”部分的数值（0 ~ 59）                     |
| getMonth()        | 返回 Date 对象“月份”部分的数值（0 ~ 11）                     |
| getSeconds()      | 返回 Date 对象“秒”部分的数值（0 ~ 59）                       |
| getTime()         | 返回 Date 对象与 UTC 时间 1970 年 1 月 1 日午夜之间相差的毫秒数 |

### 获取日期

Date 类型获取日期信息提供了 2 个方法，如下所示：

- `getDate()` 方法：该方法是用来获取一个月中的第几天，值的范围为 1 ~ 31。
- `getDay()` 方法：该方法时用来获取一个星期中的第几天，值的范围为 0 ~ 6。

上述这 2 两个方法都是用来获取日期，不过一个是一个月中的第几天，一个是一个星期中的第几天。如下示例代码所示：

```javascript
var date = new Date().getDate()
var day = new Date().getDay()

console.log('今天是这个月的第 ' + date + ' 天，这个星期的第 ' + day + ' 天')
javascript
```

上述示例代码的运行效果如下图所示：

![0207.png](http://changetm.oss-cn-beijing.aliyuncs.com/Temp/ed0e10b7-06ce-4e56-8f65-e23858ae29f2.png)

值得注意的是，`getDay()` 方法得到的值范围为 0 ~ 6，所以这里显示的 `第 1 天`，实际上是第 2 天。而我在测试这段代码时是星期一，那么也就是说，`getDay()` 这个方法是以星期天开始计算的。

### 获取年份

Date 类型获取年份信息可以通过 `getFullYear()` 方法实现，如下示例代码所示：

```javascript
var year = new Date().getFullYear()
console.log(year)
javascript
```

上述示例代码的运行效果如下图所示：

![0208.png](http://changetm.oss-cn-beijing.aliyuncs.com/Temp/2c5f61f8-130f-4d0a-9b50-bd20497a7df0.png)

除了 `getFullYear()` 方法之外，Date 类型还提供了 `getYear()` 方法，该方法同样可以获取年份信息。如下示例代码所示：

```javascript
console.log(new Date().getYear())
javascript
```

上述示例代码的运行效果如下图所示：

![0209.png](http://changetm.oss-cn-beijing.aliyuncs.com/Temp/73b843aa-3411-4961-bce4-009cdede62ea.png)

如上图的结果所示，`getYear()` 方法得到的是距离 1900 年的年份信息。例如我在测试这段代码时是 2019 年，所以 `2019 - 1900` 得到的结果为 119。

值得注意的是，`getYear()` 方法已经从 EMCA-262 标准规范中删除。也就是说，将来的某一天可能 JavaScript 语言的宿主环境不会再支持。建议不要使用！

### 获取毫秒数

Date 类型提供的一系列获取日期和时间的方法中，`getTime()` 方法算是一个比较特殊的方法。原因在于 `getTime()` 方法是用来获取距离 1970 年 1 月 1 日 00:00:00 的毫秒数值。如下示例代码所示：

```javascript
console.log(new Date().getTime())
javascript
```

上述示例代码的运行效果如下图所示：

![0210.png](http://changetm.oss-cn-beijing.aliyuncs.com/Temp/24738e0b-9e7a-4c1d-993c-21857c72092a.png)

由于 `getTime()` 方法得到的是毫秒数，所以该方法经常用来做时间戳。所谓的时间戳，就是指一个能表示一份数据是在某个特定时间之前已经存在的、 完整的、 可验证的数据。时间戳通常是一个字符序列，唯一地标识某一刻的时间。

Date 类型提供的方法中，可以用来做时间戳的方法有 2 个，如下所示：

- `getTime()` 方法
- `Date.now()` 方法

## 设置日期方法

Date 类型除了提供了一系列获取日期和时间的方法之外，同样提供了一系列设置日期和时间的方法，如下表所示：

| 方法              | 描述                                                       |
| :---------------- | :--------------------------------------------------------- |
| setDate()         | 设置 Date 对象中“日期”部分的数值（1 ~ 31）                 |
| setFullYear()     | 设置 Date 对象中“年份”部分的实际数值                       |
| setHours()        | 设置 Date 对象中“小时”部分的数值（0 ~ 23）                 |
| setMilliseconds() | 设置 Date 对象中“毫秒”部分的数值（0 ~ 999）                |
| setMinutes()      | 设置 Date 对象中“分钟”部分的数值（0 ~ 59）                 |
| setMonth()        | 设置 Date 对象中“月份”部分的数值（0 ~ 11）                 |
| setSeconds()      | 设置 Date 对象中“秒”部分的数值（0 ~ 59）                   |
| setTime()         | 通过距离 1970 年 1 月 1 日 00:00:00 的毫秒是设置 Date 对象 |

如下示例代码展示了以 `setDate()` 方法为例的一系列设置日期和时间的方法的用法：

```javascript
var date = new Date()
console.log('当前时间: ' + date)

date.setDate(24)
console.log('修改后的时间: ' + date)
javascript
```

上述示例代码的运行效果如下图所示：

![0211.png](http://changetm.oss-cn-beijing.aliyuncs.com/Temp/a6987707-544f-4088-8102-aa3db4f5bc7f.png)

## 日期格式化方法

Date 类型除了提供了获取和设置日期和时间的一系列方法之外，还提供了将日期和时间格式化指定格式的一系列方法。如下表所示：

| 方法                 | 描述                                                         |
| :------------------- | :----------------------------------------------------------- |
| toString()           | 返回 Date 对象的字符串形式                                   |
| toDateString()       | 返回 Date 对象“日期”部分（*年月日*）的字符串形式             |
| toTimeString()       | 返回 Date 对象“时间”部分（*时分秒*）的字符串形式             |
| toLocaleString()     | 基于本地时间格式，返回 Date 对象的字符串形式                 |
| toLocaleDateString() | 基于本地时间格式，返回 Date 对象“ 日期”部分（*年月日*）的字符串形式 |
| toLocaleTimeString() | 基于本地时间格式，返回 Date 对象“时间”部分（*时分秒*）的字符串形式 |
| toGMTString()        | 基于 GMT 时间格式，返回 Date 对象的字符串形式                |
| toUTCString()        | 基于 UTC 时间格式，返回 Date 对象的字符串形式                |

如下示例代码展示了以 `toString()` 方法为例的一系列格式化日期和时间的方法的用法：

```javascript
var date = new Date().toString()
console.log('toString()方法得到的时间为:'+ date + ',类型为: ' + typeof date)
javascript
```

上述示例代码的运行效果如下图所示：

![0212.png](http://changetm.oss-cn-beijing.aliyuncs.com/Temp/e59fb1aa-cf8c-4c6f-8f22-712d7ea5c972.png)

## 



# Math类型

**导读**：本小节讲解 JavaScript 语言中的 Math 类型，其中包含了 Math 类型的作用、需要注意的事项，以及 Math 类型提供的属性和方法的作用和用法等内容。

## 什么是 Math 类型

JavaScript 语言中的 Math 类型，提供了一系列有关数学常数的属性和数学计算的方法。Math 类型与 JavaScript  语言中的其他引用类型不同的是，Math 并不是一个构造函数。换句话讲，我们无法通过 Math 类型创建一个对象。如下示例代码所示：

```javascript
var math = new Math()
javascript
```

上述示例代码的运行效果如下图所示：

![0301.png](http://changetm.oss-cn-beijing.aliyuncs.com/Temp/25254757-89b8-4b1b-aeec-021823b5f38d.png)

如上图的结果所示，我们可以看到当通过 `new Math()` 来创建一个对象时，JavaScript 语言报错为 `Math is not a constructor` 表示 Math 类型并不是一个构造函数。

而 Math 类型提供的属性和方法都是静态的。也就是说，我们可以通过 Math 类型直接调用即可。例如访问 Math 类型的 PI 属性的话，则为 `Math.PI` 即可。

## Math 类型的属性

Math 类型提供了有关数学常数的一系列属性，具体如下表所示：

| 属性           | 描述                                           |
| :------------- | :--------------------------------------------- |
| `Math.E`       | 欧拉常数，自然对数的底数, 约等于 2.718         |
| `Math.LN2`     | 2 的自然对数, 约等于 0.693                     |
| `Math.LN10`    | 10 的自然对数, 约等于 2.303                    |
| `Math.LOG2E`   | 以 2 为底 E 的对数, 约等于 1.443               |
| `Math.LOG10E`  | 以 10 为底 E 的对数, 约等于 0.434              |
| `Math.PI`      | 圆周率，一个圆的周长和直径之比，约等于 3.14159 |
| `Math.SQRT1_2` | 1/2 的平方根, 约等于 0.707                     |
| `Math.SORT2`   | 2 的平方根,约等于 1.414                        |

值得注意的是，上述 Math 类型提供的一系列属性都是只读属性，不能修改。如下示例代码所示：

```javascript
Math.PI = Math.PI - 3
console.log(Math.PI)
javascript
```

上述示例代码的运行效果如下图所示：

![0302.png](http://changetm.oss-cn-beijing.aliyuncs.com/Temp/eafa7210-962c-431f-bc5d-9b51b93ccd5d.png)

如上图的结果所示，我们可以看到当执行 `Math.PI = Math.PI - 3` 时，JavaScript 语言并没有进行报错。但最终打印 `Math.PI` 属性的值时，`Math.PI` 属性值依旧为 3.1415926。

## Math 类型的方法

Math 类型提供了用于数学计算的一系列方法，如下表所示：

| 方法      | 描述                       |
| :-------- | :------------------------- |
| abs(x)    | 返回 x 的绝对值            |
| exp(x)    | 返回 e 的指数              |
| log(x)    | 返回数的自然对数（底为 e） |
| pow(x, y) | 返回 x 的 y 次幂           |
| ceil(x)   | 对数进行向上取整           |
| floor(x)  | 对数进行向下取整           |
| round(x)  | 把数四舍五入为最接近的整数 |
| max(x, y) | 返回 x 和 y 中的最高值     |
| min(x, y) | 返回 x 和 y 中的最低值     |

如下示例代码以 `max()` 方法为例展示了上述 Math 类型提供的方法的用法：

```javascript
console.log('1和2之间的最大值为: ' + Math.max(1, 2))
javascript
```

上述示例代码的运行效果如下图所示：

![0303.png](http://changetm.oss-cn-beijing.aliyuncs.com/Temp/6eabf0cf-9d5b-430d-a746-08f5775eef32.png)

### 三角函数

Math 类型除了提供了一系列用于数学计算的方法之外，还提供了一系列有关三角函数的方法。如下表所示：

| 方法     | 描述                                                        |
| :------- | :---------------------------------------------------------- |
| cos(x)   | 返回数的余弦                                                |
| sin(x)   | 返回数的正弦                                                |
| tan(x)   | 返回角的正切                                                |
| acos(x)  | 返回数的反余弦值                                            |
| asin(x)  | 返回数的反正弦值                                            |
| atan(x)  | 以介于 -PI/2 与 PI/2 弧度之间的数值来返回 x 的反正切值      |
| atan2(x) | 返回从 x 轴到点 (x,y) 的角度（介于 -PI/2 与 PI/2 弧度之间） |

需要注意的是，上述三角函数的计算结果是以弧度为返回值的。也就是说，我们需要通过 `Math.PI/180` 方式将弧度转换为角度再进行计算。

### 生成随机数

Math 类型提供了 `random()` 方法专门用来生成一个值范围为 0 ~ 1 之间的伪随机数。生成的这个随机数是包含 0 但不包含 1 的。

如下示例代码展示了 Math 类型的 `random()` 方法的用法：

```javascript
console.log(Math.random())
javascript
```

上述示例代码的运行效果如下图所示：

![0304.png](http://changetm.oss-cn-beijing.aliyuncs.com/Temp/305a6a96-45ce-4a2a-a19b-0752e564f356.png)

上述示例代码，你可以尝试多运行几次，会发现每一次得到的数字值都是不一样的。





# Array类型

**导读**：本小节讲解 JavaScript 语言中的 Array 类型，其中包含了创建数组与创建基本数据类型之间的区别，以及 Array 类型提供的一系列操作数组的方法等内容。

## 什么是 Array 类型

JavaScript 语言中的 Array 类型提供了一系列用来操作数组的属性和方法，例如我们已经掌握的 length 属性等。数组可以划分为一维数组和多维数组，比较常见的多维数组是二维数组，简单来说就是数组嵌套的数组。

无论是一维数组还是二维数组，都是可以直接使用 Array 类型提供的属性和方法的。但我们需要注意的是创建数组的几种方式，如下示例代码所示：

```javascript
//字面量方式创建数组
var arr1 = [1,2,3,4,5]
//构造函数方式创建数组
var arr2 = new Array([1,2,3,4,5])
javascript
```

无论使用哪一种方式创建数组，它们都是 Array 类型的。这一点需要和 JavaScript 语言的基本数据类型进行区分，因为基本数据类型的创建变量方式类似。如下示例代码所示：

```javascript
//字面量方式创建字符串
var str1 = '这是一个字符串.'
//构造函数方式创建字符串
var str2 = new String('这是一个字符串.')
javascript
```

如上示例代码所示，基本数据类型的两种方式创建变量，得到的结果并不一致。上述示例代码使用字面量方式创建的字符串是 string 类型，而使用构造函数方式创建的字符串是 String 类型。

Array 类型提供的比较常见的数组操作如下列表所示：

- 检测数组
- 转换方法
- 进出栈方法
- 队列方法
- 排序方法
- 连接方法
- 操作方法
- 位置方法
- 递归方法
- 归并方法

## 检测数组

在操作数组之前，如果可以先确定操作的一定是数组的话，会减少很多不必要的错误。之前我们已经掌握的判断数据类型的方式是利用 typeof 或者  instanceof 运算符实现。但 typeof 运算符只能判断出 JavaScript 语言中的基本数据类型，Array 是引用类型，通过  typeof 运算符只能得到 object 的结果。如下示例代码所示：

```javascript
console.log(typeof [1,2,3,4,5])
javascript
```

上述示例代码的运行效果如下图所示：

![0401.png](http://changetm.oss-cn-beijing.aliyuncs.com/Temp/0f9e8e0d-921b-4399-854d-355149210049.png)

所以，使用 instanceof 运算符来判断是否为 Array 类型相较 typeof 运算符更为准确。如下示例代码所示：

```javascript
console.log([1,2,3,4,5] instanceof Array)
javascript
```

上述示例代码的运行效果如下图所示：

![0402.png](http://changetm.oss-cn-beijing.aliyuncs.com/Temp/4cc410cb-eae6-47c1-9886-192bcc203f08.png)

除了使用 instanceof 运算符来判断是否为数组之外，ECMA-262 第 5 版本为 Array 类型新增了 `isArray()` 方法，该方法用来判断当前变量是否为一个数组。如下示例代码所示：

```javascript
console.log(Array.isArray([1,2,3,4,5]))
javascript
```

上述示例代码的运行效果如下图所示：

![0403.png](http://changetm.oss-cn-beijing.aliyuncs.com/Temp/ee438922-31ab-4690-9c23-03472caf5068.png)

支持 `Array.isArray()` 方法的浏览器有 IE9+、Firefox 4+、Safari 5+、Opera 10.5+ 和 Chrome。换句话讲，还有一些浏览器版本是不支持 `Array.isArray()` 方法的。在这些不支持 `Array.isArray()` 方法的浏览器中，我们可以使用 `Object.prototype.toString.call()` 方法来替代。如下示例代码所示：

```javascript
console.log(Object.prototype.toString.call([1,2,3,4,5]))
javascript
```

上述示例代码的运行效果如下图所示：

![0404.png](http://changetm.oss-cn-beijing.aliyuncs.com/Temp/26928ffd-62d9-48fc-b25f-7ac5504fe422.png)

如上图的结果所示，使用 `Object.prototype.toString.call()` 方法判断是否为数组时，如果为数组得到的结果始终为 `[object Array]`。那么我们就可以通过该方法来自定义一个 `isArray()` 函数用来判断是否为数组，如下示例代码所示：

```javascript
function isArray(value){
	return Object.prototype.toString.call(value) == '[object Array]'
}
javascript
```

除了上述方法之外，Object 类型提供了一个 `isPrototypeOf()` 方法，该方法用来检测一个对象是否在另一个对象的原型链上。由于 Object 是所有引用类型的父级，所以 Object 提供的方法所有引用类型都可以直接使用。如下示例代码所示：

```javascript
console.log(Array.prototype.isPrototypeOf([1,2,3,4,5]))
javascript
```

上述示例代码的运行效果如下图所示：

![0405.png](http://changetm.oss-cn-beijing.aliyuncs.com/Temp/9affd171-2b62-4ba9-b866-509b56194fd6.png)

这样的话，我们可以用来判断是否为数组的方法共有 4 个，如下所示：

- instanceof 运算符：`[] instanceof Array` 方法结果为 true 或 false
- `Array.isArray()` 方法：`Array.isArray([])` 方法结果为 true 或 false
- `Object.prototype.toString.call()` 方法：`Object.prototype.toString.call([])` 方法如果是数组的话，结果为 `[object Array]`
- `Array.prototype.isPrototypeOf()` 方法：`Array.prototype.isPrototypeOf([])` 方法结果为 true 或 false

## 转换方法

在讲解数据类型转换的时候，我们掌握了 `toString()` 方法可以将其他数据类型转换为 String 类型。而 Array 除了提供了 `toString()` 方法之外，还提供了 `valueOf()` 方法，如下所示：

- `toString()` 方法：将一个数组转换为字符串，数组中的元素之间使用逗号（`,`）进行分隔。
- `valueOf()` 方法：得到当前对象的原始值。如果是 Array 的话，则得到数组对象本身。

如下示例代码展示了 `toString()` 方法将数组转换为字符串的情况：

```javascript
var arr = [100, true, '这是一个字符串']
console.log(arr.toString())
javascript
```

上述示例代码的运行效果如下图所示：

![0406.png](http://changetm.oss-cn-beijing.aliyuncs.com/Temp/c10cc986-a848-4ac5-a7a6-9e8b71124b59.png)

如下示例代码展示了 `valueOf()` 方法获取数组的原始值的情况：

```javascript
var arr = [100, true, '这是一个字符串']
console.log(arr.valueOf() === arr)
javascript
```

上述示例代码的运行效果如下图所示：

![0407.png](http://changetm.oss-cn-beijing.aliyuncs.com/Temp/ef3ebe59-b277-4c78-bfe9-02fd7c11293f.png)

如上图的结果所示，由于数组的原始值就是数组对象本身，所以 `arr.valueOf() === arr` 计算的结果为 true。

> **注意**：如果数组中的元素存储的数据内容为 null 或者 undefined 的话，那么 `toString()` 方法或者 `valueOf()` 方法得到的结果为空字符串。

## 进出栈方法

JavaScript 语言中的数组提供了类似于数据结构中的栈的操作特点，栈是一种 LIFO（Last In First  Out，后进先出）的数据结构。所谓的后进先出，指的是最后添加的数据内容最先进行删除。换句话讲，最先添加的数据内容只能最后才能删除。栈是一种用来限制添加和删除数据内容的数据结构。

Array 类型提供了如下 2 个方法来实现类似栈的进栈和出栈的操作：

- `push()` 方法：该方法将一个或多个数据内容添加到指定数组的末尾，并返回该数组的新长度。
- `pop()` 方法：该方法将从指定数组的末尾删除一个数据内容，并返回被删除的数据内容。该方法会改变数组的长度。

如下示例代码展示了 Array 提供的 `push()` 方法和 `pop()` 方法的用法：

```javascript
var arr = [100, true, '这是一个字符串']

var count = arr.push(200)
console.log('添加新元素之后的数组长度为: ' + count, arr)

var result = arr.pop()
console.log('数组删除的元素为: ' + result, arr)
javascript
```

上述示例代码的运行效果如下图所示：

![0408.png](http://changetm.oss-cn-beijing.aliyuncs.com/Temp/e5a8fbc2-3a55-4a44-9498-e51972348839.png)

## 队列方法

JavaScript 语言中的数组在提供了类似栈的操作方法基础上，还提供了类似数据结构中的队列的操作方法，队列就是一种  FIFO（First In First  Out，先进先出）的数据结构。所谓先进先出，指的是最先添加的数据内容最先删除。队列与栈类似，都是一种用来限制添加和删除数据内容的数据结构。

Array 提供了如下 2 组方法来实现队列的：

- `push()` 方法和 `shift()` 方法
- `pop()` 方法和 `unshift()` 方法

如下示例代码展示了 `push()` 方法和 `shift()` 方法的用法：

```javascript
var arr = [100, true, '这是一个字符串']

var count = arr.push(200)
console.log('添加新元素之后的数组长度为: ' + count, arr)

var result = arr.shift()
console.log('数组删除的元素为: ' + result, arr)
javascript
```

上述示例代码的运行效果如下图所示：

![0409.png](http://changetm.oss-cn-beijing.aliyuncs.com/Temp/39892a43-daff-4980-ac52-f037c0a258e4.png)

如上图的结果所示，我们可以看到 `push()` 方法是向数组的末尾添加数据内容，而 `shift()` 方法是从数组的开始位置删除数据内容。

与 `push()` 和 `shift()` 一组方法相反，`unshift()` 和 `pop()` 方法是向数组的开始位置添加数据内容，从数组的末尾删除数据内容。

## 排序方法

Array 提供了 2 个方法来实现数组中元素的重排序效果，如下所示：

- `reverse()` 方法：该方法将数组中元素的位置进行颠倒，并将颠倒后的数组返回。
- `sort()` 方法：该方法按照升序排列方式将数组中的元素进行重新排序，并将重新排序的数组返回。

### 反转数组顺序

Array 提供的 `reverse()` 方法是用来将某个数组中所有元素的顺序进行颠倒，并且得到颠倒后的数组。需要注意的是该方法会改变原有数组，如下示例代码所示：

```javascript
var arr = [100, true, '这是一个字符串']
var result = arr.reverse()

console.log(arr, result)
javascript
```

上述示例代码的运行效果如下图所示：

![0410.png](http://changetm.oss-cn-beijing.aliyuncs.com/Temp/9bc7c8de-91ef-4d89-8d22-8bcda00a6b10.png)

如上图的结果所示，使用 `reverse()` 方法不仅颠倒了数组中元素的顺序，并改变了原有数组。所以，如果使用 `reverse()` 方法颠倒某个数组时，记得先将原有数组进行备份，以便后续的操作。

### 数组重新排序

`sort()` 方法是将数组中所有的元素转换为字符串，然后再按照这些字符串的 UTF-16 码单元值序列进行排序的。如下示例代码所示：

```javascript
var arr = ['Lucy', 'Mary', 'Lily', 'Aoni']
var result = arr.sort()

console.log(arr, result)
javascript
```

上述示例代码的运行效果如下图所示：

![0411.png](http://changetm.oss-cn-beijing.aliyuncs.com/Temp/d2ed9111-d0ec-4636-8f84-0babe34e749f.png)

如上图的结果所示，我们可以看到 `sort()` 方法不仅会将数组中的元素重新排序，同时也会改变原有数组。所以，与 `reverse()` 方法类似，在重新排序之前可以将原有数组进行备份，以便后续的操作。

如下示例代码展示了 `sort()` 方法重新排序一个元素为数字值的数组的情况：

```javascript
var arr = [1, 21, 10, 5, 2]
console.log(arr.sort())
javascript
```

上述示例代码的运行效果如下图所示：

![0412.png](http://changetm.oss-cn-beijing.aliyuncs.com/Temp/5f93877f-5308-4508-9eb0-366d09e5a9ee.png)

如上图的结果所示，我们可以看到重新排序的数组并不是按照数字值有小到大的顺序进行排序的。原因在于 `sort()` 方法是将数组中所有元素先转换为字符串，再按照 UTF-16 码单元值序列进行排序。

如果想要将数组中的所有元素按照数字值有小到大的顺序进行排序的话，可以通过 `sort()` 方法提供的参数来完成。其语法结构如下：

```javascript
array.sort([compareFunction])
javascript
```

- compareFunction 参数：是一个回调函数，一个用来指定按某种顺序进行排列的函数。该函数接收 2 个参数，分别表示用来比较的元素。

根据上述语法结构，如下示例代码展示了如何实现将数组中的元素按照数字值有小到大的顺序进行排序：

```javascript
var arr = [1, 21, 10, 5, 2]
var result = arr.sort(function(a, b){
	if (a < b) {
		return -1
	} else if (a > b) {
		return 1
	} else {
		return 0
	}
})
console.log(result)
javascript
```

上述示例代码的运行效果如下图所示：

![0413.png](http://changetm.oss-cn-beijing.aliyuncs.com/Temp/1d776527-0ef6-432d-b1f1-72fda8221c57.png)

## 连接方法

Aarray 提供了 `concat()` 方法用来合并两个或者多个数组。该方法不会改变原有数组，返回合并后的新数组。其语法结构如下所示：

```javascript
var new_array = old_array.concat(value1[, value2[, ...[, valueN]]])
javascript
```

- value1......valueN 参数：与原有数组合并的数组或值。

如下示例代码展示了使用 `concat()` 方法合并两个数组的用法：

```javascript
var arr = [1, 2, 3, 4, 5]
var result = arr.concat([6, 7, 8, 9, 10])

console.log(result, arr)
javascript
```

上述示例代码的运行效果如下图所示：

![0414.png](http://changetm.oss-cn-beijing.aliyuncs.com/Temp/a85d43db-84c2-44b7-be11-15f017975f48.png)

如上图的结果所示，我们可以看到 `concat()` 方法并没有改变原有数组。`concat()` 方法不仅可以将两个数组进行合并，也可以将一个数组和一个或多个值进行合并。如下示例代码所示：

```javascript
var arr = [1, 2, 3, 4, 5]
console.log(arr.concat(6, 7))
javascript
```

上述示例代码的运行效果如下图所示：

![0415.png](http://changetm.oss-cn-beijing.aliyuncs.com/Temp/6b841dd2-30a9-4f8e-8adc-c3c4e91a7eb8.png)

## 操作方法

在讲解一维数组时，我们曾学习了如何向数组新增数据内容、如何修改数组中某个位置的数据内容，以及如何从数组中删除某个位置的数据内容。Array 同样提供了相应操作的方法，如下所示：

- `slice()` 方法：该方法可以根据开始位置和结束位置从某个数组中截取指定的数据内容，并将其返回。
- `splice()` 方法：该方法可以实现对某个数组的新增、修改以及删除等操作。

### 截取数组

Array 提供了 `slice()` 方法用来从某个数组中截取指定的数据内容，并将其进行返回。其语法结构如下所示：

```javascript
var new_arr = arr.slice([begin[, end]])
javascript
```

- begin 参数：可选项，表示截取开始的位置（从 0 开始）。
- end 参数：可选项，表示截取结束的位置。截取的数据内容不包含 end 位置的数据内容。

如下示例代码展示了 Array 提供的 `slice()` 方法的用法：

```javascript
var arr = ['ant', 'bison', 'camel', 'duck', 'elephant']
var result = arr.slice(1, 3)

console.log(result, arr)
javascript
```

上述示例代码的运行效果如下图所示：

![0416.png](http://changetm.oss-cn-beijing.aliyuncs.com/Temp/110f8939-5d13-47a5-bc5b-ead62b11292a.png)

如上图的结果所示，我们可以看到 `slice()` 方法并没有改变原有数组，并且 `slice(1, 3)` 截取的是从第 2 个开始到第 3 个结束的数据内容。如下图所示：

![0417.png](http://changetm.oss-cn-beijing.aliyuncs.com/Temp/c6f74b97-e357-4301-a572-30a927ecfc4f.png)

如果 `slice()` 方法省略 end 参数的话，则会一直截取到数组的末尾。如下示例代码所示：

```javascript
var arr = ['ant', 'bison', 'camel', 'duck', 'elephant']
console.log(arr.slice(3))
javascript
```

上述示例代码的运行效果如下图所示：

![0418.png](http://changetm.oss-cn-beijing.aliyuncs.com/Temp/f447b0ef-bd70-4c4d-b6e9-ee8943a8d3f9.png)

### 新增、修改及删除操作

Array 提供了 `splice()` 方法用来删除某个数组的元素、修改某个数组的元素或者向某个数组新增元素等操作，并将改变后的数组返回。其语法结构如下所示：

```javascript
var arr = array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
javascript
```

- start 参数：表示修改数组的开始位置（从 0 开始）。
- deleteCount 参数：可选项，表示要删除数组中元素的个数。
- item1，item2，... 参数：可选项，表示从 start 指定的位置添加的元素。
- 返回值：由删除的元素组成的数组。如果只删除一个元素，则返回一个只有一个元素的数组。如果没有删除元素，则返回一个空数组。

如果将 deleteCount 参数的值设置为 0 的话，则表示 `splice()` 方法向某个数组的 start 位置新增元素。如下示例代码所示：

```javascript
var arr = ['ant', 'bison', 'camel']
var result = arr.splice(1, 0, 'duck', 'elephant')

console.log(result, arr)
javascript
```

上述示例代码的运行效果如下图所示：

![0419.png](http://changetm.oss-cn-beijing.aliyuncs.com/Temp/98ed94a6-43e2-419c-acbb-63c0edf5cfbd.png)

如上图的结果所示，我们可以看到由于我们并没有删除 arr 数组中任何一个元素，所以 `splice()` 方法返回的结果为空数组。并且 `splice()` 方法会改变原有数组。

如果省略 item1、item2 ... 等参数的话，则表示 `splice()` 方法从某个数组的 start 位置开始删除 deleteCount 个元素。如下示例代码所示：

```javascript
var arr = ['ant', 'bison', 'camel', 'duck', 'elephant']
var result = arr.splice(1, 2)

console.log(result, arr)
javascript
```

上述示例代码的运行效果如下图所示：

![0420.png](http://changetm.oss-cn-beijing.aliyuncs.com/Temp/db8f5cdc-aca7-4606-b87f-8bd8c69e520d.png)

如上图的结果所示，我们可以看到当省略 item1、item2 ... 等参数时，`splice()` 方法返回的结果为被删除的元素所组成的数组。

如果 deleteCount 参数的值大于 `array.length-start` 值的话，则将 start 位置之后的所有元素删除（包含 start 位置）。如下示例代码所示：

```javascript
var arr = ['ant', 'bison', 'camel', 'duck', 'elephant']
var result = arr.splice(2, 4)

console.log(arr)
javascript
```

上述示例代码的运行效果如下图所示：

![0421.png](http://changetm.oss-cn-beijing.aliyuncs.com/Temp/d2a4c30b-9dd1-4ad9-ae9a-f35b0424ec82.png)

如上图的结果所示，我们可以看到当 start 参数的值为 2 时，`array.length-start` 的值为 3，但 deleteCount 参数的值为 4。最终，将 start 位置之后所有元素全部删除（包含 start 位置的元素）。

如果 deleteCount 参数被省略的话，同样也会将 start 位置之后的所有元素删除（包含 start 位置）。如下示例代码所示：

```javascript
var arr = ['ant', 'bison', 'camel', 'duck', 'elephant']
var result = arr.splice(2)

console.log(arr)
javascript
```

上述示例代码的运行效果如下图所示：

![0422.png](http://changetm.oss-cn-beijing.aliyuncs.com/Temp/4f8de6f6-c89b-4dae-8f56-6453867a312d.png)

如果 start 参数、deleteCount 参数和 item1、item2 ... 等参数全部传递的话，则表示 `splice()` 方法将某个数组从 start 位置开始的 deleteCount 个元素替换为 item1、item2 ... 等新的元素。如下示例代码所示：

```javascript
var arr = ['ant', 'bison', 'camel', 'duck', 'elephant']
var result = arr.splice(2, 2, 'dog', 'cat', 'pig')

console.log(arr)
javascript
```

上述示例代码的运行效果如下图所示：

![0423.png](http://changetm.oss-cn-beijing.aliyuncs.com/Temp/eb3e9023-18f0-49e4-a857-52d5e000a42e.png)

## 位置方法

ECMA-262 第 5 版本为 Array 新增了两个有关位置的方法。这两个方法都接收 2 个参数：一个是要查找的元素，一个是开始查找的位置。如下所示：

- `indexOf()` 方法：在某个数组中查找指定元素的第一个索引值。如果存在则返回索引值，如果不存在则返回 -1。
- `lastIndexOf()` 方法：在某个数组中查找指定元素的最后一个索引值。如果存在则返回索引值，如果不存在则返回 -1。

如下示例代码展示了 `indexOf()` 方法和 `lastIndexOf()` 方法的用法：

```javascript
var arr = ['ant', 'bison', 'duck', 'camel', 'elephant', 'duck']

var searchResult1 = arr.indexOf('duck')
var searchResult2 = arr.lastIndexOf('duck')

console.log('查找duck的第一个索引值为 ' + searchResult1 + ',最后一个索引值为 ' + searchResult2)
javascript
```

上述示例代码的运行效果如下图所示：

![0424.png](http://changetm.oss-cn-beijing.aliyuncs.com/Temp/0be3008a-5189-44d3-83aa-844999cee5c9.png)

## 迭代方法

ECMA-262 第 5 版本为 Array 新增了 5 个迭代数组的方法，也就是遍历数组中元素的方法。如下所示：

- `forEach()` 方法：遍历数组中每一个元素时，会执行一个给定的函数。该方法没有返回值。
- `every()` 方法：遍历数组中每一个元素，判断每一个元素是否满足给定函数的条件。如果满足则返回 true，否则返回 false。
- `filter()` 方法：遍历数组中每一个元素，将满足给定函数条件的每一个元素组成一个新数组，并返回。
- `map()` 方法：遍历数组中每一个元素，在给定函数中对每一个元素进行处理，并创建一个新数组进行返回。
- `some()` 方法：遍历数组中每一个元素，如果有一个元素满足给定函数的条件，则返回 true，否则返回 false。

上述 5 个迭代方法都是接收 2 个参数，一个是给定的函数，一个是调用给定函数时的 this 值（可选项）。而给定的函数还接收 3 个参数，如下所示：

- currentValue 参数：当前遍历数组所得到的元素。
- index 参数：当前遍历数组得到的元素所在的索引值。
- array 参数：正在遍历的数组。

如下示例代码展示了以 `forEach()` 方法为例的用法：

```javascript
var arr = ['ant', 'bison', 'camel', 'duck', 'elephant']

arr.forEach(function(currentValue, index, array){
	console.log('当前元素的索引值为 ' + index + ', 元素为 ' + currentValue)
})
javascript
```

上述示例代码的运行效果如下图所示：

![0425.png](http://changetm.oss-cn-beijing.aliyuncs.com/Temp/525b25a7-f1e8-4080-b574-086bbdb4f3f3.png)

## 归并方法

ECMA-262 第 5 版本为 Array 新增了 2 个归并方法。所谓的归并，就是指遍历数组中每一个元素，并调用给定的函数，将最终的结果进行返回。

这 2 个归并方法如下所示：

- `reduce()` 方法：从左至右地遍历数组中每一个元素，调用给定的函数，并将最终的结果返回。
- `reduceRight()` 方法：从右至左地遍历数组中每一个元素，调用给定的函数，并将最终的结果返回。

上述 2 个归并方法都是接收 2 个参数，一个是给定的函数，一个是第一次调用给定函数传递的给定函数的第一个参数值（可选项）。而给定的函数接收 4 个参数，如下所示：

- accumulator 参数：上一次调用给定函数得到的结果。
- currentValue 参数：当前遍历数组所得到的元素。
- index 参数：当前遍历数组得到的元素所在的索引值。
- array 参数：正在遍历的数组。

如下示例代码展示了以 `reduce()` 方法为例，省略了第二个参数（*initialValue*）时的情况：

```javascript
var arr = [0, 1, 2, 3, 4, 5]

var result = arr.reduce(function(accumulator, currentValue, currentIndex, array){
	return accumulator + currentValue
})

console.log(result)
javascript
```

上述示例代码的运行效果如下图所示：

![0426.png](http://changetm.oss-cn-beijing.aliyuncs.com/Temp/da988df6-fec9-4734-85a3-aa35a9ad1676.png)

如上图的结果所示，我们可以看到最终得到的结果为 15。上述示例代码实际的执行流程如下所示：

| callback   | accumulator | currentValue | index | array              | return value |
| :--------- | :---------- | :----------- | :---- | :----------------- | :----------- |
| 第一次调用 | 0           | 1            | 0     | [0, 1, 2, 3, 4, 5] | 1            |
| 第二次调用 | 1           | 2            | 1     | [0, 1, 2, 3, 4, 5] | 3            |
| 第三次调用 | 3           | 3            | 2     | [0, 1, 2, 3, 4, 5] | 6            |
| 第四次调用 | 6           | 4            | 3     | [0, 1, 2, 3, 4, 5] | 10           |
| 第五次调用 | 10          | 5            | 4     | [0, 1, 2, 3, 4, 5] | 15           |

如上述执行流程所示，我们可以看到当 `reduce()` 方法的第二个参数（*initialValue*）省略时，accumulator 参数第一次得到的值为数组的第一个元素值。所以，在第一次调用给定函数时，currentValue 值为数组的第二个元素值。并且每次调用给定函数的结果为 `accumulator + currentValue` 表达式的计算结果，该值作为下一次调用给定函数的 accumulator 参数的值。

如果不省略 `reduce()` 函数的第二个参数（*initialValue*）的话，那么 accumulator 参数第一次得到的值则为 initialValue 参数的值。如下示例代码所示：

```javascript
var arr = [0, 1, 2, 3, 4, 5]

var result = arr.reduce(function(accumulator, currentValue, currentIndex, array){
	return accumulator + currentValue
}, 10)

console.log(result)
javascript
```

上述示例代码的运行效果如下图所示：

![0427.png](http://changetm.oss-cn-beijing.aliyuncs.com/Temp/ea85f909-e0dc-4106-8873-eb430852accc.png)

`reduceRight()` 方法与 `reduce()` 方法的区别仅在于 `reduceRight()` 方法是从右至左地遍历数组，`reduce()` 方法是从左至右地遍历数组而已。





# String类型

**导读**：本小节讲解 JavaScript 语言中的 String 类型，其中包含了什么是 String 类型、String 类型提供的比较常用方法的用法，以及 String 类型提供的与正则表达式有关的模式匹配的方法等内容。

## 什么是 String 类型

JavaScript 语言中的 String 类型可以用来定义字符串，通过创建 String 类型的对象。基本数据类型 string 同样可以定义字符串，不同的是 string 类型是通过字面量方式定义字符串的。如下示例代码所示：

```javascript
var str1 = '这是一个字符串'
var str2 = new String('这是另一个字符串')

console.log((typeof str1) === 'string')
console.log(str2 instanceof String)
javascript
```

上述示例代码的运行效果如下图所示：

![0601.png](http://changetm.oss-cn-beijing.aliyuncs.com/Temp/f59db3e4-2e38-4cf5-86c1-2df3e9fd12bb.png)

> **提示**：定义字符串时，建议使用基本数据类型，不建议使用引用类型。

无论是 string 基本数据类型，还是 String 引用类型，都可以使用 String 类型提供的属性和方法。

## 常见操作

String 类型提供了一系列方法可以完成各种各样的功能，大体可以划分为如下几种：

- 大小写转换
- 获取指定位置的字符串
- 检索字符串
- 截取子字符串
- 分隔字符串
- 连接字符串

### 大小写转换

在 JavaScript 语言的字符串中，经常遇到例如英语这种对大小写有特别需求的情况。String 类型提供了 4 个与大小写转换有关的方法，如下表所示：

| 方法                  | 描述                                         |
| :-------------------- | :------------------------------------------- |
| `toUpperCase()`       | 将字符串转换成大写并返回                     |
| `toLowerCase()`       | 将字符串转换成小写并返回                     |
| `toLocaleUpperCase()` | 根据当前区域设置，将字符串中的字符转换成大写 |
| `toLocaleLowerCase()` | 根据当前区域设置，将符串中的字符转换成小写   |

上述方法中，其中 `toUpperCase()` 方法和 `toLowerCase()` 方法是比较经典的用法，借鉴自 java.lang.String 中的同名方法。

如下示例代码展示了 `toUpperCase()` 方法和 `toLowerCase()` 方法的用法：

```javascript
var msg = 'Hello World'

var lowerMsg = msg.toLowerCase()
var upperMsg = msg.toUpperCase()

console.log( msg );// Hello World
console.log( lowerMsg );// hello world
console.log( upperMsg );// HELLO WORLD
javascript
```

上述示例代码的运行效果如下图所示：

![0602.png](http://changetm.oss-cn-beijing.aliyuncs.com/Temp/8f3c44bc-ddfa-43dc-8683-c2ab039de6d1.png)

需要注意的是，中文是不需要区分大小写的。所以，上述有关大小写转换的方法应该用于除中文以外的需要大小写形式的字符中。

### 获取指定位置的字符串

String 类型提供了 3 个根据索引值获取某个字符串中对应位置上的字符的方法。这些方法常用来取出指定字符之后进行逻辑判断等应用场景。具体方法如下表所示：

| 方法            | 描述                                         |
| :-------------- | :------------------------------------------- |
| `charAt()`      | 返回特定位置的字符                           |
| `charCodeAt()`  | 返回表示给定索引的字符的 Unicode 值          |
| `codePointAt()` | 返回使用 UTF-16 编码的给定位置的值的非负整数 |

如下示例代码展示了上述方法的具体用法：

```javascript
var str = 'Hello World!'

var charAt = str.charAt(2)
var charCodeAt = str.charCodeAt(2)
var codePointAt = str.codePointAt(2)

console.log(charAt, charCodeAt, codePointAt)
javascript
```

上述示例代码的运行效果如下图所示：

![0603.png](http://changetm.oss-cn-beijing.aliyuncs.com/Temp/179f645e-da05-4edb-b774-c288768b8093.png)

如上图的结果所示，我们可以看到 `Hello World` 字符串中索引值为 2 的是 `l` 字符，其 Unicode 值为 108。

### 检索字符串

String 类型除了提供了在某个字符串中根据索引值查找字符的方法之外，还提供了 2 个根据字符或子字符串来查找对应的索引值。如果在某个字符串中并不存在指定的字符或子字符串的话，则查找的结果为 -1。这两个方法如下表所示：

| 方法            | 描述                                                         |
| :-------------- | :----------------------------------------------------------- |
| `indexOf()`     | 从字符串中查找首个与给定值一致的首字母的索引值，如果没有找到则返回 -1 |
| `lastIndexOf()` | 从字符串中查找最后一个与给定值一致的首字母的索引值，如果没有找到则返回 -1 |

上述两个方法都接收 2 个参数，具体含义如下所示：

- searchValue 参数：一个字符串，表示被查找的值
- fromIndex 参数：可选项，表示开始查找的位置，默认值为 0。

如下示例代码展示了上述方法的具体用法：

```javascript
var email = 'tom@163@sohu.com'

console.log(email.indexOf('tom'))
console.log(email.indexOf('@', 5))

console.log(email.lastIndexOf('@'))
console.log(email.lastIndexOf('@', 5) )

console.log(email.indexOf('Mary'))
javascript
```

上述示例代码的运行效果如下图所示：

![0604.png](http://changetm.oss-cn-beijing.aliyuncs.com/Temp/c9b386bd-32a3-49bf-9856-fb476bf0baa1.png)

如上图的结果所示，我们可以看到如果不传递 fromIndex 参数的话，则会从索引值为 0 的位置开始查找。如果传递了 fromIndex 参数的话，则会从 fromIndex 参数指定的索引值位置开始查找。如果没有与指定值一致的则返回 -1 的结果。

### 截取子字符串

String 类型提供了 3 个用来截取某个字符串的方法，这 3 个方法会返回按照规则截取的子字符串，并且不会改变原有字符串的内容。如下表所示：

| 方法          | 描述                                                         |
| :------------ | :----------------------------------------------------------- |
| `slice()`     | 截取某个字符串的一部分，并返回一个新的字符串，且不会改动原字符串 |
| `substring()` | 返回一个字符串在开始索引到结束索引之间的一个子字符串         |
| `substr()`    | 返回一个字符串中从指定位置开始到指定字符数的子字符串         |

`slice()` 方法会根据开始截取的位置和结束截取的位置来截取某个字符串的内容，并将截取的子字符串作为一个新的字符串返回。其语法结构如下：

```javascript
var new_str = str.slice(beginIndex[, endIndex])
javascript
```

- beginIndex 参数：表示开始截取的索引值。如果为负数的话，会被当做字符串的 `length + beginIndex` 计算值看待。
- endIndex 参数：可选项，表示结束截取的索引值。如果为负数的话，会被当做字符串的 `length + endIndex` 计算值看待。

根据上述语法结构，如下示例代码展示了 `slice()` 方法的用法：

```javascript
var str = 'javascript'

var result1 = str.slice(1, 3)
var result2 = str.slice(-9, -7)

console.log(result1, result2)
javascript
```

上述示例代码的运行效果如下图所示：

![0605.png](http://changetm.oss-cn-beijing.aliyuncs.com/Temp/dbd9ce78-842c-4f69-aa00-19ed078d3cc1.png)

如上图的结果所示，我们可以看到 2 种截取的方式最终得到的结果是一样。这是因为 `javascript` 的 length 属性值为 10，而 `str.slice(-9, -7)` 中的 `-9` 就相当于 `10 + -9` 结果为 1，`-7` 就相当于 `10 + -7` 结果为 3，与第一种写法一致。

`substring()` 方法会根据开始截取的位置和结束截取的位置来截取某个字符串的内容，并将截取的子字符串作为一个新的字符串返回。其语法结构如下：

```javascript
var new_str = str.substring(indexStart[, indexEnd])
javascript
```

- indexStart 参数：表示开始截取的索引值。
- indexEnd 参数：可选项，表示结束截取的索引值。

`substring()` 方法与 `slice()` 方法的区别在于 `slice()` 方法的参数允许为负数，而 `substring()` 方法的参数为负数时会被当做 0。如下示例代码所示：

```javascript
var str = 'javascript'

var result1 = str.substring(1, 3)
var result2 = str.substring(-9, -7)

console.log(result1, result2)
javascript
```

上述示例代码的运行效果如下图所示：

![0606.png](http://changetm.oss-cn-beijing.aliyuncs.com/Temp/df3c6027-5491-471e-9333-cbce1aded73e.png)

如上图的结果所示，我们可以看到第一次的截取与 `slice()` 方法相同的参数的结果是一致的。但第二次截取时，由于 `-9` 和 `-7` 都是为负数，会被当做 0 来处理。而当两个参数值相同时，则返回空字符串。

需要注意的是，`substring()` 方法有关两个参数的情况，如下所示：

- 如果 indexStart 等于 indexEnd，`substring()` 方法返回一个空字符串。
- 如果省略 indexEnd，`substring()` 方法提取字符一直到字符串末尾。
- 如果任一参数小于 0 或为 NaN，则被当作 0。
- 如果任一参数大于 `stringName.length`，则被当作 `stringName.length`。
- 如果 indexStart 大于 indexEnd，则 `substring()` 方法的执行效果就像两个参数调换了一样。

`substr()` 方法会根据开始截取的位置截取指定长度的子字符串，并将截取的子字符串作为一个新的字符串返回。其语法结构如下：

```javascript
var new_str = str.substr(start[, length])
javascript
```

- start 参数：表示开始截取的索引值。如果为负数的话，会被当做字符串的 `length + start` 计算值看待。
- length 参数：可选项，表示截取的长度。

`substr()` 方法与 `slice()` 方法和 `substring()` 方法不同的是 `substr()` 方法是根据指定的字符数来截取子字符串的。如下示例代码所示：

```javascript
var str = 'javascript'

var result1 = str.substr(1, 2)
var result2 = str.substr(-9, 2)

console.log(result1, result2)
javascript
```

上述示例代码的运行效果如下图所示：

![0607.png](http://changetm.oss-cn-beijing.aliyuncs.com/Temp/eac8641c-350f-4777-b64b-de4687e35b33.png)

需要注意的是，`substr()` 方法虽然并没有从 EMCA-262 标准规范中废除，但被作为遗留的方法还是尽量不要使用，可以使用另两个方法进行替代。

### 分隔字符串

String 类型提供了 `split()` 方法用来按照指定分割符来将某个字符串分割为一个数组。其语法结构如下所示：

```javascript
var str_arr = str.split([separator[, limit]])
javascript
```

- separator 参数：表示分割字符串的分割符，可以是一个字符串或正则表达式。
- limit 参数：表示限定返回分割片段的数量。

根据上述语法结构，如下示例代码展示了 `split()` 方法的用法：

```javascript
var str = 'Lucy,Mary,Lily,Aoni'

var result1 = str.split(',')
var result2 = str.split(',', 2)

console.log(result1, result2)
javascript
```

上述示例代码的运行效果如下图所示：

![0608.png](http://changetm.oss-cn-beijing.aliyuncs.com/Temp/59de80e1-2ded-4b7b-a73d-240d74861c4a.png)

如果某个字符串中的字符之间没有任何分隔符的话，那么使用 `split()` 方法进行分隔时可以传递一个空字符串。如下示例代码所示：

```javascript
var str = 'javascript'
console.log(str.split(''))
javascript
```

上述示例代码的运行效果如下图所示：

![0609.png](http://changetm.oss-cn-beijing.aliyuncs.com/Temp/519990b2-8d15-4ea9-8121-f38658080b87.png)

需要注意的是，当字符串为空时，`split()` 方法返回一个包含一个空字符串的数组，而不是一个空数组。如果字符串和分隔符都是空字符串，`split()` 则返回一个空数组。

### 连接字符串

String 类型提供了 `concat()` 方法用来将一个或多个字符串与原有字符串连接合并在一起，形成一个新的字符串并返回。其语法结构如下所示：

```javascript
var new_str = str.concat(string1, string2[, ..., stringN])
javascript
```

- string1...stringN 参数：表示要与原有字符串连接合并的字符串。

根据上述语法结构，如下示例代码展示了 `concat()` 方法的用法：

```javascript
var hello = 'Hello, '
var result = hello.concat('Kevin', ' have a nice day.')

console.log(result)
javascript
```

上述示例代码的运行效果如下图所示：

![0610.png](http://changetm.oss-cn-beijing.aliyuncs.com/Temp/3968317d-7f95-4fac-be4e-bfeff432391b.png)

关于多个字符串连接合并，我们在运算符一章中掌握了字符串连接运算符，最终的效果与 `concat()` 方法是一致的。建议尽量使用字符串连接运算符，而不是 `concat()` 方法。因为字符串连接运算符的性能要优于 `concat()` 方法。

## 模式匹配

由于在 JavaScript 语言中正则表达式主要是配合字符串来使用的，而 String 类型提供了 3 个与正则表达式有关的方法，这些方法称为模式匹配方法。如下所示：

- `search()` 方法：在某个字符串中查找与指定正则表达式匹配的子字符串，并返回首次匹配的字符的索引值。
- `match()` 方法：在某个字符串中检索与指定正则表达式匹配的子字符串，并返回匹配的结果。
- `replace()` 方法：在某个字符串中检索与指定正则表达式匹配的子字符串，将匹配的子字符串进行替换，并返回替换的新字符串。

`search()` 方法用来在某个字符串中查找是否存在与指定正则表达式的子字符串。如果存在则返回首次匹配的索引值，如果不存在则返回 -1。如下示例代码所示：

```javascript
var data = 'Microsoft is a big Company, Microsoft’s color is red and has MICROSOFT logo like Microsoft'

console.log(data.search(/microsoft/))
console.log(data.search(/microsoft/i))
javascript
```

上述示例代码的运行效果如下图所示：

![0611.png](http://changetm.oss-cn-beijing.aliyuncs.com/Temp/24b96bd7-ca8b-462f-a917-6efc100ca422.png)

`match()` 方法与 `search()` 方法的区别在于 `match()` 方法返回的不是索引值，而是将匹配的结果进行返回。如下示例代码所示：

```javascript
var data = 'Microsoft is a big Company, Microsoft’s color is red and has MICROSOFT logo like Microsoft'

console.log(data.match(/microsoft/))
console.log(data.match(/microsoft/i))
javascript
```

上述示例代码的运行效果如下图所示：

![0612.png](http://changetm.oss-cn-beijing.aliyuncs.com/Temp/798274e2-cce7-4857-b531-84951cfbcba0.png)

如上图的结果所示，我们可以看到如果 `match()` 方法最终没有任何匹配的话，则返回 null 值。如果匹配的话，则返回一个数组。该数组中所包含的内容时比较丰富的，其中具体的含义如下：

| 属性/索引 | 描述                                        |
| :-------- | :------------------------------------------ |
| `[0]`     | 匹配的全部字符串                            |
| `index`   | 匹配到的字符位于原始字符串的基于 0 的索引值 |
| `input`   | 原始字符串                                  |

`replace()` 方法是用来在某个字符串中根据指定正则表达式进行检索，并将其匹配的进行替换，最终将替换后的新字符串进行返回。如下示例代码所示：

```javascript
var data = 'Microsoft is a big Company, microsoft’s color is red and has MICROSOFT logo like microsoft';

console.log(data.replace(/microsoft/ig, 'oracle'))
javascript
```

上述示例代码的运行效果如下图所示：

![0613.png](http://changetm.oss-cn-beijing.aliyuncs.com/Temp/65431d84-39e1-4af3-b044-e08c09b31b22.png)

## 























