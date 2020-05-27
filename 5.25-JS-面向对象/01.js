// js 面向对象
// 现有的人 还是现有的人类呢？
// 现有人类 再有对象 是C++ php 这些语言当中的特性 他们是先构造好类 然后才能创造对象
// 人 人类
// 原本没有人 一个猴子 被雷劈了 突然间会直立行走了
// 雷劈了 变异了 种类下的同一类的多了 


var ori = {};
var c = {cell:1};
var bird = {
	leg:2,
	song:function(){
		console.log("我是一只小小鸟")
	}
}

// java php c++ 通过类构造的对象 都是由一个模板出来的

bird.wings = 2;
delete bird.song



// 构造函数

function Dog() {
	this.leg = 4;
	this.bark = function () {
		console.log('wangwang')
	}
}
// this 是谁？ 谁调用 就指向谁



// 1. 构造了一个空对象 {} 
// 2. this 的指向 指向这个空对象
// 3. 将属性赋予 空对象
// 4. 将对象引用地址赋值给 dog 变量

//console.log(new Dog())

//var dog = {
//	name:'xiaohei',
//	bark: function () {
//		console.log("wangwang")
//	}
//}

// 私有属性
// 封装性
// 开闭原则-关闭一部分权限。开放一个窗口。

// 闭包/作用域

function Girl(name,bf) {
	var love = bf;
	this.name = name;
	this.showlove = function () {
		return love
	}
	this.movelove = function () {
		love = "薛潘"
	}
}

var daiyu = new Girl('林黛玉',"贾宝玉")
//console.log(daiyu.movelove())

daiyu.love = "矮大紧";

//console.log(daiyu)
//console.log(daiyu.showlove())
// 封装性 其实就是控制权之争 闭包完成的

// 原型继承和原型链

// 照猫画虎

//function Cat() {
//	this.climb = function () {
//		console.log('我会爬树')
//	}
//}
//
//function Tiger() {
//	this.bark = function () {
//		console.log('我是百兽之王')
//	}
//}
//
//Tiger.prototype = new Cat()
//Tiger.prototype.song = function () {
//	console.log('我会唱歌')
//}

//var tiger = new Tiger()
//console.log(tiger)

//tiger.bark()
//tiger.climb()

//console.log(tiger.__proto__)
//tiger.song()


// 原型冒充

// js当中，我不仅可以通过 原型来继承一些属性和方法，还可以用其他的方式

//function Cat(leg,tail) {
//	this.leg = leg;
//	this.tail = tail;
//	this.climb = function () {
//		console.log('我会爬树');
//	}
//}
//
//
//function Tiger(leg,tail,color) {
//	// 让 Cat 的this 指向 Tiger 的this
//	this.parent = Cat;
//	this.parent.call(this,leg,tail);
//	delete this.parent;
//	this.color = color;
//}
//console.log(new Tiger(4, 1, 'yellow'))

// 复制继承

function Cat(leg,tail) {
	this.leg = leg;
	this.tail = tail;
	this.climb = function () {
		console.log('我会爬树');
	}
}



function Tiger(color) {
	this.color = color;
	this.extend = function(parent){
		for(var key in parent){
			this[key] = parent[key];
		}
	}
}
var tiger = new Tiger('yellow')
tiger.extend(new Cat(4, 1));
//console.log(tiger)

// 多态 一种形态到另一种形态的转换
// 鸭子类型
// 一群鸟 看起来像鸭子 叫的也像鸭子叫 它就是鸭子

var arr = {0:1,1:2,2:3,length:3};
//[1,2,3]
//[].slice.call(arr,0,1)

console.log([].slice.call(arr,0,2));

var str = ['h','e','l','l','0'];
console.log(str[0]);