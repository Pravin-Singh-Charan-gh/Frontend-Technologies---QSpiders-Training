// let obj = {
//     name : 'Mohit',
//     age : 33,
//     add : {
//         city : 'pune',
//         state : 'mh'
//     }
// }
// console.log(obj)
// delete obj.add.city
// // console.log(obj)


let std = {
    Name : 'Tejas',
    age : 21
}
let emp = {
    Name : 'Nitin',
    age : 23
}

// keys() : keys method return the keys of respective object
console.log(Object.keys(emp))

// values() : this method return sthe values of respective object
console.log(Object.values(std))

// entries() : this method returns the both key value data of respective object
console.log(Object.entries(std))

// seal()
Object .seal(std)
console.log(Object.isSealed(std))

console.log(std)  //{Name: 'Tejas', age: 21}
delete std.age
std.subject = 'Science'
console.log(std) //{Name: 'Tejas', age: 21}
std.age = 34
console.log(std) //{Name: 'Tejas', age: 34}


// freeze()
Object.freeze(emp)   
console.log(Object.isSealed(emp))   // true
console.log(Object.isFrozen(emp))   // true
console.log(emp)            //{Name: 'Nitin', age: 23}
delete emp.age 
emp.subject = "Maths"
emp.age = 56
console.log(emp)        // {Name: 'Nitin', age: 23}

// in 
obj = {
    add : {
        city : 'Pune',
        state : 'MH'
    }
}
console.log('state' in obj.add)   //true
delete obj.add.state
console.log(obj)   // false


//assign() : this method is used to add more properties inside object
emp = {
    Name : 'Anuradha',
    salary : 200000,
    address : {
        city : 'nippani',
        state : 'Karnataka'
    }
}

Object.assign(emp,{
    company : 'Google',
    age : 12,
    id : 1234
})
console.log(emp)