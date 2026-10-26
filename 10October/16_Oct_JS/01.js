var age 
console.log(age)
age = 20
console.log(age)

// Global or public identifier
place = "Pune"
console.log(window)

// Hoisting with name identifier
console.log(name)
var name = "Sairaj"
console.log(name)

// Hoisting with another identifer
// Implicitly the declaration will move to top of the code or JS
console.log(word)
var word = "Javascript"
console.log(word)

// Hoisting is not possible with let and const
// console.log(place2)    //ERROR
let place2 = "Mumbai"
console.log(place2)

// IMPORTANT ####################################################################################
const name1 = "Gayatri"
if(true){
    // console.log(name1)   // ERROR  Cannot access 'name1' before initialization
    let name1 = "Chanadana"
    console.log(name1)
}
console.log(name1)
// IMPORTANT ####################################################################################
