let person = {
  Name : 'Kartik',
  salary : 25000,
  place : "Pune",
  print : function(){
    console.log(`My Name is ${this.Name} and I earn ${this.salary} and I live in ${this.place}`)
  }
}
person.print()   // My Name is Kartik and I earn 25000 and I live in pune

let person1 = {
  Name : 'Omraj',
  salary : 10000,
  place : 'Mumbai'
}
person.print.call(person1)   // My Name is Omraj and I earn 10000 and I live in Mumbai

let person2 = {
  Name : 'Rohit',
  salary : 20000,
  place : 'Nagpur'
}
person.print.call(person2)  // My Name is Rohit and I earn 20000 and I live in Nagpur


//=====================================================================================================

let employee = {
  Name : 'Sanket',
  salary : 15000,
  age : 25
}

let employee1 = {
  Name : 'Rohit',
  salary : 20000,
  age : 30
}

let employee2 = {
  Name : 'Kartik',
  salary : 25000,
  age : 35
}

function display(company,place){
  console.log(this.Name + " " + this.salary + " " + company + ' ' + place)
}

display.apply(employee,['Google','Pune'])    // Sanket 15000 Google Pune 
display.apply(employee1,['Microsoft','Mumbai'])  // Rohit 20000 Microsoft Mumbai
display.apply(employee2,['TCS','Nagpur'])  // Kartik 25000 TCS Nagpur