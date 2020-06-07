# JavaScript面向对象详解(一)

## 一. JavaScript的对象

### 1.1. 传统对象 vs JavaScript对象

传统的面向对象

- 面向对象语言的一个标志就是类
- 类是所有对象的统称, 是更高意义上的一种抽象. 对象是类的实例.
- 通过类我们可以创建任意多个具体的对象.
- 在学习C++/OC/Java/Python等编程语言的时候, 都可以按照这种方式去创建类和对象.

JavaScript的面向对象

- JavaScript中没有类的概念（ES6之前），因此我们通常称为基于对象，而不是面向对象.
- 虽然JavaScript中的基于对象也可以实现类似于类的封装、继承、甚至是多态。但是和传统意义的面向对象还是稍微有一些差异(后面我们会讲解它是如何实现的)
- ECMA中定义对象是这样: 无序属性的集合, 属性可以包含基本值, 对象或者函数.
- 也就是对象是一组没有顺序的值组成的集合而已.
- 对象的每个属性或者方法都有一个名字, 而名字对应一个值. 有没有觉得非常熟悉?
- 没错, 其实就是我们经常看到和使用的映射(或者有些语言称为字典, 通常会使用哈希表来实现).

### 1.2. 简单的方式创建对象

创建自定义对象最简单的方式就是创建一个Object实例, 然后添加属性和方法

```
// 1.创建person的对象
var person = new Object()

// 2.给person对象赋值了一些动态的属性和方法
person.name = "Coderwhy"
person.age = 18
person.height = 1.88

person.sayHello = function () {
    alert("Hello, My name is " + this.name)
}

// 3.调用方法, 查看结果
person.sayHello()
```

代码解析:

- 步骤一: 创建一个名为person的对象.
- 步骤二: 给对象动态的赋值了一些属性包括一个方法
- 步骤三: 调用sayHello()方法, 主要看一下this.name会获取到谁呢? Coderwhy

插播一个信息: 函数和方法的关系

- 很多人在学习编程的时候, 会分不清楚什么是函数, 什么又是方法. 或者在什么情景下称为函数, 什么情景下称为方法.

- 首先, 如果你看的是英文文档, 会有明显的区分: Function被称为函数, Method被称为方法.

- 但是英文中, 为什么需要有这两个称呼呢?

- - 在早期的编程语言中, 只有函数(类似于数学中函数的称呼)
  - 后来有了面向对象语言, 面向对象语言中, 类中也可以定义函数. 但是人们为了区分在类中定义的函数, 通常称类中的函数为方法.
  - 还有一个非常重要的原因是, 通常方法中会携带一个调用者的当前对象(会将调用者作为参数一起传递进去), 也就是说this(有些语言中是self. 比如OC/Swift/Python等)
  - 当然, 你从这个角度来说, JavaScript中就没有函数了, 因为函数中都有this这样的参数. 但是通常来说, 我们还是会将封装到类中的函数称为方法, 而全局定义的函数称为函数.

- 如果接触过Java的同学可能会知道Java中只有方法的程序, 没有函数的称呼. 学习过C语言的同学可能知道, C语言中只有函数的称呼, 没有方法的称呼.

- 这就是因为Java中通常不定义全局函数, 但是在类中定义的. 而C语言不支持面向对象的编程.

OK, 我们继续JavaScript面向对象之旅.

- 前面创建对象的方式, 被早期的JavaScript程序员经常使用

后来, 对象字面量称为创建这种对象的首选方式

```
// 1.创建对象的字面量
var person = {
    name: "Coderwhy",
    age: 18,
    height: 1.88,

    sayHello: function () {
        alert("My name is " + this.name)
    }
}

// 2.调用对象的方法
person.sayHello()
```

### 1.3. JavaScript中属性的特性

JavaScript中关于属性有一个比较重要的概念: 属性描述符

- 虽然我们开发中, 大多数情况不去可以的使用这些属性描述符
- 但是某些情况下, 也确实会用到.
- 建议大家先了解一下这些属性描述符, 以及它们的作用, 在以后用到时会非常有帮助.

JavaScript中开始拥有了一种描述属性特征的特性（即属性描述符）。

- 根据特性的不同，可以把属性分成两种类型：数据属性和访问器属性。

常见的属性特性有哪些呢?

- [[Configurable]] // true or false

- - 表示能否通过delete删除属性从而重新定义属性，能否修改属性的特性，或者能否把属性修改为访问器属性。像前面例子中那样直接在对象上定义的属性，它们的这个特性默认值为true。

- [[Writable]] // true or false

- - 表示能否修改属性的值。像前面例子中那样直接在对象上定义的属性，它们的这个特性默认值为true。

- [[Enumerable]] // true or false

- - 表示能否通过for-in循环返回属性。像前面例子中那样直接在对象上定义的属性，它们的这个特性默认值为true。

- [[Value]] // everty thing

