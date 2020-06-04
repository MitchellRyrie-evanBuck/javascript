function fn1(v){
    var v1 = 100
    // console.log(v2)
    v(v1)
}

function fn2(v){
    var v2 = 200
    console.log(v)
}

fn1(fn2)
// fn2()