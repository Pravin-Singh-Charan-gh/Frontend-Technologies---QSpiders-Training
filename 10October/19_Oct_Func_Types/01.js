// Anonymous Function

// task() //Error cannot access task before initialization
let task = function(){
    console.log("Hello")
}
task()



// Scopes
// global scope (outside all the blocks)

console.log(x)  //50
{
    // local scope
    var x = 50
    console.log(x)  //50
}
    console.log(x)  //50

// console.log(a) //a is not defined
// function scope
let fun = function(){
    var a = 10
    console.log(a)
}
fun()
// console.log(a) //a is not defined


// block scope
console.log(b)   //20
if(true){
    var b = 20
    console.log(b)
}
console.log(b)  //20