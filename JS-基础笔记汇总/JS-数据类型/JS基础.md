## 什么是变量

**变量**是一个拥有名字的用来存储数据信息的容器。JavaScript 语言中的变量是弱类型/松散类型的，所谓弱类型/松散类型就是指一个变量可以存储任何类型的数据信息。换句话讲，JavaScript 语言中的变量只是一个占位符而已。

如下示例代码展示了 JavaScript 语言的变量是如何定义和使用的：

```javascript
var message = '这是一个测试内容.' //变量的声明
console.log(message) //变量的调用
javascript
```

> **提示**：上述示例代码仅做展示作用，有关变量的定义与调用会在后续的内容里进行详细讲解。

我们在开发中通过使用变量要达到的目的具有 2 个：

- 存储数据信息：声明一个变量用来存储指定数据信息。
- 读取数据信息：调用一个变量从而得到其存储的数据信息。

值得注意的是，在 JavaScript 语言中如果想使用一个变量的话，必须要先声明这个变量，否则会报错。如下示例代码所示：

```javascript
console.log(message) //调用一个未声明的变量
javascript
```

上述示例代码运行后的具体报错信息如下图所示：

![0101.png](http://changetm.oss-cn-beijing.aliyuncs.com/Temp/8bfdb296-614e-4bda-8caa-b3f5404a6088.png)

## 变量的声明

在 JavaScript 语言中声明一个变量需要使用 `var` 关键字。而且在 JavaScript 语言中声明变量的情况分为如下 2 种：

- 只声明未初始化：只声明一个变量，但该变量并不存储任何数据信息。
- 既声明也初始化：声明一个变量的同时，为该变量进行初始化数据信息。

### 只声明未初始化

JavaScript 语言允许在声明变量时，并不需要一定要存储数据信息。换句话讲，JavaScript 语言允许只声明变量，但不做任何初始化工作。

如下示例代码展示了 JavaScript 语言如何声明一个变量：

```javascript
var message
javascript
```

值得注意的是，上述示例代码声明的 message 变量，并没有存储任何数据信息。所以，这时的 message 变量的值为默认值 undefined。

我们可以通过 `console.log(message)` 语句来测试这时的 message 变量的值。如下图所示：

![0102.png](http://changetm.oss-cn-beijing.aliyuncs.com/Temp/4503ad7a-672c-4e8b-a343-d9c080177293.png)

如上图显示所示，第一个 undefined 表示 message 变量的值，而第二个 undefined 表示的 `console.log()` 方法的返回值。

> **说明**：有关某个对象的方法的返回值的内容，我们会在后续章节中进行详细讲解。

JavaScript 语言也允许在一行中同时声明多个变量，变量之间只需要使用逗号（,）进行分隔即可。如下示例代码展示了 JavaScript 在一行中声明了多个变量：

```javascript
var message, age, job
javascript
```

这种只声明不初始化的变量，我们可以在声明之后的任意位置为其进行初始化操作。初始化操作的语法结构如下所示：

```
变量名 = 数据
```

如下示例代码展示了如何为一个只声明为初始化的变量进行初始化操作：

```javascript
var message //只声明变量但未初始化
message = '这是一个测试内容.' //为变量进行初始化值
javascript
```

> **说明**：有关变量值所支持的数据类型，我们会在后续章节中进行详细讲解。

### 既声明也初始化

JavaScript 语言也允许在声明一个变量的同时，使用该变量来存储指定的数据信息。换句话讲，JavaScript 语言允许声明变量的同时为该变量进行初始化操作。

如下示例代码展示了 JavaScript 语言如何声明一个变量并进行初始化操作：

```javascript
var message = '这是一个测试内容.'
javascript
```

我们可以通过 `console.log(message)` 语句来测试这时的 message 变量的值。如下图所示：

![0103.png](http://changetm.oss-cn-beijing.aliyuncs.com/Temp/810b73dc-59cd-4e56-8048-900bac40e33b.png)

JavaScript 语言也允许在一行中同时声明多个变量并为其进行初始化，只需要在声明变量之间使用逗号（,）进行分隔即可，如下示例代码所示：

```javascript
var message = '这是一个测试内容.', result = '合格'
javascript
```

JavaScript 语言还允许在一行中声明多个数据类型不同的变量并进行初始化操作，如下示例代码所示：

```javascript
var message = '这是一个测试内容.', result = 100
javascript
```

> **提示**：上述示例代码中使用的 `=` 表示为赋值运算符。

### 命名规则

JavaScript 语言中的变量命名或者函数命名并不是没有任何要求的，例如上一节中的关键字和保留字是不能被用来作为变量或者函数的名称的。当然，除了这些之外，变量的命名或者函数的命名还有其他一些要求：

- 必须以字母、下划线（_）、美元符号（$）开始。
- 不能以数字开头。
- 不能使用关键字和保留字作为名称。
- 由于 JavaScript 是区分大小写的，大写字母与小写字母并不冲突。
- 名称最好有明确的含义。
- 可以采用“匈牙利命名法”、“下划线命名法”、“小驼峰命名法”或“大驼峰命名法” 之一，在开发团队内进行协调统一。

如下示例代码展示了几种变量命名的方式：

```javascript
var helloWorld = 'Hello World' //小驼峰命名法
var HelloWorld = 'Hello World' //大驼峰命名法
var hello_world = 'Hello World' //下划线命名法
javascript
```

在一个项目开发中，建议尽量使用一种命名方式，这样便于协同开发工作的展开。

## 声明的问题

在 JavaScript 语言中声明变量时，还有一些操作是值得注意的。有些操作虽然可能运行代码时不会报错，但并不推荐的一些做法。

### 未使用 var 的声明

上文中我们讲解了在 JavaScript 语言中声明变量需要使用 `var` 关键字，但实际上在除严格模式以外的时候，JavaScript 语言是允许不使用 `var` 关键字来声明变量的，如下示例代码所示：

```javascript
message = '这是一个测试内容.'
javascript
```

上述示例代码在非严格模式下是允许的，例如我们如果使用 `console.log(message)` 语句打印 message 变量的值的话，会得到如下图所示的结果：

![0104.png](http://changetm.oss-cn-beijing.aliyuncs.com/Temp/e7ff70f0-ffce-48f7-b9ac-f9ee888409c4.png)

通过如上图的结果所示，说明 JavaScript 语言是允许这样的用法。但我们并不推荐这样使用，因为在后续章节中讲解到全局变量和局部变量时，这种写法会有问题的。

### 重复的声明

在 JavaScript 语言中使用 `var` 关键字重复声明变量是允许的，并且不会有任何问题。只不过由于 JavaScript 语言中的变量只能存储一个数据信息，所以当重复声明变量并进行初始化的话，之前的数据信息将会被覆盖。如下示例代码所示：

```javascript
var msg = 'this is message' // 值为 this is message
var msg = 100 // 值为 100
javascript
```

如果我们使用 `console.log(msg)` 语句来打印 msg 变量的值的话，得到的结果如下图所示：

![0105.png](http://changetm.oss-cn-beijing.aliyuncs.com/Temp/bedae89b-1510-4c67-bd59-787cd76a524a.png)

### 遗漏的声明

所谓遗漏的声明就是指在未声明变量的情况下，直接读取变量的值的操作。这种操作的结果会报出 ReferenceError，如下图所示：

![0106.png](http://changetm.oss-cn-beijing.aliyuncs.com/Temp/757f0660-03e1-4604-bb0d-021933669a79.png)

> **说明**：这种情况在上文《什么是变量》中已经有讲解到。

## 变量的使用

声明变量的作用是使用变量来存储数据信息，之后需要通过变量对数据信息做读取或修改等操作。

### 读取变量的值

当声明一个变量并存储指定数据信息之后，可以通过该变量的名称读取出所存储的数据信息。如下示例代码所示：

```javascript
var message = '这是一个测试内容.'
console.log(message) //打印：这是一个测试内容
javascript
```

上述示例代码的运行效果如下图所示：

![0107.png](http://changetm.oss-cn-beijing.aliyuncs.com/Temp/1f609f73-06f3-432e-9353-1ac7f27dfa3e.png)

我们通过变量的名称查找到变量所存储的数据信息。值得注意的是，我们真正读取的是数据信息，而不是变量。

### 修改变量的值

除了可以通过变量的名称来读取其存储的数据信息之外，我们还可以通过变量的名称来修改其存储的数据信息。如下示例代码所示：

```javascript
var message = '这是一个测试内容.'
message = '这是另一个测试内容.'
console.log(message)
javascript
```

上述示例代码的运行效果如下图所示：

![0108.png](http://changetm.oss-cn-beijing.aliyuncs.com/Temp/12b78401-36fa-47e9-b4c2-97f9154b2a32.png)

