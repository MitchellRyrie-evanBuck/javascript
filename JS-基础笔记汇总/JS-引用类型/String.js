var str1 = '这是一个字符串'
var str2 = new String('这是另一个字符串')

console.log((typeof str1) === 'string')
console.log(str2 instanceof String)


var msg = 'Hello World'

var lowerMsg = msg.toLowerCase()
var upperMsg = msg.toUpperCase()

console.log( msg );// Hello World
console.log( lowerMsg );// hello world
console.log( upperMsg );// HELLO WORLD


var str = 'Hello World!'

var charAt = str.charAt(2)
var charCodeAt = str.charCodeAt(2)
var codePointAt = str.codePointAt(2)

console.log(charAt, charCodeAt, codePointAt)


var email = 'tom@163@sohu.com'

console.log(email.indexOf('tom'))
console.log(email.indexOf('@', 5))

console.log(email.lastIndexOf('@'))
console.log(email.lastIndexOf('@', 5) )

console.log(email.indexOf('Mary'))

var str = 'javascript'

var result1 = str.slice(1, 3)
var result2 = str.slice(7, 9)

console.log(result1, result2)

var str = 'javascript'

var result1 = str.substring(1, 3)
var result2 = str.substring(7, 9)

console.log(result1, result2)

var str = 'javascript'

var result1 = str.substr(1, 2)
var result2 = str.substr(-10, 4)

console.log(result1, result2)











































