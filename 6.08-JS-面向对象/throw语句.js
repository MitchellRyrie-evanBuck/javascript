function fn(v){
    if(v){
        return v
    }else{
        /**
         * throw语句--人为抛出错误或者异常
         * *语法结构--throw异常挫或错误的表达式
         *      *表达式允许是任意类型的内容
         * *作用--预判断当前使用的变量、函数或对象是否存在
         */
        // throw new Error();
        throw {name:'林俊杰'}
    }
}
var result
try{
    result=fn()
}catch(e){
    result='unkown'
    console.log(e.name)
}
console.log(result)