// ARRAYS
// 1. By literals

let names = ['saniya','leena','vanita','malhar','sahil','harshal']
console.log(names)

// Accessing single value  // Array indexing starts from 0
console.log(names[0])
names.sort()
console.log(names)


//2. by using new constructor
let festivals = new Array("Dasara","Diwali","Padhava","Holi","Rakhi","Sakranti")
console.log(festivals)

let nums = new Array(23,45,67,879)
console.log(nums)

// 3. By declaring the size 
let n1 = new Array(105)
console.log(n1)
n1[4] = "Dagdu Sheth"
n1[78] = "Lavasa"
n1[150] = "Streets of Europe"
console.log(n1) // (151) [empty × 4, 'Dagdu Sheth', empty × 73, 'Lavasa', empty × 71, 'Streets of Europe']