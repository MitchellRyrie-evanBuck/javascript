//作用域链
var a = 'a'
console.log(a)

function fun(){
    var b = 'b'
    console.log(a)
    console.log(b)

    function fn(){
        var c = 'c'//相对于f函数作用域的话，c相当于全局变量
        console.log(a)
        console.log(b)
        console.log(c)

        function f(){//函数作用域
            var d = 'd'
            console.log(a)
            console.log(b)
            console.log(c)
            console.log(d)
        }
        f()
    }
    fn()
}
fun()