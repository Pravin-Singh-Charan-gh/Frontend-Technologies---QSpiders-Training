function isLower(s){
    for(let i = 0;i<s.length;i++){
        if('a'<=s[i] && s[i]<='z'){
            continue
        }
        else {
            return false 
        }
    }
    return true 
}
function isUpper(s){
    for(let i = 0;i<s.length;i++){
        if (s[i]<'A' || s[i]>'Z'){
            return false
        }
        return true
    }
}
// Take one array of numbers and string and perform 7 type of operations on this array with the help of filter method
let arr = [4,5,7,'abc','12313',23,78,43,'cyg','hello world','aman','ulloo','sohan','AMit','Naman','Dev']
let res1 = arr.filter((ele)=> typeof ele == 'number'  )
console.log(res1)   //only number
let res2 = arr.filter((ele)=>typeof ele =='string')
console.log(res2)  //extracting string
let res3 = arr.filter((ele)=>{
    return (typeof ele=='number' && ele%2==0)
})
console.log(res3)  //even number
let res4 = arr.filter((ele)=>{
    return (typeof ele=='number' && ele%2)
})
console.log(res4)  //odd number
let res5 = arr.filter((ele)=>{
    return typeof ele=='string' && ele.length>5
})
console.log(res5) // strings with size more than 
let res6 = arr.filter((ele)=>{
    return typeof ele == 'string' && isLower(ele)
})
console.log(res6)

let res7 = arr.filter((ele)=>{
    return typeof ele=='string' && isUpper(ele)
})
console.log(res7)