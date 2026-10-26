// Array of Objects
let emps = [
    {
        Name : 'Chandana',
        place : 'Amsterdam',
        gender : 'female'
    },
    {
        Name : 'Gayatri',
        place : 'examba',
        gender : 'female'
    },
    {
        Name : 'Anuj',
        place : 'Mysore',
        gender : 'male'
    }
]
console.log(emps)
console.log(emps[0])

let male_emp = emps.filter((emp)=>emp.gender=='male')
console.log(male_emp)

let female_emp = emps.filter((emp)=>emp.gender=='female')
console.log(female_emp)