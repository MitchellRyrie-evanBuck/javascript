function Hero(){
    this.name = '111'
}

// Hero.prototype.name = '222'//false

var hero = new Hero()

/*
    Object. hasOwnProperty(prop)方法
        作用 - 判断当前指定属性是否为自有属性
        参数
            prop - 表示指定属性 名称
        返回值-布尔值
            true - 表示不存在指定属性是自有属性
            false - 表示不存在指定属性是原型属性
*/ 

// console.log(hero.hasOwnProperty('name'))//true


/*
    使用in关键字检测对象的属性
        作用 - 判断对象中是否存在指定属性(自有属性或原型属性)
        返回值 - 布尔值
            true - 表示存在指定的属性
            false - 表示不存在指定的属性
*/ 
console.log('name' in hero)//true