function fn(){
    console.log(this.v)
}
var v=100

fn.call(null)


var result=Math.max.apply(null,[1,2,3,4,5,6])
console.log(result)//在编辑器中因为不是window环境所以输出是undefined   NaN
// 在浏览器里面是100   6