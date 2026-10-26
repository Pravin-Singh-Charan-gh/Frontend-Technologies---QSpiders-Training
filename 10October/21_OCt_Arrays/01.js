
// slice() and splice()


// Slice
// slice Syntax :  .slice(start indx, end indx+1)

let persons = ['Vinayak',"Omkar","Manju","Chetan","Chandana","Gayatri","Shradhha","Pooja"]

console.log(persons)

let boys = persons.slice(0,4)
console.log(boys)

let girls = persons.slice(4)
console.log(girls)


// Splice 
// Syntax : .splice(start indx, delete count, items to be added)
let places = ["Pune","Nashik","Nagpur","Bhopal","Satara","Nanded","Kolhapur"]
console.log(places)
// Adding array elements to the array
places.splice(3,0,"Ch. Sambhajinagar")
console.log(places)

// Deleting array elements 
places.splice(4,1)  // Removing Bhopal
console.log(places)

// replacing array elements
places.splice(0,8,"Maharashtra","Karnataka","Goa","Gujrat")
console.log(places)


let nums = [7,8,918,19,45,11,16]
console.log(nums)


let arr = ['Python',"Java"]
nums.splice(0,2,1000,2000,3000)
console.log(nums)
nums.splice(7,0,arr[0],arr[1])
console.log(nums)


// NESTED ARRAY
let trainers = ['Vijay',"Harsha",'Mohit',"Rohit",["Webtech","React","Java","SQL"]]

console.log(trainers[3])
console.log(trainers[4])
console.log(trainers[4][0])