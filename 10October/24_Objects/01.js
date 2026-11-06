subjects = ['web tech','java','sql']
subjects += 'mock'
console.log(subjects)
let std = {
    sName : "Rutuja",
    sID : 2345,
    isMarried : false,
    hobbies : ['gaming','anime'],
    scholarship : 20000,
    age : Symbol(19),
    skills : subjects
}

let std2 = {
    sName : "Priti",
    sID : 1234,
    isMarried : true,
    hobbies : ['travelling','music'],
    scholarship : 20000,
    age : Symbol(19),
    skills : subjects
}

console.log(std)
console.log(std2)

// Accessing object property dot notation with key
console.log(std2.hobbies)

// true becuz we stored number data type
console.log(std.scholarship == std2.scholarship);

// false becuz we stored this with symbol data type
// Symbol() : It is primitive object datatype which stores exact same values uniquely
console.log(std.age == std2.age);

console.log(std.skills == std2.skills)

// std.skills.