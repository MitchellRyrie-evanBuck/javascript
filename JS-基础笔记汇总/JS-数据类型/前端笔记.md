# 三、JavaScript



## 一、基础概念



### 1、概述

```css
JavaScript 语言是一门弱类型、基于原型的直译式脚本语言，运行于 JavaScript 解释器/引擎。JavaScript 解释器/引擎最早是浏览器核心的一部分，广泛地被用来支持客户端的脚本语言（不仅包含 JavaScript 语言），最早是支持 HTML 页面的运行。

JavaScript 语言内置了一个包含一系列对象的标准库，比如数组、日期、数学和一个语言元素集合包括操作符、流程控制及语句等语法内容。

JavaScript 解释器/引擎是作为 JavaScript 脚本代码的运行环境，目前主要的呈现方式有 2 种，如下所示：

独立安装的 JavaScript 解释器/引擎，例如 Node.js 就是利用 Chrome 浏览器的 JavaScript V8 版本引擎创建的 JavaScript 运行环境。
嵌入在各个浏览器内核中的 JavaScript 解释器/引擎，目前主流浏览器都支持该解释器/引擎，例如 Chrome、Firefox 等浏览器。
```

![image-20200330142030114](https://jine.oss-cn-beijing.aliyuncs.com/image/js.png)

```css
JavaScript 诞生于 1995 年，其主要的作用是用来替代之前由服务器端语言（如 Java 语言等）负责的一些输入验证等操作。但 JavaScript 的发展历史远不止于此，如下所示：

1992 年，Nombas 公司为自己的 CEnvi 软件开发了一款脚本语言 ScriptEase，可以嵌入在网页中。
1995 年， Netscape 公司为自己的 Navigator2.0 浏览器开发了另一种客户端脚本语言 Livescript，后来因为 Netscape 公司与 SUN 公司合作，NetScape 公司的管理层希望该语言看起来像 Java 语言，因此后改名为 JavaScript。
1996 年，Microsoft 公司为了取得技术上的优势，在 IE3 中加入了 JScript（为避开 JavaScript 的版权问题）。
1997 年，JavaScript 1.1 作为草案提交给 ECMA（全称为 European Computer Manufacturers Association，译为欧洲计算机制造商协会），完成了 ECMA-262 —— 定义了名为 ECMAScript 的脚本语言标准。
提示：JavaScript 注册商标是属于 Oracle （甲骨文）公司的。
```

```css
虽然大部分经常把 JavaScript 和 ECMAScript 划为同一个概念，但实际上 JavaScript 语言所包含的内容要比 ECMAScript 多得多。完整的 JavaScript 语言其实是由 3 个部分组成的，如下所示：

ECMAScript：JavaScript 语言的核心，是 ECMA-262 标准化的脚本语言的名称。
DOM：全称为 Document Object Model，译为文档对象模型，是用来 W3C 组织制定的标准接口规范。
BOM：全称为 Browser Object Model，译为浏览器对象模型，提供了一系列对象可以与浏览器窗口进行交互。
```

### 2、js核心

#### ECMAScript

```
ECMAScript 语言是一门由 ECMA 组织根据 ECMA-262 标准定制的脚本程序设计语言，该语言的内容包含了语法、类型、语句、关键字和操作符等内容。

**ECMA** 的全称为 European Computer Manufacturers Association，译为欧洲计算机制造商协会，后来更名为 ECMA 国际，是一家国际性会员制度的信息和电信标准组织。

很多脚本语言的核心都是 ECMAScript，JavaScript 语言只是众多脚本语言中的一种，例如 Adobe 公司的 ActionScript 同样实现了 ECMAScript。

在 2015 年之前，ECMAScript 的最新一个版本是第 5 版本，发布于 2009 年。在 2015 年发布了版本号为 2015 的新版本，俗称 ECMAScript 6。

与此同时，ECMA 国际对外宣布此后每年都会发布一个新版本，并且版本号使用年份命名。截止到目前（*2019 年*）已经发布了 2016、2017 以及 2018 等新版本，并且还会以每年一个新版本的速度进行迭代更新。
```



#### 文档对象模型（DOM）

**DOM** 是一个简写，其全称为 Document Object Model，译为文档对象模型，是针对 XML 但经过扩展用于 HTML 的应用程序编程接口。

DOM 会把整个 HTML 页面映射为一个多层的节点结构，HTML 页面中的每一个组成部分都是这个节点结构中的某种类型的节点。

如下示例代码展示了简单的 HTML 页面源代码：

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>HTML页面示例</title>
</head>

<body>
  <h1>这是一个示例页面.</h1>
</body>

</html>
html
```

DOM 映射上述 HTML 页面为一个节点结构如下所示：

![0101.png](http://changetm.oss-cn-beijing.aliyuncs.com/Temp/bc74cc0c-f8c0-4d6f-bfab-aa6b3414eab7.png)



#### 浏览器对象模型（BOM）

```
BOM 同样是一个简写，全称为 Browser Object Model，译为浏览器对象模型，是允许开发人员访问和修改浏览器窗口的对象集合。

BOM 经常导致出问题的原因是 BOM 作为 JavaScript 语言的组成部分之一，但是却没有相关标准。换句话讲，各个浏览器对 BOM 可能都支持，但是具体用法上可能存在差异。不过，在 HTML5 中已经得到了解决，HTML5 版本将 BOM 的很多内容都写进了标准规范中。

BOM 提供了一系列与浏览器窗口进行互动的对象，如下所示：

- window 对象：代表浏览器窗口，可以修改浏览器窗口显示的大小等功能。
- navigator 对象：该对象提供了当前浏览器的详细信息，包含了浏览器名称、浏览器版本、当前操作系统信息等。
- screen 对象：代表当前显示器，提供了用户显示器分辨率等信息。

上述所罗列的对象并不是 BOM 中包含的所有对象，在后续章节中再详细讲解 BOM 的内容。除了上述这些对象之外，还提供了 XMLHttpRequest 这种自定义对象。
```



### 3、JavaScript 应用

```
JavaScript 语言最初的作用是运行在浏览器中，完成浏览器窗口中输入验证的一些操作。但 JavaScript 发展到目前为止，已经远不止于此。
```



#### 客户端 JavaScript

```
这里的客户端主要还是指 Web 浏览器，这部分的 JavaScript 提供了 BOM 和 DOM 等对象集来扩展 JavaScript 核心。例如客户端版本直接支持应用将元素放在 HTML 表单中并且支持响应用户事件，比如鼠标点击、表单提交和页面导航等操作。
```

目前主流浏览器的内核都集成了 JavaScript 解释器/引擎，如下图所示：

![0102.png](http://changetm.oss-cn-beijing.aliyuncs.com/Temp/b8ee46e9-f6d3-4036-8f75-1d2f43af95c6.png)



#### 服务器端 JavaScript

```css
自从 Node.js 的面市，使得 JavaScript 同样可以完成传统服务器端语言完成的事情。Node.js 提供了一系列 API 扩展 JavaScript 核心。例如服务端版本直接支持应用和数据库通信，提供应用不同调用间的信息连续性，或者在服务器上执行文件操作。

Node.js 的介绍如下图所示：
```

![0103.png](http://changetm.oss-cn-beijing.aliyuncs.com/Temp/af1b79b9-74cc-483b-9157-eb9582016416.png)

![](https://jine.oss-cn-beijing.aliyuncs.com/image/nodejs.png)



#### 物联网 JavaScript

JavaScript 语言目前也可以应用于物联网领域，国产厂商推出的 Ruff.js 就是支持 JavaScript 开发应用的物联网操作系统。Ruff.js 同样提供了一系列 API 扩展 JavaScript 核心。

Ruff.js 的介绍如下图所示：

![0104.png](http://changetm.oss-cn-beijing.aliyuncs.com/Temp/445a480d-76f0-4814-bf0d-426f45fb2f3c.png)



#### 人工智能 JavaScript

人工智能领域被认为是未来十大趋势之一，JavaScript 语言有幸可以参与其中，这要归功于 Google 公司。Google 公司曾推出人工智能领域的 TensorFlow 开发框架，同样提供了 JavaScript 版本。TensorFlow.js 框架是基于 JavaScript 语言的机器学习库，允许使用 JavaScript 语言开发 ML，并运行在浏览器或者 Node.js 环境中。

TensorFlow.js 的介绍如下图所示：

![0105.png](http://changetm.oss-cn-beijing.aliyuncs.com/Temp/80fa7cfd-e052-4278-872c-2483b262af66.png)



#### 总结

```css
本小节主要讲解了 JavaScript 语言的概念、发展简史、组成部分以及目前主要的应用场景。需要关注的重点如下：

- JavaScript 是一种弱类型、基于原型的语言，这是 JavaScript 语言最为重要的特性。
- JavaScript 的组成部分是 3 个：ECMAScript、DOM 和 BOM，并不只是 ECMAScript。
- JavaScript 语言目前的应用已经不仅仅局限于 Web 浏览器客户端，还有很多新的应用场景。

JavaScript 的主流运行环境，包含了浏览器运行环境和独立解释器运行环境两种。无论是浏览器环境还是独立解释器环境，都是将来我们使用 JavaScript 语言的主流运行环境。

浏览器运行环境：各个浏览器的内核基本上都集成了 JavaScript 解释器/引擎。
独立解释器运行环境：目前比较场景的独立解释器环境是 Node.js 提供的运行环境。
```



## 二、语法



### 1、区分大小写

```css
JavaScript 语言是一种区分大小写的语言。也就是说，JavaScript 语言中的关键字、变量名、函数名，以及所有标识符采用了统一的大小写形式。

HTML不区分大小写
```



### 2、可选的分号

```css
一般情况下，JavaScript 语言会使用分号（;）作为一条语句的结束，这对 JavaScript 语言的可读性和整洁性是非常重要的。

例：
var sum = a + b;var diff = a - b;

但在 JavaScript 语言中的分号也并不是必不可少的。如果 JavaScript 语言中的每一条语句都独占一行的话，那么用来表示结束的分号就可以省略。

例:
var sum = a + b
var diff = a - b
（不在一行）

```



### 3、语句

```css
JavaScript 语言将多行代码组合成一个代码块。
一般情况下，每一个代码块的开始使用左花括号 {  结束使用右花括号 }

例：
if (test) {
  console.log('我在一个代码块中.')
}
```



### 4、注释

```css
单行注释：使用 // 表示注释的开始。
多行注释：使用 /* 作为注释的开始，使用 */ 作为注释的结束。
```



### 5、关键字

```css
所谓关键字，就是在 JavaScript 语言中具有特殊用途的一组标识符，这些标识符是不能被用作变量名或者函数名的。关键字是由 ECMA-262 标准定制的，不同版本的 ECMA-262 标准中的关键字可能会有差异。

如下图展示了 ECMA-262 第 5 版本中的关键字：
```

![](http://changetm.oss-cn-beijing.aliyuncs.com/Temp/72a56fa7-4354-4794-9597-493f1d8e3644.png)



### 6、保留字

```css
除了关键字，JavaScript 语言还定义了另一组同样不能用作变量名或者函数名的标识符，这就是保留字。所谓保留字，就是目前在 JavaScript 语言中还没有明确的特殊用途，将来可能会成为关键字的一组标识符。

保留字同样是由 ECMA-262 标准定制的，不同版本的 ECMA-262 标准中的保留字也可能会有差异。

如下图展示了 ECMA-262 中的一些保留字：
```

![0202.png](http://changetm.oss-cn-beijing.aliyuncs.com/Temp/5554a6ce-c635-46d4-9bc2-299705974c01.png)



### 7、变量

```javascript
变量是一个拥有名字的用来存储数据信息的容器。JavaScript 语言中的变量是弱类型/松散类型的，所谓弱类型/松散类型就是指一个变量可以存储任何类型的数据信息。换句话讲，JavaScript 语言中的变量只是一个占位符而已。

如下示例代码展示了 JavaScript 语言的变量是如何定义和使用的：

var message = '这是一个测试内容.' //变量的声明
console.log(message) //变量的调用

开发中通过使用变量要达到的目的具有 2 个：
存储数据信息：声明一个变量用来存储指定数据信息。
读取数据信息：调用一个变量从而得到其存储的数据信息。

可以只声明未初始化，也可既声明也初始化
```



### 8、命名规则

```css
必须以字母、下划线（_）、美元符号（$）开始。
不能以数字开头。
不能使用关键字和保留字作为名称。
由于 JavaScript 是区分大小写的，大写字母与小写字母并不冲突。
名称最好有明确的含义。
可以采用“匈牙利命名法”、“下划线命名法”、“小驼峰命名法”或“大驼峰命名法” 之一，在开发团队内进行协调统一。

如下示例代码展示了几种变量命名的方式：

var helloWorld = 'Hello World' //小驼峰命名法
var HelloWorld = 'Hello World' //大驼峰命名法
var hello_world = 'Hello World' //下划线命名法
```



### 9、重复的声明

```
在 JavaScript 语言中使用 `var` 关键字重复声明变量是允许的，并且不会有任何问题。只不过由于 JavaScript 语言中的变量只能存储一个数据信息，所以当重复声明变量并进行初始化的话，之前的数据信息将会被覆盖。如下示例代码所示：
```

```javascript
var msg = 'this is message' // 值为 this is message
var msg = 100 // 值为 100
```

```javascript
也可对变量的值进行修改:

var jine ="Hello World";
jine=3;
console.log(jine);

```



### 10、常量

```css
在 ECMAScript 5 版本之后，JavaScript 语言提供了声明常量的语法内容，即提供了 const 关键字来声明常量。如下示例代码所示：

const MY_CONSTANT = '这是一个常量'

注意：
1、常量在声明时必须要进行初始化操作，否则会报错！
2、常量声明一般是大写的
3、如果不使用 var 或者 const 关键字的话，则 JavaScript 默认会将其解释为变量
4、相同的常量不可重复声明，否则会报错！
```



### 11、数据类型

```css
JavaScript 语言是一种弱类型/松散类型的脚本语言。这就意味着，在声明变量是不需要指定数据信息的类型，在执行代码的时候，JavaScript 语言会自动确定数据类型。

在 ECMAScript 5 版本及之前的版本中，提供了 5 种基本类型（也称为原始类型）和 1 种复杂类型，如下所示：

5 种基本数据类型：boolean、null、undefined、number 和 string 类型
1 种复杂数据类型：Object 类型
```

```css
JavaScript 在 ECMAScript 5 版本及之前版本提供的 5 种基本数据类型，我们为了方便进行学习可以进一步划分为基本数据类型和特殊数据类型两种：

基本数据类型：boolean、number 和 string 类型
特殊数据类型：null 和 undefined 类型
而上述 3 种基本数据，在 JavaScript 语言中还提供了对应的全局对象，如下所示：

Boolean 对象
Number 对象
String 对象
为了更好地区分 3 种基本数据类型和 3 个全局对象，我们可以借鉴 Java 语言中的做法，如下所示：

将 3 种基本数据类型称为原始数据类型（英文中统一称为 primitive data types）
将 3 个全局对象称为包装类型
在 JavaScript 语言所提供的对象中，除了 Object 及上述 3 个包装类型之外还提供了一系列的全局对象，例如 Array、RegExp、Date 等，我们可以将其称为引用类型。

按照这样划分的话，JavaScript 语言的数据类型被进一步的划分为了如下几种：

原始类型：boolean、number 和 string 类型
包装类型：Boolean、Number 和 String 类型
特殊类型：Null 和 Undefined 类型
引用类型：Array、RegExp、Date、... ... 类型
```



### 12、原始类型

```css
原始类型又称为基本类型，在 JavaScript 语言的 ECMA-262 标准中指的是 boolean、number、string、null 和 undefined 类型。

我们为了方便学习，将 null 和 undefined 两个类型划分为特殊类型。所以，我们这里所说的原始类型指的是 boolean、number 和 string 这三种类型。

这三种原始类型，也可以称为原始值，是 JavaScript 语言中最底层的数据类型。声明变量或常量并初始化值为原始类型时，一般称为字面量/直接量方式声明变量。

如下示例代码展示了字面量/直接量方式声明变量的值为这三种原始类型：

var variable1 = true //该数据值为boolean类型
var variable2 = 100 //该数据值为number类型
var variable3 = '这是一个测试内容.' //该数据值为string类型
```

```
在实际开发中，JavaScript 语言经常会将其他数据类型自动转换为 boolean 类型使用。所以，我们更需要关注其他数据类型自动转换为 boolean 类型时是怎么样的情况。具体如下表所示：
```

|   数据类型   |        转换为 true 值        | 转换为 false 值 |
| :----------: | :--------------------------: | :-------------: |
| boolean 类型 |             true             |      false      |
| string 类型  |        任何非空字符串        | ""（空字符串）  |
| number 类型  | 任何非零数字值（包括无穷大） |  0、0.0 和 NaN  |
| object 类型  |           任何对象           |      null       |
|  undefined   |                              |    undefined    |

```css
如下示例代码展示了使用 if 语句来判断其他数据类型是如何转换为 boolean 类型的：

var message = '这是一个测试内容.'
if (message) {
	console.log('该变量的值为true.')
}
```



### 13、number类型

```css
number 类型简单来说就是数字值类型，在 JavaScript 语言使用字面量/直接量声明变量并初始化为数字值时，就是 number 类型。

number 类型按照 IEEE754 格式表示的话，会分为整数类型和浮点数类型。但 JavaScript 语言中只提供 number 类型来表示数字值，而通过具体数字值来区分整数类型和浮点数类型。

整数类型：负整数、0 和正整数
浮点数类型：简单来说就是指小数（负小数和正小数）

由于 IEEE754 格式表示的数字值是二进制表示法。换句话讲，JavaScript 语言浮点数类型时，很可能只是一个近似值而已。这会导致在使用浮点数类型的数字值进行计算时出现误差，如下示例代码所示：

var x = .3 - .2
var y = .2 - .1
x == y //值为false，表示两值不相等
x == .1 //值为false，.3-.2不等于.1
y = .1 //值为true，.2-.1等于.1
javascript
提示：由于 JavaScript 语言的这个问题，在实际开发中，建议按照单位进行换算之后再进行计算。例如将元换算为分做单位。
```



### 14、NaN

```css
在 JavaScript 语言的数字值中，还存在着一个比较特殊的值，就是 NaN。NaN 是一个简写形式，全称为 Not a Number，译为不是一个数字值，该值通常用来表示经计算之后的结果不是一个数字值（*这样不用抛出错误异常）。

NaN 本身存在着 2 个特点：

任何涉及 NaN 的操作都会返回 NaN，例如 10/NaN
NaN 与任何值都不相等，包括 NaN 自身
针对 NaN 本身的这 2 个特点，JavaScript 语言提供了 isNaN() 函数，其作用是判断计算后的结果是否为 NaN。该函数接受一个参数，返回的结果是一个 boolean 类型。

如果结果为 true 的话，表示计算的结果为 NaN
如果结果为 false 的话，表示计算的结果不为 NaN，而是数字值
如下示例代码展示了 isNaN() 函数使用的一些情况：

console.log(isNaN(10)) //输出false（10是一个数值）
console.log(isNaN("10")) //输出false（可以被转换成数值 10）
console.log(isNaN("blue")) //输出true（不能转换成数值）
console.log(isNaN(true)) //输出false（可以被转换成数值 1）
```



### 15、字符串字面量

```css
string 类型包含了一些特殊的字符字面量，也称为转义序列，用来表示非打印字符。这些字符字面量如下表所示：
```

| 转义字符 |                   含义                    |
| :------: | :---------------------------------------: |
|    \n    |                  换行符                   |
|    \t    |                  制表符                   |
|    \b    |                  退格符                   |
|    \r    |                  回车符                   |
|    \f    |                  换页符                   |
|    \     |                   斜杠                    |
|    '     | 单引号（'），在用单引号表示的字符串中使用 |
|    "     | 双引号（"），在用双引号表示的字符串中使用 |



### 16、字符串的特点

```css
ECMA-262 标准规范中定义的字符串是不可变的。也就是说，字符串一旦被创建，其值是不能被改变的。如果想要改变字符串的内容，则需要先销毁原来的字符串，再创建新的字符串进行存储才行。

如下示例代码展示了使用变量存储字符串，并修改其值为另一个字符串：

var str = 'Hello'
var result = str + 'World'
javascript
如上述示例代码所示，str 变量初始化时的值为 Hello，在第二行将 str 变量的值和 World 字符串组合在一起。而这个过程实际上是这样的：

创建一个可以容纳 10 个字符的新字符串
将组合后的 HelloWorld 进行存储
将原来的 Hello 和 World 两个字符串进行销毁。
```



### 17、typeof 运算符

```css
由于 JavaScript 是弱类型/松散类型的脚本语言，因此需要一种手段来判断变量的数据类型是什么。而 JavaScript 语言中的 typeof 运算符的作用就是用来判断某个变量的数据类型是哪种原始类型的。

typeof 运算符的语法结构如下所示：

typeof operand
typeof(operand)


javascript operand 参数：typeof 运算符判断的变量名或对象名
如下示例代码展示了 typeof 运算符的用法：

var message = '这是一个测试内容.'
console.log(typeof message) //输出string
console.log(typeof(message)) //输出string

javascript typeof 运算符会返回一个字符串，该字符串是某个原始类型的名称。如下所示：

"boolean"：说明当前变量的值是 boolean 类型
"number"：说明当前变量的值是 number 类型
"string"：说明当前变量的值是 string 类型
值得注意的是，虽然 typeof 运算符的用法是支持 typeof() 这种用法，但 typeof 并不是一个函数，而是运算符。
```



### 18、包装类型

```css
原始类型是没有提供属性和方法的，包装类型其实就是将原始类型包装成了对象，这样就提供了相应的属性和方法。而 JavaScript 语言中的例如 boolean 类型和 Boolean 类型是相似的，Boolean 类型实际上是一个 JavaScript 对象，提供了属性和方法。

所以，包装类型中的数据类型是与原始类型一一对应的，如下所示：

Boolean 类型
Number 类型
String 类型
包装类型的使用是通过构造器方式声明变量并进行初始化操作，如下示例代码所示：

var variable1 = new Boolean(true)
var variable2 = new Number(100)
var variable3 = new String('这是一个测试内容.')
```



### 19、Boolean 类型

```css
Boolean 类型在 JavaScript 语言中本质是创建一个 Boolean 类型对象的构造器。其语法结构如下所示：

new Boolean(value)
javascript
value 参数：可选项，用来初始化 Boolean 对象的值。
如下示例代码展示了 Boolean 类型的用法：

var bool = new Boolean(true)
javascript
因为 Boolean 类型是包装 boolean 类型的，所以 value 参数的最基本用法是 true 和 false。但 value 参数并不是只允许使用 true 和 false，如果 value 参数是其他值的话，则先自动转换为 boolean 类型。如下示例代码所示：

var bool = new Boolean('这是一个测试内容')
最终的结果为 true,所以 boolean 类型由 Boolean 类型包装，得到的是 Boolean {true} 的形式。

注意：不要将 boolean 类型的 true 和 false 与 Boolean 类型的 true 和 false 混淆在一起。
用Boolean构成的对象是object，而boolean还是boolean
```



### 20、Number 类型

```css
Number 类型在 JavaScript 语言中本质是创建一个 Number 类型对象的构造器。其语法结构如下所示：

new Number(value)

value 参数：用来初始化 Number 对象的值。
如下示例代码展示了 Number 类型的用法：

var num = new Number(100)


如果 value 参数并不是数字值的话，JavaScript 语言则会先自动将其转换为数字值，再返回结果。如下示例代码所示：

var num = new Number('123')
console.log(num)

如果 value 参数不是数字值，并且无法转换为数字值时，new Number() 会返回 NaN 的结果。如下示例代码所示：

var num = new Number('这是一个测试内容.')
console.log(num)

注意：number和Number构造的也是不一样的，number还是number，而Number是object
```



### 21、String 类型

```css
String 类型在 JavaScript 语言中本质是创建一个 String 类型对象的构造器。其语法结构如下所示：

new String(value)

value 参数：用来初始化 String 对象的值。
如下示例代码展示了 String 类型的用法：

var str = new String('这是一个测试内容.')

如果 value 参数并不是字符串的话，JavaScript 语言则会先自动将其转换为字符串，再返回结果。如下示例代码所示：

var str = new String(100)
console.log(str)


如果 value 参数并不是字符串的话，JavaScript 语言则会先自动将其转换为字符串，再返回结果。如下示例代码所示：

var str = new String(100)
console.log(str)

注意：
string 类型通过 typeof 运算符之后得到的结果是 string 
String 类型通过 typeof 运算符之后得到的结果是 object。
```



### 22、instanceof 运算符

```css
由于包装类型种的所有数据类型，在 JavaScript 语言中本质上就是一个对象。使用 typeof 运算符之后得到的结果是 object，所以使用 typeof 运算符是无法准确判断包装类型的。

我们可以使用 JavaScript 语言中的 instanceof 运算符来判断包装类型中的具体数据类型。其语法结构如下所示：

object instanceof constructor

object 参数：表示需要 instanceof 运算符判断类型的变量或对象。
constructor 参数：表示需要 instanceof 运算符判断的数据类型。

如下示例代码展示了 instanceof 运算符的用法：

var str = new String('这是一个测试内容.')
console.log(str instanceof String)

instanceof 运算符返回一个 boolean 类型的结果：

如果结果为 true，则表示当前变量的类型是指定的包装类型。
如果结果为 false，则表示当前变量的类型不是指定的包装类型。
```



### 23、特殊类型

```css
在 ECMA-262 标准规范中并没有定义特殊类型，只是我们为了便于学习自行划分出来的数据类型。之所以称为特殊类型，是因为这种类型所包含 Undefined 类型和 Null 类型，都是用法比较特殊的数据类型。

undefined 类型和 null 类型在 ECMA-262 标准中是属于原始类型。在实际开发中，undefined 类型和 null 类型的用法是很容易出现错误的。其中，应用场景更多一些的是 undefined 类型。

```

```css
undefined 类型
undefined 类型中只有一个值，即 undefined。

undefined 是 JavaScript 语言的原始数据类型。一般情况下，是不会主动地将某一个变量的值赋值为 undefined 的。但是，ECMA-262 标准也并没有规定不能将一个变量的值赋值为 undefined。如下示例代码所示：

var variable1
var variable2 = undefined
console.log(variable1, variable2)

在 JavaScript 语言中的应用场景中会得到 undefined 的情况如下所示：

声明变量但未初始化值时，该变量的值为 undefined
声明变量并初始化值为 undefined 时，该变量的值为 undefined
函数中的 return 语句的默认返回值为 undefined
函数中的 return 语句的返回值设置为 undefined
访问某一个对象中不存在的属性时，得到的结果为 undefined
```

```css
使用全等号（===）来判断当前变量的值是否为 undefined
使用 typeof 运算符来判断当前变量的值是否为 undefined
如下示例代码展示了使用上述 2 种方法来判断当前值是否为 undefined：

var x
console.log(x === undefined)
console.log(typeof x === 'undefined')

=== 是来判断俩种需要判断的属性的值和类型都是否一样
```



### 24、null类型

```css
Null 类型中也只有一个值，即 null。null 是 JavaScript 语言的原始数据类型。但值得注意的是，如果使用 typeof 运算符来判断 null 的类型的话，结果却为 object。如下

这是因为 null 值表示的是一个空对象指针，所以 typeof null 的结果才为 object。如果想要准确得到 null 的类型是什么的话，需要使用如下示例代码的方式才行：

Object.prototype.toString.call(null)
```

```css
当声明一个变量但不进行初始化的话，可以将该变量的值赋值为 null。这样做的好处是该变量不会占用内存空间。
当一个变量不再使用时，需要将该变量的值赋值为 null。这样做表示将该变量从内存空间进行释放出来。
实际上，undefined 值是派生于 null 值的。因此如果运行 null == undefined 这样的计算的话，结果为 true。

当然如果用=== 结果为false
```



### 25、类型转换

```css
JavaScript 语言目前提供的类型转换有 2 种，如下所示：

隐式类型转换：通过特定的表达式达到指定类型转换的目的。
显式类型转换：通过使用 JavaScript 语言提供的函数达到指定类型转换的目的。
```



#### 1、隐式类型转换

```css
所谓隐式类型转换，就是指 JavaScript 语言并没有提供特定的内容，而是通过特定的表达式以达到从某个数据类型转换为另一个数据类型的方式。

```

```css
转换为 boolean 类型
其他数据类型想要转换为 boolean 类型的话，只需要在其前面增加 2 个逻辑非运算符（!）即可。如下示例代码所示：

console.log(!!'这是一个测试内容.')

而其他数据类型转换为 boolean 类型，需要了解转换规则是怎么样的，如下表所示：
```

|   数据类型   |        转换为 true 值        | 转换为 false 值 |
| :----------: | :--------------------------: | :-------------: |
| boolean 类型 |             true             |      false      |
| string 类型  |        任何非空字符串        | ""（空字符串）  |
| number 类型  | 任何非零数字值（包括无穷大） |  0、0.0 和 NaN  |
| object 类型  |           任何对象           |      null       |
|  undefined   |                              |    undefined    |

```css
转换为 number 类型

其他数据类型想要转换为 number 类型的话，只需要在其前面增加加法运算符（+）即可。如下示例代码所示：

console.log(+'10')
console.log(+true)

其中 boolean 类型转换为 number 类型的情况如下：
true 转换为 number 类型的值为 1
false 转换为 number 类型的值为 0


值得注意的是，当 string 类型转换为 number 类型时，是可能无法成功转换为数字值的。如下示例代码所示：

console.log(+'这是一个测试内容')

当 string 类型无法成功转换为数字值时，得到的结果为 NaN。但注意的是，NaN 依旧是 number 类型的值。


如下面这个：
console.log(100 + '200') //结果为100200
使用这种方式将 string 类型转换为 number 类型时，必须要先执行 + 某个字符串 的表达式，再执行其他计算。



但 boolean 类型在使用这种方式转换为 number 类型时，就不存在 string 类型的这种情况。如下示例代码所示：

console.log(100 + true) //结果为101
```

```css
转换为 string 类型

其他数据类型想要转换为 string 类型，只需要使用连接运算符（+）拼接一个空字符串（''）即可。如下示例代码所示：

var str1 = '' + true
console.log(typeof str1)
var str2 = '' + 100
console.log(typeof str2)

这个拼接的空字符串出现在前后都是可以的
```



#### 2、显式类型转换

```
显示是官方明确给出的，隐式属于经验得出
```

```css
转换为 boolean 类型
JavaScript 语言提供了 Boolean() 函数用来将其他数据类型转换为 boolean 类型。需要注意的是，这里所使用的是 Boolean() 函数，而不是包装类型创建 Boolean 类型的 new Boolean() 构造器的用法。

如下示例代码展示了如何使用 Boolean() 函数将其他数据类型转换为 boolean 类型：

console.log(Boolean('这是一个测试内容.'))
console.log(Boolean(100))
```

```css
转换为 number 类型
首先，JavaScript 语言提供了 Number() 函数用来将其他数据类型转换为 number 类型。如果无法成功了转换为数字值的话，结果则为 NaN。

如下示例代码展示了如何使用 Number() 函数将其他数据类型转换为 number 类型：

console.log(Number('123'))
console.log(Number(true))
console.log(Number('这是一个测试内容.'))

除了 Number() 函数可以将其他数据类型转换为 number 类型之外，JavaScript 语言还提供了如下 2 个函数实现同样的功能：

parseInt() 函数：用来将某个 string 类型的值转换为 number 类型，结果为一个整数或 NaN。
parentFloat() 函数：用来将某个 string 类型的值转换为 number 类型，结果为一个浮点数或 NaN。
值得注意的是：

无论 string 类型的值的内容是整数还是浮点数，parseInt() 函数都会将其转换为一个整数。
string 类型的值的内容如果是一个整数的话，parseFloat() 函数会将其转换为一个整数；但如果是一个浮点数的话，parseFloat() 函数会将其转换为一个浮点数。

```

```css
如下示例代码展示了 parseInt() 函数的用法：

var str1 = '100';
var str2 = '100.11';

console.log(parseInt(str1));// 100
console.log(parseInt(str2));// 100

如下示例代码展示了 parseFloat() 函数的用法：

var str1 = '100';
var str2 = '100.11';

console.log(parseFloat(str1));// 100
console.log(parseFloat(str2));// 100.11
```

```css
转换为 string 类型
JavaScript 语言提供了 String() 函数用来将其他数据类型转换为 string 类型。如下示例代码展示了如何使用 String() 函数将其他数据类型转换为 string 类型：

console.log(typeof String(100))
console.log(typeof String(true))


除了 String() 函数之外，JavaScript 还提供了 Object 对象的 toString() 方法同样可以将其他数据类型转换为 string 类型。如下示例代码所示：

var num = 100
console.log(typeof num.toString())
var bool = true
console.log(typeof bool.toString())
```

