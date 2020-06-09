//用于捕获指定语句块中的错误或异常
try{
    console.log(v)//调用未定义的变量-->报错
}
//用于处理try语句中出现的错误
catch(error){
    console.log('你输入的是错误的信息')
}
// 终结块--catch语句无法处理try语句中的错误或异常时，执行finally语句中的内容
finally{

}