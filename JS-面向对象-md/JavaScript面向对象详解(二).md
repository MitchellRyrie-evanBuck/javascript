# JavaScript面向对象(二)

## 一. 理解原型模式

### 1.1. 什么是原型呢?

你需要先知道一个事实:

- 我们创建的每个函数都有一个prototype（原型）属性
- 这个属性是一个指针，指向一个对象
- 而这个对象的作用是存放这个类型创建的所有实例共享的属性和方法。
- 指向的这个对象, 就是我们的所谓的原型对象.

原型对象的作用:

- 使用原型对象的好处是可以让所有对象实例共享它所包含的属性和方法。
- 换句话说，不必在构造函数中定义对象实例的信息，而是可以将这些信息直接添加到原型对象中。

我们来看看原型对象的使用:

```
// 创建对象的构造函数
function Person() {}

// 通过原型对象来设置一些属性和值
Person.prototype.name = "Coderwhy"
Person.prototype.age = 18
Person.prototype.height = 1.88
Person.prototype.sayHello = function () {
    alert(this.name)
}

// 创建两个对象, 并且调用方法
var person1 = new Person()
var person2 = new Person()

person1.sayHello() // Coderwhy
person2.sayHello() // Coderwhy
```

代码解析:

- 在上面的代码中, 我们没有给实例对象单独设置属性和方法, 而是直接设置给了原型对象.
- 而原型对象的作用是可以让所有的对象来共享这些属性和方法.
- 因此, 我们调用sayHello()方法时, 它们打印的结果是一样的, 它们是共享的.

### 1.2. 深入原型对象

原型对象的创建:

- 无论什么时候，只要创建了一个新函数，就会根据一组特定的规则为该函数创建一个prototype属性，这个属性指向函数的原型对象。

原型上的constructor属性：

- 默认情况下，所有原型对象都会自动获得一个constructor（构造函数）属性，这个属性包含一个指向prototype属性所在函数的指针。
- 用我们上面的例子来说, Person.prototype.constructor指向Person。
- 也就是原型对象自身来说, 只有一个constructor属性, 而其他属性可以由我们添加或者从Object中继承.

新的实例创建时, 原型对象在哪里呢?

- 当调用构造函数创建一个新实例后，该实例的内部将包含一个内部属性，该属性的指针, 指向构造函数的原型对象。
- 这个属性是_*proto*_
- 简单说, 每个实例中, 其实也会有一个属性, 该属性是指向原型对象的.

```
// 原型对象中有一个属性: constructor属性
// 属性指向Person函数
console.log(Person.prototype.constructor); // Person函数

// 对象实例也有一个属性指向原型
console.log(person1.__proto__); // 原型对象
console.log(Person.prototype); // 原型对象
console.log(person1.__proto__ === Person.prototype); // true
```

解析:

- 上面的案例解析了Person构造函数、Person的原型属性以及Person现有的两个实例之间的关系
- Person.prototype指向原型对象, 而Person.prototype.constructor又指回了Person.
- 原型对象中除了包含constructor属性之外，还包括后来添加的其他属性。
- Person的每个实例——personl和person2都包含一个内部属性_*proto*_，该属性也指向原型对象；

对象搜索属性和方法的过程:

- 每当代码读取某个对象的某个属性时，都会执行一次搜索，也就是要找到给定名称的属性。

- 搜索首先从`对象实例本身`开始

- - 如果在实例中找到了具有给定名字的属性，则返回该属性的值；

- 如果没有找到，则继续搜索指针指向的原型对象，在原型对象中查找具有给定名字的属性

- - 如果在原型对象中找到了这个属性，则返回该属性的值。

- 也就是说，在我们调用personl.sayHello()的时候，会先后执行两次搜索。

- 现在我们也能理解, 为什么所有的实例中都包含一个constructor属性, 这是因为默认所有的原型对象中都包含了该属性.

可以通过__proto__来修改原型的值(通常不会这样修改, 知道即可)

- 你可以理解为什么person1修改了name后, person2也会修改吗?
- 通过上面的图, 自己再来理解一下吧.

```
person1.sayHello() // Coderwhy
person2.sayHello() // Coderwhy

person1.__proto__.name = "Kobe"

person1.sayHello() // Kobe
person2.sayHello() // Kobe
```

但是要注意下面的情况:

- 当我们给person1.name进行赋值时, 其实在给person1实例添加一个name属性.
- 这个时候再次访问时, 就不会访问原型中的name属性了.

```
// 创建两个对象, 并且调用方法
var person1 = new Person()
var person2 = new Person()

person1.sayHello() // Coderwhy
person2.sayHello() // Coderwhy

// 给person1实例添加属性
person1.name = "Kobe"
person1.sayHello() // Kobe, 来自实例
person2.sayHello() // Coderwhy, 来自原型
```

通过hasOwnProperty判断属性属于实例还是原型.

```
// 判断属性属于谁
alert(person1.hasOwnProperty("name")) // true
alert(person2.hasOwnProperty("name")) // false
```

### 1.3. 简洁的原型语法

简洁语法概述:

- 如果按照前面的做法, 每添加一个原型属性和方法, 都要敲一遍Person.prototype.
- 为了减少不必要的输入, 另外也为了更好的封装性, 更常用的做法是用一个包含所有属性和方法的对象字面量来重写整个原型对象.

字面量重写原型对象:

```
// 定义Person构造函数
function Person() {}

// 重写Person的原型属性
Person.prototype = {
    name: "Coderwhy",
    age: 18,
    height: 1.88,
    
    sayHello: function () {
        alert(this.name)
    }
}
```

注意:

