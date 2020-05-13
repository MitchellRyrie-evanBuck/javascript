var date1 = new Date()
var date2 = new Date
var date3 = Date()

console.log('new Date()初始化时间为: ' + date1)
console.log('new Date初始化时间为: ' + date2)
console.log('Date()初始化时间为: ' + date3)
console.log(Date.now())

var date1 = new Date(2008, 7, 8)
var date2 = new Date(2008, 7, 8, 20, 18, 18)

console.log(date1)
console.log(date2)

var date = new Date('2008/8/8')
console.log(date)

var date1 = new Date(0);
var date2 = new Date(1000*3600*24*365); 

console.log(date1)
console.log(date2)

var date = new Date().getDate()
var day = new Date().getDay()

console.log('今天是这个月的第 ' + date + ' 天，这个星期的第 ' + day + ' 天')

var year = new Date().getFullYear()
console.log(year)

console.log(new Date().getYear())

console.log(new Date().getTime())

var date = new Date()
console.log('当前时间: ' + date)

date.setDate(24)
console.log('修改后的时间: ' + date)

var date = new Date().toString()
console.log('toString()方法得到的时间为:'+ date + ',类型为: ' + typeof date)











