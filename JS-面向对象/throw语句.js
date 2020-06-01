// try{
//     console.log(v)
// }catch(e){
//     console.log("未定义")
// }finally{
    
// } 



function fn(v){
    if(v){
        return v
    }else{
        throw {name : "哈拉少"}
    }  
}

// console.log(fn(10))

// console.log(fn())
let reslut
try{
    let result = fn()
}catch(e){                         //e 接受的是throw抛出的内容
    reslut = "unkown"
    console.log(e.name)
}
console.log(reslut)

