- - 包含这个属性的数据值。读取属性值的时候，从这个位置读；写入属性值的时候，把新值保存在这个位置。这个特性的默认值为undefined。

- [[set]] // function or undefined

- - 在写入属性时调用的函数。默认值为undefined。

- [[get]] // function or undefined

- - 在读取属性时调用的函数。默认值为undefined。

这些属性特性是什么东西呢?

- 从上面, 我们对这些特定的解释, 你会发现, 每个特定都会有自己特定的用途.

- 比如Configurable当我们配置为false时, 就无法使用delete来删除该属性.

- 设置属性特定

- - obj: 将要被添加属性或修改属性的对象
  - prop: 对象的属性
  - descriptor: 对象属性的特性
  - 要想修改属性的特性，必须通过两个Object方法，即Object.defineProperty和Object.defineProperties
  - 正如其字面意思，这两个方法都是用来定义（修改）属性的，前者一次只能定义一个属性，后者则可以多个。
  - defineProperty(obj, prop, descriptor)

案例练习:

```
var person = {}
Object.defineProperty(person, "birth", {
    writable: false,
    value: 2000
})

alert(person.birth) // 2000
person.birth = 1999
alert(person.birth) // 2000
```

注意：在使用defineProperty方法定义新属性时（非修改旧属性），如果不指定，configurable, enumerable和writable特性的默认值都是false。

也就是上面的代码等同于:

```
var person = {};
Object.defineProperty(person, "birth", {
    configurable: false,
    enumerable: false,
    writable: false,
    value: 2000
}); 
```

数据属性:

- 数据属性包含一个数值的位置，在这个位置可以读取和写入值。
- 数据属性拥有4个特性: [[Configurable]]/[[Enumerable]]/[[Writable]]/[[Value]]
- 按照上面的方式, 我们定义的属性就是数据属性

访问器属性:

- 访问器属性不包含数据值，它们包含一对getter和setter函数。
- 访问器属性不能直接定义，需要使用后面提到的Object.defineProperty函数定义。
- 访问器属性也拥有4个特性: [[Configurable]]/[[Enumerable]]/[[Get]]/[[Set]]

定义一个访问器属性:

```
var person = {
    birth: 2000,
    age:  17
};
Object.defineProperty(person, 'year', {
    get: function () {
        return this.birth + this.age;
    },
    set: function (newValue) {
        this.age = newValue - this.birth;
    }
});

person.year = 2088
alert(person.age) // 88
person.age = 30
alert(person.year) // 2030
```

注意: getter和setter都是可选的，在非严格模式下，只指定了getter却进行了写入操作，写入的值会被忽略; 只指定了setter却进行了读取操作，读取到的属性值为undefined。在严格模式下，则都会报错。

## 二. JavaScript创建对象

> 虽然Object构造函数或对象字面量可以用来创建单个对象
>
> 但是这些方式有个明显的缺点: 使用同一个接口创建很多对象, 会产生大量的重复代码.
>
> 我们会有一些列的方式来解决这个问题, 最终得到我们最佳理想的方式来创建对象.

### 2.1. 使用工厂模式

工厂模式是一种非常常见的设计模式, 这种模式抽象了创建具体对象的过程.

因为JavaScript中没法创建类, 开发人员就发明了一种函数, 用函数来封装以特定接口创建对象的细节.

工厂模式创建对象:

```
// 创建工厂函数
function createPerson(name, age, height) {
    var o = new Object()
    o.name = name
    o.age = age
    o.height = height

    o.sayHello = function () {
        alert("Hello, My name is " + this.name)
    }
    return o
}

// 创建两个对象
var person1 = createPerson("Coderwhy", 18, 1.88)
var person2 = createPerson("Kobe", 30, 1.98)
person1.sayHello() // Hello, My name is Coderwhy
person2.sayHello() // Hello, My name is Kobe
```

代码解析:

- 函数createPerson()能够根据接受的参数来构建一个包含所有必要信息的Person对象
- 可以无数次地调用这个函数，而每次它都会返回一个包含三个属性一个方法的对象。
- 工厂模式虽然解决了创建多个相似对象的问题，但却没有解决对象识别的问题（即怎样知道一个对象的类型）。
- 随着JavaScript的发展，又一个新模式出现了。

### 2.2. 构造函数模式

JavaScript中的构造函数可用来创建特定类型的对象。

- 像Object和Array这样的原生构造函数，在运行时会自动出现在执行环境中。
- 此外，也可以创建自定义的构造函数，从而定义自定义对象类型的属性和方法。

使用构造函数模式创建对象:

```
// 构造函数
function Person(name, age, height) {
    this.name = name
    this.age = age
    this.height = height

    this.sayHello = function () {
        alert(this.name)
    }
}

// 使用构造函数创建对象
var person1 = new Person("Coderwhy", 18, 1.88)
var person2 = new Person("Kobe", 30, 1.98)
person1.sayHello() // Coderwhy
person2.sayHello() // Kobe
```

