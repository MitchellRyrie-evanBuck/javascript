## JavaScript面向对象详解（四）

## 一. 原型式继承

### 1.1. 原型式继承的思想

原型式继承的核心函数:

```
// 封装object()函数
function object(o) {
    function F() {}
    F.prototype = o
    return new F()
}
```

代码解析:

- 在object()函数内部, 先创建一个临时的构造函数.
- 然后将传递的对象作为这个构造函数的原型
- 最后返回了这个临时类型的一个新的实例.
- 事实上, object()对传入的对象执行了一次浅复制.

### 1.2. 原型式继承的使用

使用原型式继承:

```
// 使用原生式继承
var person = {
    name: "Deity",
    colors: ["red", "green"]
}

// 通过person去创建另外一个对象
var person1 = object(person)
person1.name = "devil"
person1.colors.push("blue")

alert(person1.name) // devil
alert(person1.colors) // red,green,blue

alert(person.name) // Deity
alert(person.colors) // red,green,blue
```

代码解析:

- 这种方式和我们传统意义上理解的继承有些不同. 它做的事情是通过一个对象去创建另外一个对象.(利用person去创建person1)
- 当然, person1中继承过来的属性是放在了自己的原型对象中的.
- 也可以给person1自己再次添加name属性, 这个时候name才是在实例本身中.
- 但是如果是修改或者添加引用类型的内容, 还是会引起连锁反应.
- 可能暂时你看不到这些代码的意义, 但是这些代码是我们后续终极方案的前提思想, 所以先看看和练习一下这些代码.

针对这种思想, ES5中新增了Object.create()方法来规范化了原型式继承.

- 也就是上面的代码可以修改成这样.(只是将object函数修改成了Object.create)

```
// 使用原生式继承
var person = {
    name: "Deity",
    colors: ["red", "green"]
}

// 通过person去创建另外一个对象
var person1 = Object.create(person)
person1.name = "devil"
person1.colors.push("blue")

alert(person1.name) // devil
alert(person1.colors) // red,green,blue

alert(person.name) // Deity
alert(person.colors) // red,green,blue
```

Object.create()还可以传入第二个参数:

- 第二个参数用于每个属性的自定义描述.
- 比如person1的name我们希望修改成"Kobe", 就可以这样来做

```
// 使用原型式继承
var person = {
    name: "Deity",
    colors: ["red", "green"]
}

// 通过person去创建另外一个对象
var person1 = Object.create(person, {
    name: {
        value: "devil"
    }
})
person1.colors.push("blue")

alert(person1.name) // devil
alert(person1.colors) // red,green,blue

alert(person.name) // Deity
alert(person.colors) // red,green,blue
```

### 1.3. 原型式继承的问题

- 原型式继承的的优点和缺点:

- - 如果我们只是希望一个对象和另一个对象保持类似的情况下, 原型式继承完全可以胜任, 这是它的优势.
  - 但是, 原型式继承依然存在属性共享的问题, 就像使用原型链一样.

## 二. 寄生式继承

### 2.1. 寄生式继承的思想

寄生式(Parasitic)继承

- 寄生式(Parasitic)继承是与原型式继承紧密相关的一种思想, 并且同样由道格拉斯·克罗克福德(Douglas Crockford)提出和推广的
- 寄生式继承的思路是结合原型类继承和工厂模式的一种方式.
- 即创建一个封装继承过程的函数, 该函数在内部以某种方式来增强对象, 最后再将这个对象返回.

寄生式函数多增加了一个核心函数:

```
// 封装object函数
function object(o) {
    function F() {}
    F.prototype = o
    return new F()
}

// 封装创建新对象的函数
function createAnother(original) {
    var clone = object(original)
    clone.sayHello = function () {
        alert("Hello JavaScript")
    }
    return clone
}
```

### 2.2. 寄生式继承的应用

我们来使用一下寄生式继承

```
// person对象
var person = {
    name: "Deity",
    colors: ["red", "green"]
}

// 新的对象
var person1 = createAnother(person)
person1.sayHello()
```

代码解读:

- 我们基于person对象, 创建了另外一个对象person1.
- 在最新的person1对象中, 不仅会拥有person的属性和方法, 而且还有自己定义的方法.

### 2.3. 寄生式继承的问题

寄生式继承存在的问题:

- 寄生式继承和原型式继承存在一样的问题, 引用类型会共享. (因为是在原型式继承基础上的一种封装)
- 另外寄生式继承还存在函数无法复用的问题, 因为每次createAnother一个新的对象, 都需要重新定义新的函数.

## 三. 寄生组合式继承

### 3.1. 寄生组合式继承的思想

寄生组合式继承

- 现在我们来回顾一下之前提出的比较理想的组合继承

- - 组合继承是比较理想的继承方式, 但是存在两个问题:
  - 问题一: 构造函数会被调用两次: 一次在创建子类型原型对象的时候, 一次在创建子类型实例的时候.
  - 问题二: 父类型中的属性会有两份: 一份在原型对象中, 一份在子类型实例中.

- 事实上, 我们现在可以利用寄生式继承将这两个问题给解决掉.

- - 你需要先明确一点: 当我们在子类型的构造函数中调用父类型.call(this, 参数)这个函数的时候, 就会将父类型中的属性和方法复制一份到了子类型中. 所以父类型本身里面的内容, 我们不再需要.
  - 这个时候, 我们还需要获取到一份父类型的原型对象中的属性和方法.
  - 能不能直接让子类型的原型对象 = 父类型的原型对象呢?
  - 不要这么做, 因为这么做意味着以后修改了子类型原型对象的某个引用类型的时候, 父类型原生对象的引用类型也会被修改.
  - 我们使用前面的寄生式思想就可以了.

寄生组合式的核心代码:

```
// 定义object函数
function object(o) {
    function F() {}
    F.prototype = o
    return new F()
}

// 定义寄生式核心函数
function inhreitPrototype(subType, superType) {
    var prototype = object(superType.prototype)
    prototype.constructor = subType
    subType.prototype = prototype
}
```

### 3.2. 寄生组合式继承的应用

直接给出使用的代码, 也是我们以后使用继承的终极方式

```
// 定义Animal构造函数
function Animal(age) {
    this.age = age
    this.colors = ["red", "green"]
}

// 给Animal添加方法
Animal.prototype.animalFunction = function () {
    alert("Hello Animal")
}

// 定义Person构造函数
function Person(name, age) {
    Animal.call(this, age)
    this.name = name
}

// 使用寄生组合式核心函数
inhreitPrototype(Person, Animal)

// 给Person添加方法
Person.prototype.personFunction = function () {
    alert("Hello Person")
}
```

代码的优点:

- 这种方式的高效体现在现在它只调用了一次Animal的构造函数.
- 并且也避免了在原型上面多出的多余属性, 而且原型之间不会产生任何的干扰(子类型原型和父类型原型之间).
- 在ES5中, 普遍认为寄生组合式继承是最理想的继承范式.