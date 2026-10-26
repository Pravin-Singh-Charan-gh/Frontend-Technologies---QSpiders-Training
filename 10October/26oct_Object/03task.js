// Create an array  of 10 object (employees) which includes

// Name, age , salary , department ,hobbies, place, eid, isMarried
// 1. Extract the employees with same age
// 2. Extract the employees whos department is same
// 3. Increase the salary by 15% of employees whose having more than 50,000
// 4. Extract the married employees 
// 5. Extract the all male eployees and give them 25% hike
// 6. Extract the all female employees and deduct their salary by 25% and afterwards increase by 50%
// 7. Add the experince key to the all employees based on their salary
// 8. delete all married female emloyees
// 9. Sort all the employees based on their experience
// 10. Sort the employees in reverse order based on their id

let emps = [
    {
        eid : 1,
        Name : 'Ankit',
        gender : 'male',
        age : 23,
        salary : 76472,
        department : 'IT',
        hobbies : ['cricket','music'],
        place : 'pune',
        isMarried : false
    },
    {
        eid : 2,
        Name : 'Mohit',
        gender : 'male',
        age : 23,
        salary : 5345,
        department : 'Operations',
        hobbies : ['Dance','play'],
        place : 'Baglore',
        isMarried : true
    },
    {
        eid : 3,
        Name : 'Ankita',
        gender : 'female',
        age : 34,
        salary : 63746,
        department : 'Sales',
        hobbies : ['hocky','music'],
        place : 'Hyderabad',
        isMarried : true
    },
    {
        eid : 4,
        Name : 'Priya',
        gender : 'female',
        age : 57,
        salary : 24235,
        department : 'HR',
        hobbies : ['travelling','working'],
        place : 'Chennai',
        isMarried : true
    },
    {
        eid : 5,
        Name : 'Rahul',
        gender : 'male',
        age : 78,
        salary : 27462,
        department : 'IT',
        hobbies : ['dancing','shooting'],
        place : 'Mysuru',
        isMarried : true
    },
    {
        eid : 6,
        Name : 'Shila',
        gender : 'female',
        age : 65,
        salary : 76323,
        department : 'HR',
        hobbies : ['hocky','music'],
        place : 'Kochi',
        isMarried : true
    },
    {
        eid : 7,
        Name : 'Jinu',
        gender : 'male',
        age : 34,
        salary : 23647,
        department : 'Operations',
        hobbies : ['hocky','music'],
        place : 'Tiruvanthpuram',
        isMarried : true
    },
    {
        eid : 8,
        Name : 'Mira',
        gender : 'female',
        age : 23,
        salary : 78374,
        department : 'Operations',
        hobbies : ['writing','music'],
        place : 'Mumbai',
        isMarried : false
    },
    {
        eid : 9,
        Name : 'Shubham',
        gender : 'male',
        age : 27,
        salary : 26232,
        department : 'IT',
        hobbies : ['hocky','music'],
        place : 'Pune',
        isMarried : false
    },
    {
        eid : 10,
        Name : 'Sakshi',
        gender : 'female',
        age : 25,
        salary : 72742,
        department : 'HR',
        hobbies : ['dancing','writing'],
        place : 'Mumbai',
        isMarried : true
    }
]

console.log(emps)


// 1. Extract the employees with same age
let age_34 = emps.filter((emp)=>emp.age==34)
console.log(age_34)

// 2. Extract the employees whos department is same
let dept_IT = emps.filter((emp)=>emp.department=='IT')
console.log(dept_IT)

// 3. Increase the salary by 15% of employees whose having more than 50,000
emps.forEach((emp)=>{
    if(emp.salary>50000){
        emp.salary += (emp.salary*15/100)
    }
})
console.log(emps)

// 4. Extract the married employees 
let married_emps = emps.filter((emp)=>emp.isMarried)
console.log(married_emps)

// 5. Extract the all male eployees and give them 25% hike
emps.forEach((emp)=>{
    if(emp.gender=='male'){
        emp.salary += (emp.salary*25/100)
    }
})
console.log(emps)

// 6. Extract the all female employees and deduct their salary by 25% and afterwards increase by 50%
emps.forEach((emp)=>{
    if(emp.gender=='female'){
        emp.salary -= (emp.salary*25/100)
        emp.salary += (emp.salary*50/100)
    }
})
console.log(emps)

// 7. Add the experience key to the all employees based on their salary
emps.forEach((emp) => {
    if (emp.salary > 50000) {
        emp.experience = 10;
    } else if (emp.salary > 40000) {
        emp.experience = 8;
    } else if (emp.salary > 30000) {
        emp.experience = 6;
    } else if (emp.salary > 20000) {
        emp.experience = 4;
    } else if (emp.salary > 10000) {
        emp.experience = 2;
    } else {
        emp.experience = 0;
    }
});
console.log(emps)

// 8. delete all married female emloyees
for(let i=0 ;i<emps.length;i++){
    if(emps[i].isMarried  && emps[i].gender == 'female'){
        delete emps[i]
    }
}
console.log(emps)

// 9. Sort all the employees based on their experience
emps.sort((emp1,emp2)=>emp1.experience-emp2.experience)
console.log(emps)

// 10. Sort the employees in reverse order based on their id
emps.sort((emp1,emp2)=>emp1.eid-emp2.eid).reverse()
console.log(emps)
