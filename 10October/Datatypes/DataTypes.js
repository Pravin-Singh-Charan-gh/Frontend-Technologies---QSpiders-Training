let n = 10 
let f = 3.14
let s = 'hello'
let b = true
let u = undefined
let nl = null
let bi = 38383n
let sym = Symbol(8)
let obj = {
    name:'Jones',
    age:23
}
let arr = [18,20]
function fun(){
    res = 10+20
}

// Addition
// ============
// Number
// console.log(n+n)   //20
// console.log(n+f)  //13.14
// console.log(n+s)  //hello
// console.log(n+b)  //11
// console.log(n+u)  //NaN
// console.log(n+nl) //10
// console.log(n+bi) // ERROR : DataTypes.js:25 Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions
// console.log(n+sym)  //ERROR : Uncaught TypeError: Cannot convert a Symbol value to a number
// console.log(n+obj) //10[object Object] , implicitly convert the object into a string "[object Object]" and perform string concatenation
// console.log(n+arr)  //1018,20 , concatenates by converting both in strign
// console.log(n+fun)
// 10function fun(){
//     res = 10+20
// }


// Float
// console.log(f+f)  //6.28
// console.log(f+s)  //3.14hello
// console.log(f+b) //4.140000000000001
// console.log(f+u) //NaN
// console.log(f+nl)  //3.14
// console.log(f+bi) //ERROR 
// console.log(f+sym) //ERROR
// console.log(f+obj)  //3.14[object Object]
// console.log(f+arr)  //3.1418,20
// console.log(f+fun)  
// 3.14function fun(){
//     res = 10+20
// }

// String
// console.log(s+s) //hellohello
// console.log(s+b)  //hellotrue
// console.log(s+u)  //helloundefined
// console.log(s+nl)  //hellonull
// console.log(s+bi) //hello38383
// console.log(s+sym) //ERROR
// console.log(s+obj) //hello[object Object]
// console.log(s+arr)   //hello18,20
// console.log(s+fun)  
// hellofunction fun(){
//     res = 10+20
// }



// Boolean
// console.log(b+b)  //2
// console.log(b+u)  //NaN
// console.log(b+nl)  //1
// console.log(b+bi)  //ERROR
// console.log(b+sym) //ERROR
// console.log(b+obj)  //true[object Object]
// console.log(b+arr) //true18,20
// console.log(b+fun)
// truefunction fun(){
//     res = 10+20
// }

// Undefined
// console.log(u+u) //NaN
// console.log(u+nl) //NaN
// console.log(u+bi)  //ERROR
// console.log(u+sym)  //ERROR
// console.log(u+obj) //undefined[object Object]
// console.log(u+arr)  //undefined18,20
// console.log(u+fun)  
//undefinedfunction fun(){
//     res = 10+20
// }

// NULL
// console.log(nl+nl) //0
// console.log(nl+bi) // ERROR
// console.log(nl+sym) //ERROR
// console.log(nl+obj) // null[object Object]
// console.log(nl+arr) // null18,20
// console.log(nl+fun) 
// nullfunction fun(){
//     res = 10+20
// }


//BigInt
// console.log(bi+bi) //76766n
// console.log(bi+sym) //ERROR
// console.log(bi+obj) // 38383[object Object]
// console.log(bi+arr) //3838318,20
// console.log(bi+fun)
// 38383function fun(){
//     res = 10+20
// }


//SYMBOL
// console(sym+sym)  //ERROR : Uncaught TypeError: Cannot convert a Symbol value to a number
// console(sym+obj) //ERROR
// console(sym+arr)//ERROR
// console(sym+fun) //ERRO

// Object
// console.log(obj+obj) //[object Object][object Object]
// console.log(obj+arr) //[object Object]18,20
// console.log(obj+fun)
//[object Object]function fun(){
    // res = 10+20
// }


// ARRAY 
// console.log(arr+arr) //18,2018,20
// console.log(arr+fun)
// 18,20function fun(){
//     res = 10+20
// }

// FUNCTION
// console.log(fun+fun)
// function fun(){
//     res = 10+20
// }function fun(){
//     res = 10+20
// }

// ####################################################################################
// SUBSTRACTION
// ==============
// Number
// console.log(n-n)   //0
// console.log(n-f)  //6.859999999999999
// console.log(n-s)  //NaN
// console.log(n-b)  //9
// console.log(n-u)  //NaN
// console.log(n-nl) //10
// console.log(n-bi) // ERROR : DataTypes.js:25 Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions
// console.log(n-sym)  //ERROR : Uncaught TypeError: Cannot convert a Symbol value to a number
// console.log(n-obj) //NaN
// console.log(n-arr)  //NaN
// console.log(n-fun)  //NaN


// Float
// console.log(f-f)  //0
// console.log(f-s)  //NaN
// console.log(f-b) //2.14
// console.log(f-u) //NaN
// console.log(f-nl)  //3.14
// console.log(f-bi) //ERROR 
// console.log(f-sym) //ERROR
// console.log(f-obj)  //NaN
// console.log(f-arr)  //NaN
// console.log(f-fun)  //NaN


// String
// console.log(s-s) //NaN
// console.log(s-b)  //NaN
// console.log(s-u)  //NaN
// console.log(s-nl)  //NaN
// console.log(s-bi) //ERRO
// console.log(s-sym) //ERROR
// console.log(s-obj) //NaN
// console.log(s-arr)   //NaN
// console.log(s-fun)  //NaN


// Boolean
// console.log(b-b)  //0
// console.log(b-u)  //NaN
// console.log(b-nl)  //1
// console.log(b-bi)  //ERROR
// console.log(b-sym) //ERROR
// console.log(b-obj)  //NaN
// console.log(b-arr) //NaN
// console.log(b-fun) //NaN


// Undefined
// console.log(u-u) //NaN
// console.log(u-nl) //NaN
// console.log(u-bi)  //ERROR
// console.log(u-sym)  //ERROR
// console.log(u-obj) //NaN
// console.log(u-arr)  //NaN
// console.log(u-fun)  //NaN


// NULL
// console.log(nl-nl) //0
// console.log(nl-bi) // ERROR
// console.log(nl-sym) //ERROR
// console.log(nl-obj) // NaN
// console.log(nl-arr) // NaN
// console.log(nl-fun) //NaN

//BigInt
// console.log(bi-bi) //0n
// console.log(bi-sym) //ERROR
// console.log(bi-obj) // ERROR
// console.log(bi-arr) // ERROR
// console.log(bi-fun)  //ERROR


//SYMBOL
// console(sym-sym)  //ERROR : Uncaught TypeError: Cannot convert a Symbol value to a number
// console(sym-obj) //ERROR
// console(sym-arr)//ERROR
// console(sym-fun) //ERROR

// Object
// console.log(obj-obj) //NaN
// console.log(obj-arr) //NaN
// console.log(obj-fun) //NaN


// ARRAY 
// console.log(arr-arr) //NaN
// console.log(arr-fun) NaN

// FUNCTION
// console.log(fun-fun) // NaN