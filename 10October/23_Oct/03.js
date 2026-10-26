// forEach()  ele,ind,arr
// returns undefined

let nums = [20,45,90,12,34,67,89]
let sum = 0
nums.forEach((ele)=>sum+=ele)
console.log(sum)

nums.forEach((ele,index,arr)=>{
    console.log(`${ele} ${index} ${arr}`)
})

// 20 0 20,45,90,12,34,67,89
// 45 1 20,45,90,12,34,67,89
// 90 2 20,45,90,12,34,67,89
// 12 3 20,45,90,12,34,67,89
// 34 4 20,45,90,12,34,67,89
// 67 5 20,45,90,12,34,67,89
// 89 6 20,45,90,12,34,67,89


// reduce() ele1,ele2, index, arr
// sum
sum = nums.reduce((a,b)=>a+b)
console.log(sum)

nums.reduce((ele1,ele2,ind,arr)=>{
    console.log(`${ele} ${index} [${arr}]`)
})
// reduceRight : same as reduce but goes from right to left
sum = nums.reduceRight((a,b)=>a-b)
console.log(sum)

// Python 
// HTML CSS JS 
// React Bootstrap 
// SQL

// Django
// Devops