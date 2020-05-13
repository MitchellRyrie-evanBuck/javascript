# 函数

JavaScript 语言中的函数就是一段可以重复执行的代码块。简单来说，函数只需要定义一次，但可以调用一次或多次。如下示例代码所示：

定义一个fun函数

```
function fun(){
	console.log('这是一个函数.')
}

调用fun函数
fun()


```


## 定义函数

```
与变量类似，函数同样需要先声明再使用的。定义函数，也称为声明函数，共具有如下 3 种方式：

函数声明方式
函数表达式方式
构造函数方式
```

```css
函数声明方式
使用函数声明方式来定义函数，实际上是通过 JavaScript 语言提供的相关语法来定义函数。其语法结构如下所示：

function name() {
	statement
}

name：表示为定义函数的函数名称。命名规则与声明变量的命名规则是一致的。
statement：表示定义函数时的内部将要执行的语句块，一般称为函数体。
根据上述语法结构，如下示例代码展示了如何通过函数声明方式来定义一个函数：

function fun(){
	console.log('这是一个用于测试的函数内容.')
}
```

```css
函数表达式方式
函数表达式方式是一种类似于声明变量的方式，区别在于赋值运算符的右边是一个函数结构而并不是一个值。其语法结构如下所示：

var name = function(){
	statement
}

name：表示为定义函数的函数名称。命名规则与声明变量的命名规则是一致的。
statement：表示定义函数时的内部将要执行的语句块，一般称为函数体。
根据上述语法结构，如下示例代码展示了如何通过函数表达式方式来定义一个函数：

var fun = function(){
	console.log('这是一个用于测试的函数内容.')
}

如上述示例代码所示，赋值运算符的右边内容就是称为函数表达式。我们可以发现在函数表达式中并没有指定函数名称，因为函数名称是由赋值运算符右边的变量名来代表的。



当然，这种函数表达式方式定义一个函数时，也允许为该函数定义函数名。这样赋值运算符右边的语法结构类似于函数声明方式定义函数的语法结构。如下示例代码所示：

var fun = function fn(){
	console.log('这是一个用于测试的函数内容.')
}

```



#### 形参和实参特例

```css
形参的个数多于实参的个数
当一个函数的形参的个数多于实参的个数时，那么多余的形参就相当于声明了一个变量但没有进行初始化值。如下示例代码所示：

function add(a, b){
	console.log(a, b)
}
add(1)

没有对应实参的形参 b 的值为 undefined。这与声明了一个变量但没有进行初始化值的情况是一致的。
```

```css
形参的个数少于实参的个数
当一个函数的形参的个数少于实参的个数时，那么将不会有任何形参来接收多余的实参的值。如下示例代码所示：

function add(a, b){
	console.log(a, b)
}
add(1, 2, 3)

//结果为： 1 2
3因为没有对应的形参而被丢弃
```



#### return 语句

```css
函数的函数体中还包含了一个 return 语句，该语句的作用是将函数体的计算结果作为返回值。该语句并不是必需的，默认情况下返回值为 undefined。

如下示例代码所示：
function fun(){
	console.log('这是一个用于测试的函数内容.')
}
var f = fun() //将调用fun函数的计算结果赋值给f变量
console.log(f)


如下示例代码展示了为函数的函数体定义 return 语句：
function fun(){
	console.log('这是一个用于测试的函数内容.')
	return '这是函数的返回值'
}
var f = fun() //将调用fun函数的计算结果赋值给f变量
console.log(f)
```



#### 内置函数

|     函数     |                           描述                            |
| :----------: | :-------------------------------------------------------: |
|    eval()    |         对一串字符串形式的JavaScript代码字符求值          |
|   uneval()   |           创建的一个Object的源代码的字符串表示            |
|  isFinite()  |               判断传入的值是否是有限的数值                |
|   isNaN()    |                 判断一个值是否不是数字值                  |
|  parseInt()  |             解析字符串参数，并返回指定的整数              |
| parseFloat() |             解析字符串参数，并返回一个浮点数              |
| decodeURI()  | 对已编码的统一资源标识符(URI)进行解码，并返回其非编码形式 |
| encodeURI()  |  对统一资源标识符(URI)进行编码，并返回编码后的URI字符串   |

```css
eval() 函数
eval() 函数的作用是将传入到该函数中的字符串当做 JavaScript 语言的代码进行执行。

console.log(eval('4 + 4'))
//结果为8

当 eval() 函数接收的参数不是一个字符串的话，eval() 函数会将该参数的类型原封不动的返回。
```

```css
encodeURI() 函数与 decodeURI() 函数

encodeURI() 函数与 decodeURI() 函数是一对逆操作函数。其中，encodeURI() 函数的作用是对一个特定字符串进行编码，而 decodeURI() 函数的作用是对一个特定字符串进行解码。

如下示例代码展示了 encodeURI() 函数和 decodeURI() 函数的用法：

var uri = 'http://www.example.com/前端开发工程师'

var encode = encodeURI(uri)
console.log(encode)

var decode = decodeURI(encode)
console.log(decode)


/*输出结果：
http://www.example.com/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88
http://www.example.com/前端开发工程师
undefined
*/
```

```css
encodeURIComponent() 函数与 decodeURIComponent() 函数

encodeURIComponent() 函数和 decodeURIComponent() 函数与 encodeURI() 函数和 decodeURI() 函数的区别在于 encodeURIComponent() 函数和 decodeURIComponent() 函数不仅对字符串中的中文进行编码和解码，同时也对字符串中的标点符号进行编码和解码。

如下示例代码展示了 encodeURIComponent() 函数和 decodeURIComponent() 函数的用法：

var uri = 'http://www.example.com/前端开发工程师'

var encode = encodeURIComponent(uri)
console.log(encode)

var decode = decodeURIComponent(encode)
console.log(decode)

/*	http%3A%2F%2Fwww.example.com%2F%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%
http://www.example.com/前端开发工程师
undefined
*/
```

