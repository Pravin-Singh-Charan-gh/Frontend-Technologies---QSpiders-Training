//MAP
// Map() is a array iteration method which is used to pass condition on every array element and gives result to every array element.

let nums = [10,21,32,43,54,65]
let plus10 = nums.map((ele)=>ele+10)
console.log(plus10)  //(6) [20, 31, 42, 53, 64, 75]

let plus10_if = nums.map((ele)=>{
    if(ele>40){
        return ele+10
    }
})

console.log(plus10_if)  // [undefined, undefined, undefined, 53, 64, 75]

let evens = nums.map((ele)=>ele%2==0)

console.log(evens)  // [true,false,true,false,true,false]

// map accepts 3 args
nums.map((ele,index,arr)=>{
    console.log(`${ele} ${index} ${arr}`)
})

// 10 0 10,21,32,43,54,65
// 02.js:22 21 1 10,21,32,43,54,65
// 02.js:22 32 2 10,21,32,43,54,65
// 02.js:22 43 3 10,21,32,43,54,65
// 02.js:22 54 4 10,21,32,43,54,65
// 02.js:22 65 5 10,21,32,43,54,65