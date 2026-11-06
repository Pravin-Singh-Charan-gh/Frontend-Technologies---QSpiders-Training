// function Emp(Name, age, salary){
//     let emp = new Object()
//     emp.Name = Name 
//     emp.age = age 
//     emp.salary = salary 

//     return emp
// }

// let emp1 = Emp('Pravin',23,1000000)
// console.log(emp1)

function emp(Name,age,salary){
    // let this = new Object()
    this.Name = Name 
    this.age = age
    this.salary = salary
}

let e1 = new emp('Rohit',26,100000)
let e2 = new emp('Mohit',28,200000)

console.log(e1)
console.log(e2)