// 1. filter
// 2. map
// 3. forEach
// 4. reduce
// 5. reduceRight
// 6. some
// 7. every


let arr = [10,12,13,14,9,100]

let arr1 = [100,120,130,140,90,100]

let resSome = arr.some((n)=>n>13)
console.log(resSome)

let resEvery1 = arr.every((n)=>{
    console.log(n)
    return n>13
})
console.log(resEvery1)

let resEvery2 = arr1.every((n)=>{
    console.log(n)
    return n>13
})

console.log(resEvery2)