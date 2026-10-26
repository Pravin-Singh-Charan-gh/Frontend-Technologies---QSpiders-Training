let emp = {
    Name : 'Vijay',
    salary : 20000,
    hobbies : ['cricket','cooking'],
    address : {
        place : 'Madurai',
        state : 'Tamil Nadu'
    }
}

console.log(emp);
// Accessing the object property
console.log(emp.address)
console.log(emp.address.place)

// updating object property
emp.salary += 10000
emp.address.place = 'Pune'
console.log(emp)

// deleting object property with delete keyword
delete emp.address.state
console.log(emp)

// adding new key value pair
emp.subject = 'SQL'
console.log(emp)