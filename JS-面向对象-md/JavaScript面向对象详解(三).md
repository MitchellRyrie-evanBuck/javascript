JavaScript面向对象详解（三）



> 继承是面向对象中非常重要的特性.
>
> ES5中和类的实现一样, 不能直接实现继承. 实现继承主要是依靠原型链来实现的。

## 一. 原型链

> 原型链是ES5中实现继承的主要手段, 因此相对比较重要, 我们需要深入理解原型链.

![tydBCj.png](https://s1.ax1x.com/2020/06/06/tydBCj.png)

### 1.1. 深入理解原型链

先来回顾一下构造函数、原型和实例的关系：

- 每个构造函数都有一个原型对象, 通过prototype指针指向该原型对象.
- 原型对象都包含一个指向构造函数的指针, 通过constructor指针, 指向构造函数
- 而实例都包含一个指向原型对象的内部指针, 该内部指针我们通常使用__proto__来描述.

思考如下情况:

- 我们知道, 可以通过Person.prototype = {}的方式来重写原型对象.
- 假如, 我们后面赋值的不是一个{}, 而是另外一个类型的实例, 结果会是怎么样呢?
- 显然，此时的原型对象将包含一个指向另一个原型的指针，相应地，另一个原型中也包含着一个指向另一个构造函数的指针。
- 假如另一个原型又是另一个类型的实例，那么上述关系依然成立，如此层层递进，就构成了实例与原型的链条。这就是所谓原型链的基本概念。

有些抽象, 我们通过代码来理解:

```
// 创建Person构造函数
function Person() {
}

// 设置Animal的原型
Person.prototype = {
}
```

我们将代码修改成原型链的形式:

```
// 1.创建Animal的构造函数
function Animal() {
    this.animalProperty = "Animal"
}

// 2.给Animal的原型中添加一个方法
Animal.prototype.animalFunction = function () {
    alert(this.animalProperty)
}

// 3.创建Person的构造函数
function Person() {
    this.personProperty = "Person"
}

// 4.给Person的原型对象重新赋值
Person.prototype = new Animal()

// 5.给Person添加属于自己的方法
Person.prototype.personFunction = function () {
    alert(this.personProperty)
}

// 6.创建Person的实例
var person = new Person()
person.animalFunction()
person.personFunction()
```

代码解析:

- 代码有一些复杂, 但是如果你希望学习好原型链, 必须耐心去看一看上面的代码, 你会发现其实都是我们学习过的.

- 重点我们来看第4步代码: 给Person.prototype赋值了一个Animal的实例. 也就是Person的原型变成了Animal的实例.

- Animal实例本身有一个__proto__可以指向Animal的原型.

- 那么, 我们来思考一个问题: 如果现在搜索一个属性或者方法, 这个时候会按照什么顺序搜索呢?

- - 第一步, 在person实例中搜索, 搜索到直接返回或者调用函数. 如果没有执行第二步.
  - 第二步, 在Person的原型中搜索, Person的原型是谁? Animal的实例. 所以会在Animal的实例中搜索, 无论是属性还是方法, 如果搜索到则直接返回或者执行. 如果没有, 执行第三步.
  - 第三步, 在Animal的原型中搜索, 搜索到返回或者执行, 如果没有, 搜索结束. (当然其实还有Object, 但是先不考虑)

当代码执行到第3步(上面代码的序号)的时候,

当代码执行第4步(上面代码的序号)时, 发生了变化

代码继续执行

- Person.prototype.personFunction = function (){}
- 当执行第5步, 也就是给Person的原型赋值了一个函数时, 事实上在给new Animal(Animal的实例)赋值了一个新的方法.

代码继续执行, 我们创建了一个Person对象

- 创建Person对象, person对象会有自己的属性, personProperty.
- 另外, person对象有一个__prototype__指向Person的原型.
- Person的原型是谁呢? 就是我们之前的new Animal(Animal的一个实例), 所以会指向它.

原型链简单总结:

- 通过实现原型链，本质上扩展了本章前面介绍的原型搜索机制。
- 当以读取模式访问一个实例属性时，首先会在实例中搜索该属性。如果没有找到该属性，则会继续搜索实例的原型。在通过原型链实现继承的情况下，搜索过程就得以沿着原型链继续向上。
- 在找不到属性或方法的情况下，搜索过程总是要一环一环地前行到原型链末端才会停下来。

### 1.2. 原型和实例的关系

如果我们希望确定原型和实例之间的关系, 有两种方式:

- 第一种方式是使用instanceof操作符，只要用这个操作符来测试实例与原型链中出现过的构造函数，结果就会返回true。
- 第二种方式是使用isPrototypeOf()方法。同样，只要是原型链中出现过的原型，都可以说是该原型链所派生的实例的原型，因此isPrototypeOf()方法也会返回true

instanceof操作符

```
// instanceof
alert(person instanceof Object) // true
alert(person instanceof Animal) // true
alert(person instanceof Person) // true
```

isPrototypeOf()函数

```
// isPrototypeOf函数
alert("isPrototypeOf函数函数")
alert(Object.prototype.isPrototypeOf(person)) // true
alert(Animal.prototype.isPrototypeOf(person)) // true
alert(Person.prototype.isPrototypeOf(person)) // true
```

### 1.3. 添加新的方法

添加新的方法

- 在第5步操作中, 我们为子类型添加了一个新的方法. 但是这里有一个注意点.
- 无论是子类中添加新的方法, 还是对父类中方法进行重写. 都一定要将添加方法的代码, 放在替换原型语句之后.
- 否则, 我们添加的方法将会无效.

错误代码引起的代码:

```
// 1.定义Animal的构造函数
function Animal() {
    this.animalProperty = "Animal"
}

// 2.给Animal添加方法
Animal.prototype.animalFunction = function () {
    alert(this.animalProperty)
}

// 3.定义Person的构造函数
function Person() {
    this.personProperty = "Person"
}

// 4.给Person添加方法
Person.prototype.personFunction = function () {
    alert(this.personProperty)
}

// 5.给Person赋值新的原型对象
Person.prototype = new Animal()

// 6.创建Person对象, 并且调用方法
var person = new Person()
person.personFunction() // 不会有任何弹窗, 因为找不到该方法
```

代码解析:

- 执行上面的代码不会出现任何的弹窗, 因为我们添加的方法是无效的, 被赋值的新的原型覆盖了.
- 正确的办法是将第4步和第5步操作换一下位置即可.

总结

- 其实这个问题没什么好说的, 只要你理解了原型链
- 但是, 切记在看图的过程中一样扫过, 因为这会让你错过很多细节, 对原型链的理解就会出现问题.

### 1.4. 原型链的问题

原型链对于继承来说:

- 原型链似乎对初学JavaScript原型的人来说, 已经算是比较高明的设计技巧了, 有些人理解起来都稍微有些麻烦.
- 但是, 这种设计还存在一些缺陷, 不是最理性的解决方案. (但是后续的解决方案也是依赖原型链, 无论如何都需要先理解它)

原型链存在的问题:

- 原型链存在最大的问题是关于引用类型的属性.
- 通过上面的原型实现了继承后, 子类的person对象继承了(可以访问)Animal实例中的属性(animalProperty).
- 但是如果这个属性是一个引用类型(比如数组或者其他引用类型), 就会出现问题.

引用类型的问题代码:

```
// 1.定义Animal的构造函数
function Animal() {
    this.colors = ["red", "green"]
}

// 2.给Animal添加方法
Animal.prototype.animalFunction = function () {
    alert(this.colors)
}

// 3.定义Person的构造函数
function Person() {
    this.personProperty = "Person"
}

// 4.给Person赋值新的原型对象
Person.prototype = new Animal()

// 5.给Person添加方法
Person.prototype.personFunction = function () {
    alert(this.personProperty)
}

// 6.创建Person对象, 并且调用方法
var person1 = new Person()
var person2 = new Person()

alert(person1.colors) // red,green
alert(person2.colors) // red,green

person1.colors.push("blue")

alert(person1.colors) // red,green,blue
alert(person2.colors) // red,green,blue
```

代码解析:

- 我们查看第6步的操作
- 创建了两个对象, 并且查看了它们的colors属性
- 修改了person1中的colors属性, 添加了一个新的颜色blue
- 再次查看两个对象的colors属性, 会发现person2的colors属性也发生了变化
- 两个实例应该是相互独立的, 这样的变化如果我们不制止将会在代码中引发一些列问题.

原型链的其他问题:

- 在创建子类型的实例时，不能向父类型的构造函数中传递参数。
- 实际上，应该说是没有办法在不影响所有对象实例的情况下，给父类型的构造函数传递参数。
- 从而可以修改父类型中属性的值, 在创建构造函数的时候就确定一个值.

## 二. 经典继承

> 为了解决原型链继承中存在的问题, 开发人员提供了一种新的技术: constructor stealing(有很多名称: 借用构造函数或经典继承或伪造对象), steal是偷窃的意思, 但是这里可以翻译成借用.

### 2.1. 经典继承的思想

经典继承的做法非常简单: 在子类型构造函数的内部调用父类型构造函数.

- 因为函数可以在任意的时刻被调用
- 因此通过apply()和call()方法也可以在新创建的对象上执行构造函数.

经典继承代码如下:

```
// 创建Animal的构造函数
function Animal() {
    this.colors = ["red", "green"]
}

// 创建Person的构造函数
function Person() {
    // 继承Animal的属性
    Animal.call(this)

    // 给自己的属性赋值
    this.name = "Coderwhy"
}

// 创建Person对象
var person1 = new Person()
var person2 = new Person()

alert(person1.colors) // red,greem
alert(person2.colors) // red,greem
person1.colors.push("blue")
alert(person1.colors) // red,green,blue
alert(person2.colors) // red,green
```

代码解析:

- 我们通过在Person构造函数中, 使用call函数, 将this传递进去.
- 这个时候, 当Animal中有相关属性初始化时, 就会在this对象上进行初始化操作.
- 这样就实现了类似于继承Animal属性的效果.

这个时候, 我们也可以传递参数, 修改上面的代码:

```
// 创建Animal构造函数
function Animal(age) {
    this.age = age
}

// 创建Person构造函数
function Person(name, age) {
    Animal.call(this, age)
    this.name = name
}

// 创建Person对象
var person = new Person("Coderwhy", 18)
alert(person.name)
alert(person.age)
```

### 2.2. 经典继承的问题

经典继承的问题:

- 对于经典继承理解比较深入, 你已经能发现: 经典继承只有属性的继承, 无法实现方法的继承.
- 因为调用call函数, 将this传递进去, 只能将父构造函数中的属性初始化到this中.
- 但是如果函数存在于父构造函数的原型对象中, this中是不会有对应的方法的.

回顾原型链和经典继承:

- 原型链存在的问题是引用类型问题和无法传递参数, 但是方法可以被继承
- 经典继承是引用类型没有问题, 也可以传递参数, 但是方法无法被继承.
- 怎么办呢? 将两者结合起来怎么样?

## 三. 组合继承

> 如果你认识清楚了上面两种实现继承的方式存在的问题, 就可以很好的理解组合继承了.
>
> 组合继承(combination inheritance, 有时候也称为伪经典继承), 就是将原型链和经典继承组合在一起, 从而发挥各自的优点.

### 3.1. 组合继承的思想

组合继承:

- 组合继承就是发挥原型链和经典继承各自的优点来完成继承的实现.
- 使用原型链实现对原型属性和方法的继承.
- 通过经典继承实现对实例属性的继承, 以及可以在构造函数中传递参数.

组合继承的代码:

```
// 1.创建构造函数的阶段
// 1.1.创建Animal的构造函数
function Animal(age) {
    this.age = age
    this.colors = ["red", "green"]
}

// 1.2.给Animal添加方法
Animal.prototype.animalFunction = function () {
    alert("Hello Animal")
}

// 1.3.创建Person的构造函数
function Person(name, age) {
    Animal.call(this, age)
    this.name = name
}

// 1.4.给Person的原型对象重新赋值
Person.prototype = new Animal(0)

// 1.5.给Person添加方法
Person.prototype.personFunction = function () {
    alert("Hello Person")
}

// 2.验证和使用的代码
// 2.1.创建Person对象
var person1 = new Person("Coderwhy", 18)
var person2 = new Person("Kobe", 30)

// 2.2.验证属性
alert(person1.name + "-" + person1.age) // Coderwhy,18
alert(person2.name + "-" + person2.age) // Kobe,30

// 2.3.验证方法的调用
person1.animalFunction() // Hello Animal
person1.personFunction() // Hello Person

// 2.4.验证引用属性的问题
person1.colors.push("blue")
alert(person1.colors) // red,green,blue
alert(person2.colors) // red,green
```

代码解析:

- 根据前面学习的知识, 结合当前的代码, 大家应该可以理解上述代码的含义.
- 但是我还是建议大家一定要多手动自己来敲代码, 来理解其中每一个步骤.
- 记住: 看懂, 听懂不一定真的懂, 自己可以写出来, 才是真的懂了.

### 3.2. 组合继承的分析

组合继承是JavaScript最常用的继承模式之一.

- 如果你理解到这里, 点到为止, 那么组合来实现继承只能说问题不大.
- 但是它依然不是很完美, 存在一些问题不大的问题.(不成问题的问题, 基本一词基本可用, 但基本不用)

组合继承存在什么问题呢?

- 组合继承最大的问题就是无论在什么情况下, 都会调用两次父类构造函数.
- 一次在创建子类原型的时候
- 另一次在子类构造函数内部(也就是每次创建子类实例的时候).
- 另外, 如果你仔细按照我的流程走了上面的每一个步骤, 你会发现: 所有的子类实例事实上会拥有两份父类的属性
- 一份在当前的实例自己里面(也就是person本身的), 另一份在子类对应的原型对象中(也就是person.__proto__里面)
- 当然, 这两份属性我们无需担心访问出现问题, 因为默认一定是访问实例本身这一部分的.

怎么解决呢?