代码解析:

- 在这个例子中，Person()函数取代了createPerson()函数。

- 我们会发现这个函数有一些不太一样的地方:

- - 没有显式地创建对象；(比如创建一个Object对象)
  - 直接将属性和方法赋给了this对象；
  - 没有return语句

- 另外, 我们还注意到函数名Person使用的是大写字母P。

- - 按照惯例，构造函数始终都应该以一个大写字母开头，而非构造函数则应该以一个小写字母开头；
  - 这个做法借鉴自其他面向对象语言，主要是为了区别于ECMAScript中的其他函数；
  - 因为构造函数本身也是函数，只不过可以用来创建对象而已；

- 还有, 我们在调用函数时, 不再只是简单的函数+(), 而是使用了new关键字

- 这种方式调用构造函数实际上会经历以下4个步骤：

- - 创建一个新对象, 这个新的对象类型其实就是Person类型.
  - 将构造函数的作用域赋给新对象（因此this就指向了这个新对象，也就是this绑定）；
  - 执行构造函数中的代码（为这个新对象添加属性和方法）；
  - 返回新对象, 但是是默认返回的, 不需要使用return语句；

在前面例子的最后，person1和person2分别保存着Person的一个不同的实例。

- 这两个对象都有一个constructor（构造函数）属性，该属性指向Person.
- 后面我们会详细说道constructor到底从何而来, 所以你需要特别知道一下这里有这个属性.

```
// constructor属性
alert(person1.constructor === Person) // true
alert(person2.constructor === Person) // true
```

我们也可以通过instanceof来查看它的类型

- 注意: 我们会发现person1和person2既是Person类型, 也是Object类型.
- 这是因为默认所有的对象都继承自Object.(关于继承, 后续详细讨论)

```
// 使用instanceof查看是否是person或者Object类型
alert(person1 instanceof Object) // true
alert(person1 instanceof Person) // true
alert(person2 instanceof Object) // true
alert(person2 instanceof Person) // true
```

### 2.3. 关于构造函数

关于构造函数

- 我们知道, 构造函数也是一个函数, 只是使用的方式和别的函数不太一样.(使用new)
- 但是, 构造函数毕竟也是函数, 因此也可以像普通的函数一样去使用.
- 而且, 其他任何的函数, 也可以通过new关键字来调用, 这个时候这个函数也可以被称为构造函数.

把构造函数当做普通的函数去调用

```
// 当做构造函数使用
var person = new Person("Coderwhy", 18, 1.88) // person对象
person.sayHello()

// 作为普通的函数调用
Person("Kobe", 30, 1.98) // window对象
window.sayHello()

// 在另外一个对象的作用域调用
var o = new Object()
Person.call(o, "Curry", 28, 1.93) // o对象
o.sayHello()
```

构造函数来创建对象的缺陷:

- 构造函数模式虽然好用，但也并非没有缺点。
- 使用构造函数的主要问题，就是每个方法都要在每个实例上重新创建一遍。
- 在前面的例子中，personl和person2都有一个名为sayName()的方法，但那两个方法不是同一个Function的实例。
- JavaScript中的函数也是对象，因此每定义一个函数，也就是实例化了一个对象

构造函数的换一种形式:

- 也就是上面的代码类似于下面的写法

```
function Person(name, age, height) {
    this.name = name
    this.age = age
    this.height = height

    this.sayHello = new Function("alert(this.name)")
}
```

有什么问题呢?

- 从这个角度上来看构造函数，更容易明白每个Person实例都包含一个不同的Function实例.
- 但是, 有必要创建多个Function实例吗? 它们执行的代码完全相同.
- 你也许会考虑, 它们需要区分不同的对象, 不过, 在调用函数时, 我们传入的this就可以区分了. 没有必要创建出多个Function的实例.

我们可以验证一下这是两个不同的函数:

```
alert(person1.sayHello === person2.sayHello) // false
```

有没有办法让它们是同一个函数呢? 使用全局函数即可

```
// 定义全局和函数
function sayHello() {
    alert(this.name)
}

// 构造函数
function Person(name, age, height) {
    this.name = name
    this.age = age
    this.height = height

    this.sayHello = sayHello
}

// 使用构造函数创建对象
var person1 = new Person("Coderwhy", 18, 1.88)
var person2 = new Person("Kobe", 30, 1.98)

alert(person1.sayHello === person2.sayHello) // true
```

新的问题:

- 这样做确实解决了两个函数做同一件事的问题，可是新问题又来了: 在全局作用域中定义的函数我们的目的却是只能被某个对象调用，这让全局作用域有点名不副实。
- 而且我们进一步思考: 如果对象需要定义很多方法，那么就要定义很多个全局函数，于是我们这个自定义的引用类型就丝毫没有封装性可言了。