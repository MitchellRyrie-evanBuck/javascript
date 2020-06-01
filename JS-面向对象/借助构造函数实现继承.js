

// 就是在子对象的构造函数中调用父对象的构造函数
//  apply()   call()        ----------都允许传递指定对象的this   可以实现在子对象的构造函数中调用父对象的构造函数时，将子对象的this和父对象的this绑定在一起


// 定义父级构造函数
function Parent(){
    this.Parent = "parent"
}

/*
    parent构造函数中也存在this  -》 表示当前创建的对象是通过call()方法进行调用，并且传递实参，
    ---将child 和 parent构造函数创建的对象绑定在一起
*/ 

// 定义子级对象构造函数
function child(){
    // 调用父级构造函数    -----》 apply    call 
    Parent.apply(this)                // 去调用parent（）函数     将对象当实参传递                  

    this.child = "child"
}

// 两个this 相互指向

var child = new child()
console.log(child)

//  this    ------
            /*
                本身没有含义，必须要看当前调用环境
            */

















