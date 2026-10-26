function fun(){
    console.log("Hello, I am Function")
}
fun()


function task(a,b){
    console.log(a+b)
}
task(10,20)
task(30,40)
task(10) // gives NaN
// NaN(not a number): Special type of output appears when the parameter supposed to receive or accept the integer value but it wont

task(10,"10") //1010
task(10,true) //11
task(10,false) //10
task(10,undefined) //NaN
task(10,null)  //10

task(3.14,"Hello")


function sub(a,b){
    console.log(a-b);
}
sub(10,20)
sub(10,"hello") // NaN
sub("hello",10) //NaN
sub(10,true)  //9
sub(10,undefined) // NaN
sub(10,null) //10

function mul(a,b){
    console.log(a*b)
}
mul(10,20) //200
mul(10,3.14) //31.4000000
mul(10,"hello") //NaN
mul("hello"*10) //NaN

mul(10,true) //10
mul(10,false) //0
mul(10,undefined) //NaN
mul(10,null) //0
mul(3.1)

let n = 10, f = 3.14, s = 'hello', b = true, u = undefined, nl = null, bi = 38383n, sym = Symbol(8)
let obj = {
    'name':'Jones',
    'age':23
}
let arr = [1,2]
function fun(){
    res = 10+20
}
console(i)