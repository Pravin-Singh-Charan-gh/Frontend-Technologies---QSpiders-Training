let foods = ['biryani','dose','Idly','pavbhaji','misal','Idly']
console.log(foods)

// .indexOf
console.log(foods.indexOf('dose'))  //1

// includes
console.log(foods.includes('Dose')) //false

// lastIndexOf
console.log(foods.lastIndexOf('Idly'))  //5
 
// .sort()
foods.sort()
console.log(foods)  //(6) ['Idly', 'Idly', 'biryani', 'dose', 'misal', 'pavbhaji']
let nums = [33,1345,223,5756,231,7897,2312]
nums.sort()  // (7) [1345, 223, 231, 2312, 33, 5756, 7897]
console.log(nums)  // by default it sort on the basis of string
// We need to use arrow fxn to sort nums
nums.sort((a,b)=>a-b)
console.log(nums) //(7) [33, 223, 231, 1345, 2312, 5756, 7897]


// .reverse()
foods.reverse()
console.log(foods)  //(6) ['pavbhaji', 'misal', 'dose', 'biryani', 'Idly', 'Idly']

let car1 = ['Gwagon','Defender']
let car2 = ['Omni','Alto']
let car3 = ['Safari','rools royce','BMW']

console.log(car1.concat(car2,car3))  // only for this expression array is updates. original array is as it is

// join

