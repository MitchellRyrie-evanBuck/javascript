/*
*
*展开运算符 ...
*对象展开
*
*
* */

//声明一个对象
let chinese = {
    skin:'黄色皮肤',
    hair: '黑色头发',
    sayHi(){
        console.log('你好,你吃了吗?');
    }
}

//声明一个对象
//声明一个对象
let zhuBo = {
    skill: '跳唱rap打篮球,老铁双击666',
    song: '唱大碗宽面'
}

//声明一个对象
let linge = {
    // skin:'黄色皮肤',
    // hair: '黑色头发',
    // sayHi(){
    //     console.log('你好,你吃了吗?');
    // },
    // skill: '跳唱rap打篮球,老铁双击666',
    // song: '唱大碗宽面'

    ...chinese,
    ...zhuBo,
    gender:'男',
    hair: '白发苍苍'//重新给hair这个属性赋值，会覆盖原来的值.
}
console.log(linge);












