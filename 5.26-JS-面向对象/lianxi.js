function t3(greet){
    console.log(greet)
    function greet(){

    }
    greet = "hello"
    console.log(greet)
}

t3(null)


function a(b){
    console.log(b)
    function b(){
        console.log(b)
    }
    b()
}

a(1)