- 我们将Person.prototype赋值了一个新的对象字面量, 最终结果和原来是一样的；
- 但是: constructor属性不再指向Person了；
- 前面我们说过, 每创建一个函数, 就会同时创建它的prototype对象, 这个对象也会自动获取constructor属性；
- 而我们这里相当于给prototype重新赋值了一个对象, 那么这个新对象的constructor属性, 会指向Object构造函数, 而不是Person构造函数了；

```
// 创建Person对象
var person = new Person()

alert(person.constructor === Object) // true
alert(person.constructor === Person) // false

alert(person instanceof Person) // true
```

如果在某些情况下, 我们确实需要用到constructor的值, 可以手动的给constructor赋值即可

```
// 定义Person构造函数
function Person() {}

// 重写Person的原型属性
Person.prototype = {
    constructor: Person,
    name: "Coderwhy",
    age: 18,
    height: 1.88,

    sayHello: function () {
        alert(this.name)
    }
}

// 创建Person对象
var person = new Person()

alert(person.constructor === Object) // false
alert(person.constructor === Person) // true

alert(person instanceof Person) // true
```

上面的方式虽然可以, 但是也会造成constructor的[[Enumerable]]特性被设置了true.

- 默认情况下, 原生的constructor属性是不可枚举的.
- 如果希望解决这个问题, 就可以使用我们前面介绍的Object.defineProperty()函数了.

```
// 定义Person构造函数
function Person() {}

// 重写Person的原型属性
Person.prototype = {
    name: "Coderwhy",
    age: 18,
    height: 1.88,

    sayHello: function () {
        alert(this.name)
    }
}

Object.defineProperty(Person.prototype, "constructor", {
    enumerable: false,
    value: Person
})
```

### 1.4. 修改原型属性

考虑下面的代码执行是否会有问题:

```
// 定义Person构造函数
function Person() {}

// 创建Person的对象
var person = new Person()

// 给Person的原型添加方法
Person.prototype.sayHello = function () {
    alert("Hello JavaScript")
}

// 调用方法
person.sayHello()
```

代码解析:

- 我们发现代码的执行没有任何问题.
- 因为在创建person的时候, person的__proto__也是指向的Person.prototype.
- 所以, 当动态的修改了Person.prototype中的sayHello属性时, person中也可以获取到该属性

我们再来看下面的代码会不会有问题:

```
// 定义Person构造函数
function Person() {}

// 创建Person的对象
var person = new Person()

// 给Person的原型添加方法
Person.prototype = {
    constructor: Person,
    sayHello: function () {
        alert("Hello JavaScript")
    }
}
// 调用方法
person.sayHello()
```

代码解析:

- 代码是不能正常运行的. 因为Person的prototype指向了一个新的对象.
- 而最初我们创建的person依然指向原来的原型对象, 原来的原型对象没有sayHello()函数.
- 当然, 如果再次之后, 再创建的Person对象, 是可以调用sayHello()的, 但是再次之前创建的, 没有该方法.

### 1.5. 原型对象问题

原型对象也有一些缺点:

- 首先, 它不再有为构造函数传递参数的环节, 所有实例在默认情况下都将有相同的属性值.
- 另外, 原型中所有的属性是被很多实例共享的, 这种共享对于函数来说非常适合, 对于基本属性通常情况下也不会有问题. (因为通过person.name直接修改时, 会在实例上重新创建该属性名, 不会在原型上修改. 除非使用person.__proto__.name修改).
- 但是, 对于引用类型的实例, 就必然会存在问题.

考虑下面代码的问题:

```
// 定义Person构造函数
function Person() {}

// 设置Person原型
Person.prototype = {
    constructor: Person,
    name: "Coderwhy",
    age: 18,
    height: 1.88,
    hobby: ["Basketball", "Football"],

    sayHello: function () {
        alert("Hello JavaScript")
    }
}

// 创建两个person对象
var person1 = new Person()
var person2 = new Person()

alert(person1.hobby) // Basketball,Football
alert(person2.hobby) // Basketball,Football

person1.hobby.push("tennis")

alert(person1.hobby) // Basketball,Football,tennis
alert(person2.hobby) // Basketball,Football,tennis
```

OK, 我们会发现, 我们明明给person1添加了一个爱好, 但是person2也被添加到一个爱好.

- 因为它们是共享的同一个数组.
- 但是, 我们希望每个人有属于自己的爱好, 而不是所有的Person爱好都相同.

## 二. 组合构造函数和原型模式

> 创建自定义类型的最常见方式，就是组合使用构造函数模式与原型模式。
>
> 构造函数模式用于定义实例属性，而原型模式用于定义方法和共享的属性。
>
> 结果，每个实例都会有自己的一份实例属性的副本，但同时又共享着对方法的引用，最大限度地节省了内存。
>
> 另外，这种混成模式还支持向构造函数传递参数；可谓是集两种模式之长。

组合构造函数和原型模式的代码

```
// 创建Person构造函数
function Person(name, age, height) {
    this.name = name
    this.age = age
    this.height = height
    this.hobby = ["Basketball", "Football"]
}

// 重新Peron的原型对象
Person.prototype = {
    constructor: Person,
    sayHello: function () {
        alert("Hello JavaScript")
    }
}

// 创建对象
var person1 = new Person("Coderwhy", 18, 1.88)
var person2 = new Person("Kobe", 30, 1.98)

// 测试是否共享了函数
alert(person1.sayHello == person2.sayHello) // true

// 测试引用类型是否存在问题
person1.hobby.push("tennis")
alert(person1.hobby)
alert(person2.hobby)
```

如果理解了原型, 上面的代码非常好理解.

- person1和person2各有一份自己的属性, 但是方法是共享的.